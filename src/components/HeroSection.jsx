import { Download, Mail } from "lucide-react";
import ProfilePic from "../assets/profilePic.jpeg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="container mx-auto py-16 px-4 md:px-6 flex flex-col items-center text-center"
    >
      {/* Profile Image */}
      <div className="relative w-65 h-65 mb-6">
        <img
          src={ProfilePic}
          alt="Profile"
          className="rounded-full object-cover border-4 border-gray-200 w-full h-full"
        />
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Phin Shen</h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        I'm a passionate Software Developer with a focus on creating clean,
        efficient, and user-friendly web experiences. Welcome to my portfolio!
      </p>

      {/* Button */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Download Resume Button */}
        <button className="flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 text-lg font-semibold">
          <Download className="mr-2 h-5 w-5" /> Download Resume
        </button>

        {/* Contact Me */}
        <a
          href="#contact"
          className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-100 text-lg font-semibold"
        >
          <Mail className="mr-2 h-5 w-5" /> Contact Me
        </a>
      </div>
    </section>
  );
}
