"use client"

import { useState, useEffect } from "react"
import { ChevronsLeftRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Position = "Blockchain Developer" | "Frontend Developer" | "Backend Developer"

interface PositionPillProps {
    initialPosition?: Position
    onChange?: (position: Position) => void
    className?: string
}

export default function PositionPill({ initialPosition = "Blockchain Developer", onChange, className }: PositionPillProps) {
    const [position, setPosition] = useState<Position>(initialPosition as Position)
    const [isAnimating, setIsAnimating] = useState(false)

    const positions: Position[] = ["Blockchain Developer", "Frontend Developer", "Backend Developer"]

    const handlePositionChange = () => {
        setIsAnimating(true)

        // Find the next position in the array
        const currentIndex = positions.indexOf(position)
        const nextIndex = (currentIndex + 1) % positions.length
        const nextPosition = positions[nextIndex]

        setTimeout(() => {
            setPosition(nextPosition)
            if (onChange) onChange(nextPosition)

            setTimeout(() => {
                setIsAnimating(false)
            }, 300)
        }, 300)
    }

    useEffect(() => {
        if (initialPosition !== position) {
            setPosition(initialPosition as Position)
        }
    }, [initialPosition])

    return (
        <div className={cn("relative flex items-center gap-2 max-w-fit", className)}>
            <div
                className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-800 text-zinc-300 transition-all duration-300",
                    isAnimating ? "opacity-0 transform -translate-y-2" : "opacity-100 transform translate-y-0",
                )}
            >
                <span className="text-sm md:text-lg whitespace-nowrap">{position}</span>
                <button
                    onClick={handlePositionChange}
                    className="flex items-center justify-center p-1 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors"
                    aria-label="Change position"
                >
                    <ChevronsLeftRight />
                </button>
            </div>
        </div>
    )
}
