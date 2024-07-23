// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} Link Sharing App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
