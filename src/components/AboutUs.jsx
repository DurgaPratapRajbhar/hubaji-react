import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/image/services/2.jpeg" // Replace with your image path
                alt="Steel Fabrication"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
                About Us
              </span>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Empowering Your Spaces with Quality Steel Fabrication
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Based in Mumbai, Maharashtra, we specialize in crafting high-quality steel products tailored to your needs. Our offerings include kitchen trolleys, railings, doors, gates, sliding systems, and balcony grills.
            </p>

            <div className="space-y-4">
              {[
                'Expert craftsmanship with attention to detail',
                'Customized solutions to fit your specific requirements',
                'Timely project completion and reliable service',
                'Competitive pricing without compromising on quality'
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-cyan-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
              Contact Us
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
