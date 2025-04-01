import Image from 'next/image'

export function CommunitySection() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 bg-gray-50 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See What Your<br />
            Neighbors Are<br />
            Showering In.
          </h2>
          
          <p className="text-lg text-gray-700">
            With every user contributing anonymized data, you&apos;ll see 
            water hardness trends across your city.
          </p>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold mb-2">Community-Powered Data</h3>
              <p className="text-sm text-gray-600">
                Connect with neighbors and view aggregated water quality information in your area.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold mb-2">Regional Insights</h3>
              <p className="text-sm text-gray-600">
                Understand how water quality varies across different parts of your city.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold mb-2">Privacy-First Approach</h3>
              <p className="text-sm text-gray-600">
                All data is anonymized to protect your privacy while providing valuable community insights.
              </p>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-lg bg-white">
          <Image 
            src="/map.png" 
            alt="Map showing water hardness data across London" 
            width={600}
            height={500}
            className="object-contain w-full"
          />
          <div className="p-4 bg-white">
            <p className="text-sm text-gray-700 font-medium">
              What your neighbors are showering in.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 