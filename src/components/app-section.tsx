import Image from 'next/image'

export function AppSection() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24" id="app-demo">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            An App That Puts<br />You in Control.
          </h2>
          
          <p className="text-lg text-gray-700">
            Our intuitive mobile app gives you real-time insights into your water quality, 
            helping you make informed decisions for healthier skin, hair, and home.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h3 className="font-semibold mb-2">Real-Time Monitoring</h3>
              <p className="text-sm text-gray-600">View water hardness levels and contaminant alerts as they happen.</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h3 className="font-semibold mb-2">Personalized Insights</h3>
              <p className="text-sm text-gray-600">Get recommendations based on your water quality and usage patterns.</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h3 className="font-semibold mb-2">Smart Notifications</h3>
              <p className="text-sm text-gray-600">Receive alerts when water quality changes or filter needs replacement.</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h3 className="font-semibold mb-2">Historical Data</h3>
              <p className="text-sm text-gray-600">Track water quality trends over time to see improvements.</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center items-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl py-12">
          <Image 
            src="/phone1.png" 
            alt="Water quality monitoring app interface" 
            width={300} 
            height={600}
            className="object-contain shadow-lg"
          />
        </div>
      </div>
      
      <div className="mt-24" id="compare">
        <h2 className="text-3xl font-bold mb-8 text-center">How We Compare</h2>
        
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
  )
} 