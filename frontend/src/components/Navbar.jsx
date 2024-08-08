/* eslint-disable no-unused-vars */
// src/components/Navbar.jsx

const Navbar = () => {
  return (
    <nav className="bg-transparent text-black p-4 flex justify-between items-center">
    <div className="text-xl font-bold">Travel Itinerary Generator</div>
    <div className="flex space-x-4">
      <a href="#" className="hover:underline">Home</a>
      <a href="#" className="hover:underline">About</a>
    </div>
  </nav>
  )
}

export default Navbar;
