export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Brand & Nav */}
        <div>
          <h2 className="text-white text-2xl font-bold">PneumoCare</h2>
          <p className="mt-4 text-gray-400 text-sm">
            Together for healthier lungs and better lives.
          </p>
          <nav className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white">About Us</a>
            <a href="#" className="hover:text-white">Service</a>
            <a href="#" className="hover:text-white">Doctors</a>
            <a href="#" className="hover:text-white">Schedule</a>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg">Contact</h3>
          <p className="mt-4 text-gray-400 text-sm">123 Wellness Ave, Health City, USA</p>
          <p className="text-gray-400 text-sm">+1 (234) 456-7890</p>
          <p className="text-gray-400 text-sm">support@pneumocare.com</p>
        </div>

        {/* Newsletter */}
        {/* <div>
          <h3 className="text-white font-semibold text-lg">Stay Updated with Us</h3>
          <form className="mt-4 flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div> */}
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PneumoCare. All rights reserved.
      </div>
    </footer>
  );
}
