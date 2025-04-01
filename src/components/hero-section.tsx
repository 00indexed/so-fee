import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 relative bg-white/30 p-6 md:p-0 md:bg-transparent rounded-2xl backdrop-blur-sm md:backdrop-blur-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-800">
            Sophie&apos;s Story<br />
            is Everyone&apos;s Story.
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
              London tap water averages 293 mg/L calcium carbonate - that&apos;s harder 
              than 90% of cities worldwide.
            </p>
          </div>
          
          <div className="pt-6">
            <Link href="#register">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full px-8 py-4 transition-colors">
                JOIN CLOSED ALPHA
              </button>
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center items-center mt-8 md:mt-0">
          <div className="relative w-full max-w-xs md:max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 rounded-3xl blur-xl -z-10 scale-95 opacity-50"></div>
            
            <Image 
              src="/1_product_bg_removed.png" 
              alt="Smart water monitoring device" 
              width={550} 
              height={800}
              className="object-contain z-10 mx-auto"
              priority
            />
            
            {/* Annotation 1 - Left side */}
            <div className="absolute top-1/3 -left-32 z-20 hidden lg:flex items-center">
              <div className="text-right mr-2">
                <p className="font-medium text-sm">Real-time water quality data     </p>
              </div>
              <div className="w-24 h-[1px] bg-black relative">
                <div className="absolute w-2 h-2 rounded-full bg-black -right-1 -top-1"></div>
                <div className="absolute w-2 h-2 rounded-full bg-black -left-1 -top-1"></div>
              </div>
            </div>
            
            {/* Annotation 2 - Right side */}
            <div className="absolute bottom-1/3 -right-40 z-20 hidden lg:flex items-center">
              <div className="w-24 h-[1px] bg-black relative">
                <div className="absolute w-2 h-2 rounded-full bg-black -left-1 -top-1"></div>
                <div className="absolute w-2 h-2 rounded-full bg-black -right-1 -top-1"></div>
              </div>
              <div className="text-left ml-2">
                <p className="font-medium text-sm">Filters out contanimants<br/>& optimises water nutrient levels</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 