import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <div className="flex flex-col space-y-16">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            WE CREATE<br />
            BEST DIGITAL<br />
            PRODUCTS.
          </h1>
          
          <div className="pt-6">
            <Link href="#contact">
              <Button variant="outline" className="rounded-full px-8 py-6 text-sm border-black hover:bg-black hover:text-white">
                DISCUSS THE PROJECT
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-md">
            <p className="text-sm md:text-base uppercase font-medium">
              WE ARE THE LEADERS IN WEB & MOBILE<br />
              DESIGN AND DEVELOPMENT INDUSTRY.
            </p>
          </div>
          
          <div className="mt-8 md:mt-0">
            <span className="text-sm md:text-base uppercase font-medium flex items-center">
              WHO WE ARE <span className="ml-2 border-t border-black w-12 inline-block"></span>
            </span>
          </div>
        </div>
        
        <div className="max-w-2xl">
          <p className="text-base md:text-lg">
            We create quality content and cool ideas. We create websites, applications, 3D design,
            motion design and animation. We bring the most daring ideas to life
          </p>
        </div>
      </div>
    </div>
  )
} 