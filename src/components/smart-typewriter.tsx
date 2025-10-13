'use client'

import { useState, useEffect } from 'react'

interface SmartTypewriterProps {
  baseText: string
  replacements: { word: string; delay?: number; baseText?: string }[]
  typingSpeed?: number
  deletingSpeed?: number
  className?: string
}

export default function SmartTypewriter({
  baseText,
  replacements,
  typingSpeed = 80,
  deletingSpeed = 40,
  className = ''
}: SmartTypewriterProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayWord, setDisplayWord] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [phase, setPhase] = useState<'typing' | 'waiting' | 'deleting' | 'deleting-base'>('typing')
  const [currentBase, setCurrentBase] = useState(baseText)
  const [targetBase, setTargetBase] = useState(baseText)

  useEffect(() => {
    const currentReplacement = replacements[currentIndex]
    const targetWord = currentReplacement.word

    if (phase === 'typing' && displayWord === targetWord) {
      // Finished typing, wait before deleting
      const timeout = setTimeout(() => {
        setPhase('waiting')
      }, 100)
      return () => clearTimeout(timeout)
    }

    if (phase === 'waiting') {
      const timeout = setTimeout(() => {
        setPhase('deleting')
      }, currentReplacement.delay || 2000)
      return () => clearTimeout(timeout)
    }

    if (phase === 'deleting' && displayWord === '') {
      // Finished deleting word, check if we need to delete base text
      const nextIndex = (currentIndex + 1) % replacements.length
      const nextReplacement = replacements[nextIndex]
      const nextBase = nextReplacement.baseText !== undefined ? nextReplacement.baseText : baseText

      if (nextBase.length < currentBase.length) {
        // Need to delete some base text
        setTargetBase(nextBase)
        setPhase('deleting-base')
      } else {
        // Base text stays same or grows, just start typing
        setCurrentBase(nextBase)
        setPhase('typing')
        setCurrentIndex(nextIndex)
      }
      return
    }

    if (phase === 'deleting-base' && currentBase !== targetBase) {
      // Delete base text character by character
      const timeout = setTimeout(() => {
        setCurrentBase(currentBase.substring(0, currentBase.length - 1))
      }, deletingSpeed)
      return () => clearTimeout(timeout)
    }

    if (phase === 'deleting-base' && currentBase === targetBase) {
      // Finished deleting base, move to next word
      const nextIndex = (currentIndex + 1) % replacements.length
      setPhase('typing')
      setCurrentIndex(nextIndex)
      return
    }

    // Type or delete character
    if (phase === 'typing') {
      const timeout = setTimeout(() => {
        setDisplayWord(targetWord.substring(0, displayWord.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }

    if (phase === 'deleting') {
      const timeout = setTimeout(() => {
        setDisplayWord(targetWord.substring(0, displayWord.length - 1))
      }, deletingSpeed)
      return () => clearTimeout(timeout)
    }
  }, [displayWord, phase, currentIndex, replacements, typingSpeed, deletingSpeed, currentBase, targetBase, baseText])

  return (
    <div className="inline-block">
      <div className={`${className} px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 ease-out`}>
        <span>{currentBase}</span>
        <span>{displayWord}</span>
        <span className="animate-pulse">|</span>
      </div>
    </div>
  )
}
