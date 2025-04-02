import Link from 'next/link'

export function FooterSection() {
  return (
    <footer className="bg-gray-800 text-white py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              </div>
              <span className="font-bold text-lg">So-fee</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Helping you understand and improve your water quality for healthier living.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-300 hover:text-white">Features</Link></li>
              <li><Link href="#app-demo" className="text-gray-300 hover:text-white">App Demo</Link></li>
              <li><Link href="#compare" className="text-gray-300 hover:text-white">Comparison</Link></li>
              <li><Link href="#preorder" className="text-gray-300 hover:text-white">Pre-order</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Water Quality Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">Email:</span>
                <a href="mailto:ugochukwu.ui@outlook.com" className="text-blue-400 hover:text-blue-300">ugochukwu.ui@outlook.com</a>
              </li>
              <li className="text-gray-300">
                <span className="block">Phone:</span>
                <a href="tel:+447465415311" className="text-blue-400 hover:text-blue-300">+44 7465 415311</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 So-fee. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 