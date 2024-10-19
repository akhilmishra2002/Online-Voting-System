import { Button } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 relative"
      style={{
        backgroundImage: 'linear-gradient(to right, #00C6FF, #0072FF)', // Sky Blue to Deep Blue
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className={`rounded-2xl shadow-xl p-12 max-w-lg text-center transition-colors duration-300 transform ${
          isHovered ? 'scale-95' : 'scale-100'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ backgroundColor: isHovered ? 'linear-gradient(to right, #FF9933, #FFFFFF, #138808)' : '#003366' }} // Dark blue or Indian tricolor on hover
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase">
        EVERY VOTE IS YOUR VOICE
        </h1>
        <div className="flex flex-col space-y-4">
          <Link to="/login">
            <Button
              gradientDuoTone="orangeToGreen"
              className="w-full text-2xl md:text-3xl hover:bg-white hover:text-[#00C6FF] transition duration-300"
              style={{ backgroundColor: '#00C6FF', color: 'white' }} // Sky Blue for button
            >
              Login As Voter
            </Button>
          </Link>
          <Link to="/admin-login">
            <Button
              gradientDuoTone="orangeToGreen"
              className="w-full text-2xl md:text-3xl hover:bg-white hover:text-[#0072FF] transition duration-300"
              style={{ backgroundColor: '#0072FF', color: 'white' }} // Deep Blue for button
            >
              Login As Admin
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
