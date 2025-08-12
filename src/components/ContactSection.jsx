import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="container mx-auto py-16 px-4 md:px-4 bg-gray-50"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Get In Touch
      </h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 mg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className=" h-6 w-6 text-gray-700" />
              <a
                href="mailto:iampx95@gmail.com"
                className="text-gray-700 hover:underline"
              >
                iampx95@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="h-6 w-6 text-gray-700" />
              <a
                href="https://www.linkedin.com/in/phin-shen-chin-96290b244"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="h-6 w-6 text-gray-700" />
              <a
                href="https://github.com/phinshen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <form className="space-y-6 bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placehodler="Your Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placehodler="Your Email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              row="5"
              placehodler="Your message..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
