export default function Contact() {
  return (
    <div className="space-y-8 p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
      <p className="text-gray-700 text-lg">We'd love to hear from you! Reach out to us using the details below.</p>
      
      <div className="border-t border-gray-300 pt-6">
        <h2 className="text-xl font-semibold text-gray-900">Our Address</h2>
        <p className="text-gray-700">Shop No. 4, Sector 3, Belpada, Kharghar, Navi Mumbai</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-900">Get in Touch</h2>
        <p className="text-gray-700">📞 <a href="tel:+917039942090" className="text-indigo-600 hover:underline">+91 70399 42090</a></p>
        <p className="text-gray-700">📧 <a href="mailto:rajbhardp@gmail.com" className="text-indigo-600 hover:underline">rajbhardp@gmail.com</a></p>
      </div>
    </div>
  );
}
