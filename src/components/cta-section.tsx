import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTASection() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24" id="preorder">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Take Control of Your Water Quality Today
        </h2>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-blue-100">
          Join thousands of homeowners and renters who are discovering 
          what's really in their water and taking steps to improve it.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            Pre-Order Now
          </Button>
          
          <Link href="#contact">
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-blue-700">
              Learn More
            </Button>
          </Link>
        </div>
        
        <div className="mt-12 max-w-lg mx-auto">
          <p className="text-blue-100 mb-3 font-medium">Stay updated on our launch:</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-4 py-3 rounded-lg w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Button className="bg-blue-900 hover:bg-blue-950 text-white">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-blue-200 mt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  )
} 