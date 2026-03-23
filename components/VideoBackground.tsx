import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { useScroll, useMotionValueEvent, motion, useTransform } from 'framer-motion';

interface VideoBackgroundSingleProps {
  src: string;
}

interface VideoBackgroundMultiProps {
  sources: readonly string[];
  /** Use scroll progress (0-1) to switch videos; each video scrubs within its segment. */
}

type VideoBackgroundProps = VideoBackgroundSingleProps | VideoBackgroundMultiProps;

function isMultiProps(props: VideoBackgroundProps): props is VideoBackgroundMultiProps {
  return 'sources' in props && Array.isArray(props.sources);
}

export const VideoBackground: React.FC<VideoBackgroundProps> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();

  // Single video mode: autoplay + loop as soon as the stream is ready
  if (!isMultiProps(props)) {
    const { src } = props;

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      let hls: Hls | null = null;
      const play = () => {
        video.play().catch((e) => console.error('Auto-play failed:', e));
      };

      if (Hls.isSupported()) {
        hls = new Hls({ enableWorker: true });
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, play);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
        video.addEventListener('loadedmetadata', play, { once: true });
      }

      return () => {
        if (hls) hls.destroy();
      };
    }, [src]);

    return (
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
    );
  }

  // Multi-video mode: parallax-style scroll-linked crossfade — opacity driven by scroll position
  const { sources } = props;
  const count = sources.length;
  const [prevIndex, setPrevIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<{ A: Hls | null; B: Hls | null }>({ A: null, B: null });

  // Parallax opacity: scroll position directly controls blend between prev and next video
  const opacityPrev = useTransform(scrollYProgress, (p) => {
    if (count === 0) return 1;
    const raw = Math.max(0, Math.min(count - 0.001, p * count));
    const i = Math.floor(raw);
    const n = Math.min(count - 1, i + 1);
    const blend = raw - i;
    return i === n ? 1 : 1 - blend;
  });
  const opacityNext = useTransform(scrollYProgress, (p) => {
    if (count === 0) return 0;
    const raw = Math.max(0, Math.min(count - 0.001, p * count));
    const i = Math.floor(raw);
    const n = Math.min(count - 1, i + 1);
    const blend = raw - i;
    return i === n ? 0 : blend;
  });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (count === 0) return;
    const raw = progress * count;
    const i = Math.min(count - 1, Math.max(0, Math.floor(raw)));
    const n = Math.min(count - 1, i + 1);
    setPrevIndex((prev) => (prev !== i ? i : prev));
    setNextIndex((prev) => (prev !== n ? n : prev));
  });

  const prevSrc = sources[prevIndex];
  const nextSrc = sources[nextIndex];

  // Load prev video into slot A
  useEffect(() => {
    const el = videoARef.current;
    if (!el || !prevSrc) return;
    let hls: Hls | null = null;
    const play = () => el.play().catch((e) => console.error('Auto-play failed:', e));
    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true });
      hls.loadSource(prevSrc);
      hls.attachMedia(el);
      hls.on(Hls.Events.MANIFEST_PARSED, play);
      hlsRef.current.A = hls;
    } else if (el.canPlayType('application/vnd.apple.mpegurl')) {
      el.src = prevSrc;
      el.addEventListener('loadedmetadata', play);
    }
    return () => {
      if (hls) {
        hls.destroy();
        hlsRef.current.A = null;
      }
    };
  }, [prevSrc]);

  // Load next video into slot B (only when transitioning to next segment)
  useEffect(() => {
    const el = videoBRef.current;
    if (!el || !nextSrc || nextIndex >= count || nextIndex === prevIndex) return;
    let hls: Hls | null = null;
    const play = () => el.play().catch((e) => console.error('Auto-play failed:', e));
    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true });
      hls.loadSource(nextSrc);
      hls.attachMedia(el);
      hls.on(Hls.Events.MANIFEST_PARSED, play);
      hlsRef.current.B = hls;
    } else if (el.canPlayType('application/vnd.apple.mpegurl')) {
      el.src = nextSrc;
      el.addEventListener('loadedmetadata', play);
    }
    return () => {
      if (hls) {
        hls.destroy();
        hlsRef.current.B = null;
      }
    };
  }, [nextSrc, nextIndex, prevIndex, count]);

  const videoClass = 'absolute inset-0 w-full h-full object-cover';
  const showNext = nextIndex < count && nextIndex !== prevIndex;

  return (
    <>
      <motion.div className="absolute inset-0" style={{ opacity: opacityPrev }}>
        <video ref={videoARef} className={videoClass} loop muted playsInline preload="auto" />
      </motion.div>
      {showNext && (
        <motion.div className="absolute inset-0" style={{ opacity: opacityNext }}>
          <video ref={videoBRef} className={videoClass} loop muted playsInline preload="auto" />
        </motion.div>
      )}
    </>
  );
};
