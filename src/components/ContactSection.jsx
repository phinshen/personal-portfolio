import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Send,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Option 1: Open email client with pre-filled data
      const subject = `Contact from ${formData.name}`;
      const body = `Hi there!\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:iampx95@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;

      // Reset form and show success
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus("success");

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="container mx-auto py-16 px-4 md:px-4 bg-gray-50"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Get In Touch
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side - Info */}
        <div className="space-y-8">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Have a question or want to work together? Feel free to reach out!
            </p>
            <p className="text-gray-600">
              I'm always interested in hearing about new opportunities and
              connecting with fellow developers.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Connect with me
            </h3>

            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Mail className="h-6 w-6 text-gray-800" />
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <a
                  href="mailto:iampx95@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  iampx95@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Linkedin className="h-6 w-6 text-gray-800" />
              <div>
                <p className="font-medium text-gray-800">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/phin-shen-chin-96290b244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Connect with me
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Github className="h-6 w-6 text-gray-800" />
              <div>
                <p className="font-medium text-gray-800">GitHub</p>
                <a
                  href="https://github.com/phinshen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  View my projects
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send me a message
          </h3>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <p className="text-green-700">
                Message sent successfully! Your email client should open
                shortly.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700">
                Something went wrong. Please try again or email me directly.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message..."
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 font-medium"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
