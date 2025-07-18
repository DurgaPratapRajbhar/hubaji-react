import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-cyan-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <img src="/logo.jpg" alt="Logo" width={150} height={50} />
          </Link>
          <p className="text-gray-600 text-sm">
            {/* Elevating digital experiences to connect and inspire globally. */}
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-gray-900 font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2">
            {['Gallery', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="text-gray-600 hover:text-indigo-600 text-sm">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-gray-900 font-semibold text-lg mb-3">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <Link href="http://facebook.com/atozsteelfabrication" className="flex items-center text-gray-600 hover:text-indigo-600 text-sm">
                <FaFacebook className="mr-2 text-xl" /> Facebook
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/atozfabricationworks/" className="flex items-center text-gray-600 hover:text-indigo-600 text-sm">
                <FaInstagram className="mr-2 text-xl" /> Instagram
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@hubaji9" className="flex items-center text-gray-600 hover:text-indigo-600 text-sm">
                <FaYoutube className="mr-2 text-xl" /> YouTube
              </Link>
            </li>
            <li>
            <Link href="https://wa.me/917039942090" className="flex items-center text-gray-600 hover:text-indigo-600 text-sm">
            <FaWhatsapp className="mr-2 text-xl" /> WhatsApp
          </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-cyan-200 mt-8 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;