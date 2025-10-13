'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
  sequences: { text: string; delay?: number }[]
  typingSpeed?: number
  deletingSpeed?: number
  className?: string
}

export default function Typewriter({
  sequences,
  typingSpeed = 100,
  deletingSpeed = 50,
  className = ''
}: TypewriterProps) {
  const [currentSequenceIndex, setCurrentSequenceIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentSequence = sequences[currentSequenceIndex]
    const targetText = currentSequence.text

    if (!isDeleting && displayText === targetText) {
      // Finished typing, wait before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, currentSequence.delay || 2000)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === '') {
      // Finished deleting, move to next sequence
      setIsDeleting(false)
      setCurrentSequenceIndex((prev) => (prev + 1) % sequences.length)
      return
    }

    // Type or delete character
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(targetText.substring(0, displayText.length - 1))
      } else {
        setDisplayText(targetText.substring(0, displayText.length + 1))
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentSequenceIndex, sequences, typingSpeed, deletingSpeed])

  return (
    <div className={className}>
      <span>{displayText}</span>
      <span className="animate-pulse">|</span>
    </div>
  )
}
