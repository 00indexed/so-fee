"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'

export function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    setStatus('idle');

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        setEmail(''); // Clear the input on success
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (_) {
      setStatus('error');
      setMessage('Failed to connect. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24" id="register">
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 md:p-12 text-white shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be First to Experience Smart Water Monitoring
            </h2>
            
            <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-8 text-blue-50">
              Join our closed alpha program and help shape the future of water quality management
              for homes and apartments everywhere.
            </p>
            
            <div id="email-signup" className="max-w-lg mx-auto md:mx-0">
              <p className="text-blue-50 mb-3 font-medium">Get early access updates:</p>
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address" 
                    className="px-4 py-3 rounded-lg w-full text-gray-800 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-inner h-12"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-indigo-900 hover:bg-indigo-950 text-white shadow-md transition-all disabled:opacity-70 h-12 px-8 rounded-lg whitespace-nowrap text-base font-medium"
                  >
                    {isSubmitting ? 'Submitting...' : 'Sign Up'}
                  </Button>
                </div>
                {message && (
                  <p className={`text-sm mt-2 ${status === 'success' ? 'text-green-200' : 'text-red-200'}`}>
                    {message}
                  </p>
                )}
                <p className="text-xs text-blue-100 mt-2">
                  Limited spots available. We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-300/30 rounded-full blur-xl"></div>
              <Image 
                src="/1_product_bg_removed.png" 
                alt="Smart water monitoring device" 
                width={280} 
                height={400}
                className="drop-shadow-2xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-300/40 w-40 h-40 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 