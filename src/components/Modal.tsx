import React, { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  closeText?: string
}

export default function Modal({ isOpen, onClose, title, children, closeText = 'Close' }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white dark:bg-neutral-900 w-full max-w-lg rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 animate-zoom-in overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-heading font-bold dark:text-white leading-tight">
              {title}
            </h3>
            <button 
              onClick={onClose}
              className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
            {children}
          </div>
          
          <div className="mt-10 flex justify-end">
            <button 
              onClick={onClose}
              className="btn btn-primary px-8 h-12 shadow-lg shadow-primary/20"
            >
              {closeText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
