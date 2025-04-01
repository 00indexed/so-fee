import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Clock, Bell, LineChart, Settings } from 'lucide-react'

export function AppSection() {
  return (
    <div className="w-full py-16 lg:py-32" id="app-demo">
      <div className="container mx-auto px-4">
        <div className="flex gap-6 flex-col items-start mb-12">
          <div>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Mobile App</Badge>
          </div>
          <div className="flex gap-3 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              An App That Puts You in Control
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Our intuitive mobile app gives you real-time insights into your water quality, 
              helping you make informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full mt-10">
            <div className="space-y-8">
              <div className="flex flex-row gap-6 w-full items-start">
                <Clock className="w-5 h-5 mt-1 text-blue-600" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Real-Time Monitoring</p>
                  <p className="text-muted-foreground text-sm">
                    View water hardness levels and contaminant alerts as they happen.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-row gap-6 w-full items-start">
                <Bell className="w-5 h-5 mt-1 text-blue-600" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Smart Notifications</p>
                  <p className="text-muted-foreground text-sm">
                    Receive alerts when water quality changes or filter needs replacement.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-row gap-6 w-full items-start">
                <LineChart className="w-5 h-5 mt-1 text-blue-600" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Historical Data</p>
                  <p className="text-muted-foreground text-sm">
                    Track water quality trends over time to see improvements.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-row gap-6 w-full items-start">
                <Settings className="w-5 h-5 mt-1 text-blue-600" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Personalized Insights</p>
                  <p className="text-muted-foreground text-sm">
                    Get recommendations based on your water quality and usage patterns.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center items-center">
              <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-10 shadow-xl">
                <div className="absolute inset-0 bg-white/50 rounded-3xl blur-sm -z-10"></div>
                <Image 
                  src="/phone_no_bg.png" 
                  alt="Water quality monitoring app interface" 
                  width={300} 
                  height={600}
                  className="object-contain relative z-10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-32" id="compare">
          <div className="mb-16 text-center">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">Comparison</Badge>
            <h2 className="text-3xl md:text-4xl tracking-tighter font-regular mb-4">How We Compare</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our smart water monitoring solution stacks up against traditional options.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-4 px-4 text-left border-b">Features</th>
                  <th className="py-4 px-4 text-center border-b">
                    <span className="font-bold text-blue-600">Our Solution</span>
                  </th>
                  <th className="py-4 px-4 text-center border-b">Brita Jug</th>
                  <th className="py-4 px-4 text-center border-b">Shower Filter</th>
                  <th className="py-4 px-4 text-center border-b">TAPP Water</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">Real-Time Monitoring</td>
                  <td className="py-3 px-4 border-b text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Modular Design</td>
                  <td className="py-3 px-4 border-b text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">App with Notifications</td>
                  <td className="py-3 px-4 border-b text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Works for Shower & Tap</td>
                  <td className="py-3 px-4 border-b text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-3 px-4 border-b text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Battery-Free Options</td>
                  <td className="py-3 px-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 