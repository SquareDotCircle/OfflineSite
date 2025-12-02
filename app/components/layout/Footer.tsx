import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer" className="bg-dark border-t border-dark-border py-12">
      <div className="container mx-auto px-10">
        <div className="flex flex-col">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-8">
            {/* Logo and Menu */}
            <div className="flex flex-col">
              <Link href="/" className="text-2xl font-bold tracking-tight mb-2">
                OFFLINE
              </Link>
              <nav className="flex flex-wrap gap-4 md:gap-8 mt-4">
                <Link href="#home" className="text-gray-500 text-sm uppercase tracking-wider hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="#services" className="text-gray-500 text-sm uppercase tracking-wider hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="#works" className="text-gray-500 text-sm uppercase tracking-wider hover:text-white transition-colors">
                  Our Works
                </Link>
                <Link href="#about" className="text-gray-500 text-sm uppercase tracking-wider hover:text-white transition-colors">
                  About
                </Link>
                <Link href="#contact" className="text-gray-500 text-sm uppercase tracking-wider hover:text-white transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Offices and Social */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-lg font-semibold mb-4">Our office</h2>
                <ul className="flex gap-8 text-sm text-gray-500">
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Sydney<br />Tech Central<br />NSW 2000
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="flex gap-8 text-sm text-gray-500">
                  <li>
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-[#333] pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © 2024 Offline
            </div>
            <div>
              <Link
                href="#"
                className="text-gray-600 text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

