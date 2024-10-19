import React from "react";

const AboutPage = () => {
  return (
    <div
      className="p-8 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-black"
      style={{ minHeight: "100vh" }} // Ensures full height
    >
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">About Us</h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-3">APNAMAT</h2>
      <p className="mb-4 text-lg md:text-xl font-medium">
        It is a trusted online voting platform dedicated to fostering democratic engagement. We are committed to ensuring the safety, integrity, and privacy of every vote cast, enabling citizens to participate confidently in the electoral process.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mb-3">Secure Voting:</h2>
      <p className="mb-4 text-lg md:text-xl font-medium">
        We employ cutting-edge security protocols to protect voter information and guarantee the authenticity of each ballot.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mb-3">User-Friendly Interface:</h2>
      <p className="mb-4 text-lg md:text-xl font-medium">
        Our platform is designed to be intuitive and accessible, allowing users to vote effortlessly from any device.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mb-3">Privacy Protection:</h2>
      <p className="mb-4 text-lg md:text-xl font-medium">
        We prioritize the confidentiality of voter data, adhering to stringent data protection regulations to safeguard personal information.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mb-3">Support and Assistance:</h2>
      <p className="text-lg md:text-xl font-medium">
        Our dedicated support team is available to address any inquiries and provide assistance, ensuring a seamless voting experience for all participants.
      </p>
    </div>
  );
};

export default AboutPage;
