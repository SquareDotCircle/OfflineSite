'use client';

import { useEffect, ReactNode } from 'react';
import { cn } from '@/app/lib/utils';
import { useLockBodyScroll } from '@/app/lib/hooks';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export default function Modal({ isOpen, onClose, children, className }: ModalProps) {
  useLockBodyScroll(isOpen);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-[rgba(8,8,8,0.85)] backdrop-blur-[10px] z-[10001] animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div
        className={cn(
          'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'bg-[rgba(12,12,12,0.95)] backdrop-blur-[20px]',
          'border border-dark-border rounded-lg',
          'p-16 z-[10002] animate-fade-in',
          'max-w-[80rem] w-[90%] max-h-[90vh] overflow-y-auto',
          className
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-[30px] h-[30px] cursor-pointer group"
          aria-label="Close"
        >
          <span className="relative block w-full h-[2px] bg-white before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-white before:rotate-45 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:-rotate-45 group-hover:opacity-80 transition-opacity" />
        </button>

        {children}
      </div>
    </>
  );
}

