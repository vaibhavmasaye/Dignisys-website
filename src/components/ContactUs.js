// components/ContactUs.js
"use client";
import Image from "next/image";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // extra validation for email & mobile
    if (!formData.email || !formData.mobile) {
      alert("Email and Mobile are required");
      return;
    }

    setStatus("loading");

    // simulate API call
    setTimeout(() => {
      setStatus("success");

      // after 2s reset
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          mobile: "",
          country: "",
          message: "",
        });
        setStatus("idle");
      }, 10000);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/contactusBg.jpg"
          alt="Contact Us Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#00000073]"></div>
      </div>

      <div className="relative z-10 w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10 my-4 sm:my-6 md:my-8">
        <div className="flex flex-col lg:flex-row items-end gap-8 lg:gap-10 justify-between">
          {/* Text Content - Left Side */}
          <div className="w-full lg:w-6/12 text-white text-center lg:text-left mb-8 lg:mb-10">
            <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight md:leading-snug">
              Optimize your IT infrastructure - Get a free consultation today!
            </h1>
          </div>

          {/* Form / Loader / Success */}
          <div className="w-full lg:w-5/12 ml-auto">
            <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 text-center">
              {status === "loading" && (
                <div className="flex justify-center items-center py-10">
                  <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {status === "success" && (
                <p className="text-green-600 font-semibold text-lg sm:text-xl h-[400px] flex justify-center items-center">
                  ✅ Your message is sent to the team. <br /> The team will
                  contact you soon.
                </p>
              )}

              {status === "idle" && (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 text-left">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
                    >
                      Email ID
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="johndoe@gmail.com"
                      required
                    />
                  </div>

                  {/* Mobile Field */}
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
                    >
                      Mobile No.
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="+91 95625 25487"
                      required
                    />
                  </div>

                  {/* Country Field */}
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                      <option value="USA">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg bg-[#FED322] text-black font-semibold rounded-full hover:bg-[#f8c90e] transition-colors shadow-md"
                    >
                      Send Message
                      <svg
                        className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
