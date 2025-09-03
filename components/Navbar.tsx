export default function Navbar() {
  return (
    <header className=" bg-white z-50">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-black">curazone</div>
        <nav className="hidden md:flex gap-6 text-gray-700">
          <a href="#" className="hover:text-black">About us</a>
          <a href="#" className="hover:text-black">Service</a>
          <a href="#" className="hover:text-black">Doctors</a>
          <a href="#" className="hover:text-black">Schedule</a>
        </nav>
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Book Appointment
        </button>
      </div>
    </header>
  );
}
