import { useEffect, useState, useCallback, useRef } from "react"

const CharacterAnimation = ({ style, label }) => {
    const [description, setDescription] = useState('')
    const [index, setIndex] = useState(0)
    const [labelIndex, setLabelIndex] = useState(0)
    const [developer, setDeveloper] = useState(label[0])
    const [showCursor, setShowCursor] = useState(true)
    const timeoutRef = useRef(null)
    const cursorRef = useRef(null)

    // Cursor blink effect
    useEffect(() => {
        cursorRef.current = setInterval(() => {
            setShowCursor(prev => !prev)
        }, 530) // Smooth cursor blink rate

        return () => {
            if (cursorRef.current) {
                clearInterval(cursorRef.current)
            }
        }
    }, [])

    const loop = useCallback(() => {
        if (index < developer?.length) {
            setDescription(prevState => prevState + developer[index])
            timeoutRef.current = setTimeout(() => {
                setIndex(i => i + 1)
            }, 100) // Faster typing speed
        } else {
            // Pause at the end of each word
            timeoutRef.current = setTimeout(() => {
                setIndex(0)
                if (labelIndex < label?.length - 1) {
                    setLabelIndex(i => i + 1)
                    setDeveloper(label[labelIndex + 1])
                    setDescription('')
                } else {
                    setLabelIndex(0)
                    setDeveloper(label[0])
                    setDescription('')
                }
            }, 2000) // Longer pause between words
        }
    }, [developer, index, label, labelIndex])

    useEffect(() => {
        loop()
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [loop])

    return (
        <span style={{
            ...style,
            display: 'inline-block',
            position: 'relative',
            whiteSpace: 'nowrap',
        }}>
            <span style={{
                background: 'linear-gradient(to right, #fff, #84cc16)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 15px rgba(132, 204, 22, 0.3)',
            }}>
                {description}
            </span>
            <span style={{
                opacity: showCursor ? 1 : 0,
                transition: 'opacity 0.1s ease',
                color: '#84cc16',
                textShadow: '0 0 10px rgba(132, 204, 22, 0.5)',
            }}>|</span>
        </span>
    )
}

export default CharacterAnimation