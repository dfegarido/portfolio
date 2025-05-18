import { useEffect, useState, useCallback, useRef } from "react"
import { useTheme } from "../contexts/ThemeContext"

const CharacterAnimation = ({ style, label }) => {
    const [description, setDescription] = useState('')
    const [index, setIndex] = useState(0)
    const [labelIndex, setLabelIndex] = useState(0)
    const [developer, setDeveloper] = useState(label[0])
    const [showCursor, setShowCursor] = useState(true)
    const timeoutRef = useRef(null)
    const cursorRef = useRef(null)
    const { theme, themeKey } = useTheme() // Get both theme and themeKey

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

    // Force re-render on theme change by using key with themeKey
    return (
        <span 
            key={`char-animation-${themeKey}`}
            className="inline-block relative whitespace-nowrap"
            style={style}
        >
            <span 
                className="animated-text"
                style={{
                    color: theme.secondary, // Fallback color if gradient doesn't work
                    background: `linear-gradient(to right, ${theme.secondary}, ${theme.primary})`,
                    textShadow: `0 0 15px rgba(${theme.primaryRGB}, 0.3)`,
                }}
            >
                {description}
            </span>
            <span 
                className="cursor-blink"
                style={{
                    opacity: showCursor ? 1 : 0,
                    transition: 'opacity 0.1s ease',
                    color: theme.primary,
                    textShadow: `0 0 10px rgba(${theme.primaryRGB}, 0.5)`,
                }}
            >
                |
            </span>
        </span>
    )
}

export default CharacterAnimation