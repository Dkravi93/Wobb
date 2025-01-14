// Project setup with Vite + Tailwind CSS
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TfiAlignJustify } from 'react-icons/tfi';
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import './index.css';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Wobb</h1>
          <div className="md:hidden">
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="text-gray-600 hover:text-blue-600 text-2xl focus:outline-none"
            >
              <TfiAlignJustify />
            </button>
          </div>
          <nav className="hidden md:flex space-x-4">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Campaigns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
              <li className="flex items-center"><a href="#" className="text-gray-600 hover:text-blue-600"><CiSearch /></a></li>
              <li className="flex items-center"><a href="#" className="text-gray-600 hover:text-blue-600"><CiShoppingCart /></a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)}></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow z-50 transform transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden w-64`}
      >
        <div className="p-6">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-600 text-2xl focus:outline-none"
          >
            &times;
          </button>
          <ul className="mt-8 space-y-4">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Campaigns</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Connect with Top Brands</h2>
          <p className="text-lg mb-6">Browse campaigns, collaborate with brands, and earn rewards.</p>
          <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded shadow hover:bg-gray-100">Explore Campaigns</button>
        </div>
      </section>

      {/* Feature Section */}
      <section className="container mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h4 className="text-lg font-bold mb-2">Easy Communication</h4>
            <p className="text-gray-600">Streamline your communication with our tools, making it easier to share your requirements.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h4 className="text-lg font-bold mb-2">Expert Team</h4>
            <p className="text-gray-600">Work with our experienced professionals for seamless project execution.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="text-lg font-bold mb-2">Friendly Support</h4>
            <p className="text-gray-600">Our dedicated support team ensures you’re never left in the dark.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h4 className="text-lg font-bold mb-2">Hassle-Free Refunds</h4>
            <p className="text-gray-600">We offer one of the most flexible refund policies to ensure your satisfaction.</p>
          </div>
        </div>
      </section>

      {/* Campaign Cards */}
      <section className="container mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold mb-6">Active Campaigns</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example card */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg">
            <img src="https://picsum.photos/400" alt="Brand Logo" className="w-full h-40 object-cover rounded" />
            <h4 className="text-xl font-bold mt-4">Brand Name</h4>
            <p className="text-gray-600">Barter | Fixed Pay</p>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Hired: 4/10</span>
                <span>Ends: 20 Jan</span>
              </div>
              <div className="relative w-full bg-gray-200 rounded mt-2">
                <div className="absolute top-0 left-0 h-2 bg-blue-600 rounded" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg">
            <img src="https://picsum.photos/400" alt="Brand Logo" className="w-full h-40 object-cover rounded" />
            <h4 className="text-xl font-bold mt-4">Brand Name</h4>
            <p className="text-gray-600">Barter | Fixed Pay</p>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Hired: 4/10</span>
                <span>Ends: 20 Jan</span>
              </div>
              <div className="relative w-full bg-gray-200 rounded mt-2">
                <div className="absolute top-0 left-0 h-2 bg-blue-600 rounded" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg">
            <img src="https://picsum.photos/400" alt="Brand Logo" className="w-full h-40 object-cover rounded" />
            <h4 className="text-xl font-bold mt-4">Brand Name</h4>
            <p className="text-gray-600">Barter | Fixed Pay</p>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Hired: 4/10</span>
                <span>Ends: 20 Jan</span>
              </div>
              <div className="relative w-full bg-gray-200 rounded mt-2">
                <div className="absolute top-0 left-0 h-2 bg-blue-600 rounded" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg">
            <img src="https://picsum.photos/400" alt="Brand Logo" className="w-full h-40 object-cover rounded" />
            <h4 className="text-xl font-bold mt-4">Brand Name</h4>
            <p className="text-gray-600">Barter | Fixed Pay</p>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Hired: 4/10</span>
                <span>Ends: 20 Jan</span>
              </div>
              <div className="relative w-full bg-gray-200 rounded mt-2">
                <div className="absolute top-0 left-0 h-2 bg-blue-600 rounded" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
          {/* Duplicate the card component for more campaigns */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">&copy; 2025 Wobb. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
