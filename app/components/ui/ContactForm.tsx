'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from './Modal';
import Button from './Button';
import { isValidEmail } from '@/app/lib/utils';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call - in production, send formData to backend
    console.log('Form submitted:', formData);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setNotification({
      message: 'Thank you! Your message has been sent successfully.',
      type: 'success'
    });
    
    reset();
    setIsSubmitting(false);
    
    // Close modal after success
    setTimeout(() => {
      onClose();
      setNotification(null);
    }, 1500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full">
        <h2 className="text-5xl lg:text-6xl font-medium text-center mb-10 tracking-tight">
          Contact us
        </h2>

        {notification && (
          <div
            className={`mb-6 p-4 rounded ${
              notification.type === 'success'
                ? 'bg-green-500/20 border border-green-500/50 text-green-500'
                : 'bg-red-500/20 border border-red-500/50 text-red-500'
            }`}
          >
            {notification.message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2 uppercase tracking-wide">
              Name
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              placeholder="Enter Your name"
              className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 text-white text-lg focus:outline-none focus:border-white/80 transition-colors placeholder:text-white/50"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-2 uppercase tracking-wide">
              Email
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                validate: (value) => isValidEmail(value) || 'Please enter a valid email address'
              })}
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 text-white text-lg focus:outline-none focus:border-white/80 transition-colors placeholder:text-white/50"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-2 uppercase tracking-wide">
              Message
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              placeholder="Enter Description"
              rows={5}
              className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 text-white text-lg focus:outline-none focus:border-white/80 transition-colors resize-vertical min-h-[120px] placeholder:text-white/50"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="flex items-center justify-center pt-4">
            <Button
              type="submit"
              loading={isSubmitting}
              className="px-8 py-4 text-lg uppercase tracking-wide"
            >
              {isSubmitting ? 'Sending...' : 'Send A Message'}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

