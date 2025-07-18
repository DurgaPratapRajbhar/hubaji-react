'use client';
import Image from 'next/image';

const Service = () => {
    const phoneNumber = '7039942090';

    const services = [
        {
            title: "Stainless Steel Railing Fabrication",
            description: "Expert fabrication of stainless steel railings, offering durability and modern aesthetics for residential and commercial properties.",
            image: "/image/services/4.jpeg",
            icon: "handrail",
        },
        {
            title: "Mild Steel (MS) Fabrication",
            description: "Specialized MS fabrication services, providing robust solutions for various structural and architectural needs.",
            image: "/image/services/3.jpeg",
            icon: "building",
        },
        {
            title: "Sheet Metal Fabrication",
            description: "Precision sheet metal fabrication, catering to diverse industries with custom designs and high-quality finishes.",
            image: "/image/services/5.jpeg",
            icon: "cogs",
        }
    ];

    const getWhatsAppLink = (title, description) => {
        const message = encodeURIComponent(`Hello, I'm interested in ${title}.\n\n${description}`);
        return `https://wa.me/${phoneNumber}?text=${message}`;
    };

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium mb-4">
                        Our Services
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Expert Steel Fabrication Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our comprehensive range of steel fabrication solutions, tailored to meet your specific needs.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="relative p-6">
                                <div className="absolute -top-8 left-6 w-16 h-16 bg-cyan-500 rounded-2xl shadow-lg flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                                    <i className={`fa fa-${service.icon} text-2xl text-white`}></i>
                                </div>
                                <div className="pt-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {service.description}
                                    </p>
                                    <a
                                        href={getWhatsAppLink(service.title, service.description)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-200"
                                    >
                                        Chat on WhatsApp
                                        <i className="fa fa-whatsapp ml-2 text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
