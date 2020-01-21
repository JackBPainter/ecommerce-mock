import { useState, useRef, useEffect } from "react"

const useHover = () => {
    const [hovered, setIsHovered] = useState(false)
    const hoverRef = useRef()

    const enter = () => {
        setIsHovered(true)
    }

    const leave = () => {
        setIsHovered(false)
    }

    useEffect(() => {
        hoverRef.current.addEventListener("mouseenter", enter)
        hoverRef.current.addEventListener("mouseleave", leave)

        return () => {
            hoverRef.current.removeEventListener("mouseenter", enter)
            hoverRef.current.removeEventListener("mouseleave", leave)
        }
    }, [])

    return [hovered, hoverRef]
}

export default useHover