'use client';

import { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import { StatusModal } from './status-modal';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Conversation() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'error'>('success');
  const [modalMessage, setModalMessage] = useState('');

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setModalType('error');
      setModalMessage('Please fill in all fields');
      setShowModal(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setModalType('success');
        setModalMessage(
          "Thank you for reaching out. I'll get back to you as soon as possible"
        );
        setFormData({ name: '', email: '', message: '' });
      } else {
        setModalType('error');
        setModalMessage(
          result.error || 'Failed to send message. Please try again.'
        );
      }
      setShowModal(true);
    } catch {
      setModalType('error');
      setModalMessage('Network error. Please try again.');
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        id='conversation'
        className='relative flex flex-col md:flex-row w-full md:w-[1440px] mx-auto pt-20 md:pt-20 pb-30 md:pb-30 px-5 md:px-30 z-[377]'
      >
        {/* Background Table */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full md:w-[1440px] h-[400px] md:h-[893px] bg-[url('/images/bg-table.svg')] bg-cover bg-no-repeat z-[378]" />

        {/* Profile Photo */}
        <div className="w-full md:w-1/2 min-h-[350px] md:h-auto bg-[url('/images/profile-photo4.png')] bg-cover bg-no-repeat rounded-tl-4 md:rounded-tl-[16px] rounded-tr-none rounded-br-none md:rounded-br-none rounded-bl-4 md:rounded-bl-[16px] relative z-[379]" />

        {/* Form Section */}
        <div className='flex flex-col w-full md:w-1/2 bg-[#000] rounded-tl-none md:rounded-tr-[16px] rounded-br-[16px] rounded-bl-none border border-t border-r border-b border-[#22252b] pt-8 md:pt-8 pb-8 md:pb-8 px-5 md:px-5 gap-0 md:gap-8 relative z-[380] '>
          {/* Title */}
          <div className='flex flex-col gap-4 md:gap-4'>
            <span className='text-2xl md:text-4xl font-bold leading-tight md:leading-[60px] text-[#fff]'>
              Start a Conversation
            </span>
            <span className='text-base md:text-lg font-normal leading-8 text-[#a4a7ae]'>
              I&apos;m open to freelance gigs, collaborations, or even just a
              casual chat.
            </span>
          </div>

          {/* Form Inputs */}
          <Form.Root
            onSubmit={handleSubmit}
            className='flex flex-col gap-4 md:gap-6 mt-4'
          >
            {/* Name */}
            <div className='flex flex-col gap-2'>
              <div className='flex gap-1 md:gap-1.5 text-[16px] md:text-[16px] font-bold text-[#fdfdfd]'>
                <span>Name</span>
                <span className='text-[#ee1d52]'>*</span>
              </div>
              <Form.Field name='name' className='w-full md:w-[560px]'>
                <Form.Control asChild>
                  <input
                    type='text'
                    placeholder='What should I call you?...'
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className='w-full md:w-[560px] px-4 py-3 bg-transparent border-t border-[#22252b] text-[#717680] placeholder-[#717680] outline-none'
                    required
                  />
                </Form.Control>
              </Form.Field>
            </div>

            {/* Email */}
            <div className='flex flex-col gap-2'>
              <div className='flex gap-1 md:gap-1.5 text-[16px] md:text-[16px] font-bold text-[#fdfdfd]'>
                <span>Email</span>
                <span className='text-[#ee1d52]'>*</span>
              </div>
              <Form.Field name='email' className='w-full md:w-[560px]'>
                <Form.Control asChild>
                  <input
                    type='email'
                    placeholder='Where can I reach you?...'
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className='w-full md:w-[560px] px-4 py-3 bg-transparent border-t border-[#22252b] text-[#717680] placeholder-[#717680] outline-none'
                    required
                  />
                </Form.Control>
              </Form.Field>
            </div>

            {/* Message */}
            <div className='flex flex-col gap-2'>
              <div className='flex gap-1 md:gap-1.5 text-[16px] md:text-[16px] font-bold text-[#fdfdfd]'>
                <span>Message</span>
                <span className='text-[#ee1d52]'>*</span>
              </div>
              <Form.Field name='message' className='w-full md:w-[560px]'>
                <Form.Control asChild>
                  <textarea
                    placeholder='Tell me about your project or just say hi :) ...'
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange('message', e.target.value)
                    }
                    className='w-full md:w-[560px] px-4 py-3 bg-transparent border-t border-[#22252b] text-[#717680] placeholder-[#717680] outline-none resize-none h-32 md:h-24'
                    required
                  />
                </Form.Control>
              </Form.Field>
            </div>

            {/* Submit Button */}
            <Form.Submit asChild>
              <button
                type='submit'
                disabled={isSubmitting}
                className={`w-full md:w-auto h-12 rounded-md flex justify-center items-center transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                <span
                  className={`text-base md:text-[16px] font-semibold ${
                    isSubmitting ? 'text-gray-400' : 'text-[#000]'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : "Let's Build Something"}
                </span>
              </button>
            </Form.Submit>
          </Form.Root>
        </div>
      </div>

      {/* Status Modal */}
      <StatusModal
        isOpen={showModal}
        type={modalType}
        message={modalMessage}
        onClose={closeModal}
      />
    </>
  );
}
