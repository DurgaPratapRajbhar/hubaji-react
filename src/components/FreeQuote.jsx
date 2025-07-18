'use client';
import { useState } from 'react';
import Image from 'next/image';

const FreeQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.mobile || !/^\d{10,15}$/.test(formData.mobile)) {
      newErrors.mobile = 'Valid mobile number is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const phoneNumber = '8898540057';
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMobile: ${formData.mobile}%0AMessage: ${formData.message || 'None'}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', mobile: '', message: '' });
    setErrors({});
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-[4/3] relative">
              <Image
                src="/image/services/5.jpeg"
                alt="Get Free Quote"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent mix-blend-overlay" />
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2">
  <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
    <div className="mb-8">
      <span className="inline-block px-4 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium mb-4">
        Free Quote
      </span>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Get Your Free Steel Product Quote Today
      </h2>
      <p className="text-gray-600">
        Take the first step towards quality steel products. Fill out the form below and we'll get back to you with a customized solution.
      </p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="relative">
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200"
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200"
            placeholder="Your Email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="relative">
        <input
          type="tel"
          id="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200"
          placeholder="Your Mobile Number"
        />
        {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
      </div>

      <div className="relative">
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200"
          placeholder="Your Company Name"
        />
      </div>

      <div className="relative">
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-200 resize-none"
          placeholder="Your Message (Optional)"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 px-6 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
      >
        Get Free Quote
      </button>
    </form>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default FreeQuote;
