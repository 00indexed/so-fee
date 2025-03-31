import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 relative bg-white/30 p-6 md:p-0 md:bg-transparent rounded-2xl backdrop-blur-sm md:backdrop-blur-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-800">
            Sophie's Story<br />
            is Everyone's Story.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700">
            Sophie is a renter. She loves city life but hates what 
            hard water does to her hair and skin.
          </p>
          
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Dry skin?</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Brittle hair?</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Limescale buildup?</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Uncertain if your tap water safe?</span>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mt-4">
            <p className="text-sm text-gray-700">
              London tap water averages 293 mg/L calcium carbonate - that's harder 
              than 90% of cities worldwide.
            </p>
          </div>
          
          <div className="pt-6">
            <Link href="#preorder">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full px-8 py-4">
                PRE-ORDER NOW
              </button>
            </Link>
          </div>
        </div>

        <div className="relative hidden md:flex justify-center items-center">
          <Image 
            src="/phone1.png" 
            alt="Smart water monitoring device with mobile app" 
            width={380} 
            height={760}
            className="object-contain z-10"
            priority
          />
        </div>
      </div>
    </div>
  )
} 