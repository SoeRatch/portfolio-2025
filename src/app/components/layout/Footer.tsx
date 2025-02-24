const Footer = () => {
    return (
      <footer className="bg-gray-950 text-gray-400 py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Suraj Sharma. All Rights Reserved.</p>
          <div className="flex justify-center gap-4 mt-3">
            <a href="https://github.com/SoeRatch" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </a>
            <a href="https://linkedin.com/in/surajs787" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href="mailto:surajs787@gmail.com" className="hover:text-white">Email</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  