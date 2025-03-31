import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export function CTASection() {
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 shadow-md transition-all">
                Join Closed Alpha
              </Button>
              
              <Link href="#contact">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-blue-600/20 transition-all">
                  Register Interest
                </Button>
              </Link>
            </div>
            
            <div className="max-w-lg mx-auto md:mx-0">
              <p className="text-blue-50 mb-3 font-medium">Get early access updates:</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="px-4 py-3 rounded-lg w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-inner"
                />
                <Button className="bg-indigo-900 hover:bg-indigo-950 text-white shadow-md transition-all">
                  Sign Up
                </Button>
              </div>
              <p className="text-xs text-blue-100 mt-2">
                Limited spots available. We respect your privacy. Unsubscribe at any time.
              </p>
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