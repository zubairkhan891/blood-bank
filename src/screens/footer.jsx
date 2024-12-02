const Footer = () => {
  return (
    <footer className="bg-gray-800 h-[42vh] text-white p-4">
      <div className="container mx-auto text-center pt-16">
        <div className="mb-4">
          <a href="/" className="text-white font-bold text-2xl">Blood Bank</a>
        </div>
        <div className="mb-4 space-x-6">
          <a href="/about" className="hover:text-gray-400">About Us</a>
          <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
          <a href="/contact" className="hover:text-gray-400">Contact Us</a>
        </div>
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
          <a href="#" className="hover:text-gray-400">LinkedIn</a>
        </div>
        <p className="mt-4">&copy; 2023 Blood Bank - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
