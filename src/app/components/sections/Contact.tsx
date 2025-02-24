const Contact = () => {
    return (
      <div id="contact" className="bg-gray-800 p-8 rounded-lg shadow-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        
        <div className="space-y-6 text-lg">
          <p>📩 <strong>Email:</strong> <a href="mailto:surajs787@gmail.com" className="text-yellow-400 hover:text-yellow-500">surajs787@gmail.com</a></p>
          <p>🔗 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/surajs787" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-500">linkedin.com/in/surajs787</a></p>
          
          <div className="border-t border-gray-600 pt-4">
            <p>📍 <strong>Current Location:</strong> Goalpara, Assam, India</p>
          </div>

          <div className="border-t border-gray-600 pt-4">
            <p>🏙️ <strong>Looking for Opportunities In:</strong></p>
            <p className="text-yellow-400">📌 Bangalore, India</p>
            <p className="text-yellow-400">🌍 USA | Switzerland | Canada  | Australia | Netherlands </p>
          </div>
        </div>
      </div>
    );
  };
  
export default Contact;
