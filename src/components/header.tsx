import Link from 'next/link'

export function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-black rounded-full" />
          <div className="w-2 h-2 bg-black rounded-full" />
        </div>
        
        <div className="flex items-center space-x-8">
          <Link href="#" className="text-sm font-medium">
            EN
          </Link>
          <Link href="#contact" className="text-sm font-medium">
            CONTACT US
          </Link>
          <button className="lg:hidden" aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
} 