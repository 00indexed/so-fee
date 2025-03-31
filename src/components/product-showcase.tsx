import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export function ProductShowcase() {
  return (
    <div className="w-full py-16 lg:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-5 md:px-6">
        <div className="flex gap-6 flex-col items-center text-center mb-12">
          <div>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Our Products</Badge>
          </div>
          <div className="flex gap-3 flex-col max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl tracking-tighter font-regular">
              Designed for Every Water Source
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground">
              Our smart water monitoring devices come in different sizes and configurations to fit any shower, faucet, or water line in your home.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-3xl blur-2xl -z-10 scale-95"></div>
              <Image 
                src="/All_products.png" 
                alt="Water monitoring product lineup" 
                width={600} 
                height={400}
                className="relative z-10 object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-6 order-1 md:order-2">
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 md:mb-3">Versatile Installation Options</h3>
              <p className="text-gray-600">
                From shower heads to under-sink installations, our devices easily adapt to your existing plumbing with no special tools required.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 md:mb-3">Real-Time Display</h3>
              <p className="text-gray-600">
                Each device features a clear display showing water quality metrics in real-time, with color indicators for at-a-glance monitoring.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 md:mb-3">Modular Design</h3>
              <p className="text-gray-600">
                Start with one unit and expand your system over time. All devices sync to the same app for whole-home water quality insights.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24">
          <div className="bg-gray-50 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-6 md:p-12 flex flex-col justify-center space-y-3 md:space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold">Shower-Ready Installation</h3>
                <p className="text-gray-600">
                  Our most popular model attaches between your shower pipe and showerhead, providing continuous monitoring without affecting water pressure or your showering experience.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Easy installation in seconds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Real-time water hardness monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Alerts for unsafe contaminants</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-200 overflow-hidden">
                <div className="relative w-full h-[400px] max-h-[70vh] md:h-auto">
                  
                  
                  <Image 
                    src="/concept_design_on_real_shower.png" 
                    alt="Smart water monitor installed on shower" 
                    width={650}
                    height={480}
                    className="w-full h-full object-cover object-center md:object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 