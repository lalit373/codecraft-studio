import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"} min-h-screen font-sans`}>
      <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="https://i.postimg.cc/pTLsBkDG/Chat-GPT-Image-Jun-25-2025-11-26-17-AM.png" alt="CodeCraft Logo" className="h-36 w-auto drop-shadow-lg rounded-md" />
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">CODECRAFT Studio</h1>
        </div>
        <div className="flex items-center space-x-6">
          <nav className="space-x-6">
            <a href="#services" className="hover:text-blue-500 dark:hover:text-blue-300">Services</a>
            <a href="#portfolio" className="hover:text-blue-500 dark:hover:text-blue-300">Portfolio</a>
            <a href="#team" className="hover:text-blue-500 dark:hover:text-blue-300">Team</a>
            <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-300">About</a>
            <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-300">Contact</a>
          </nav>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-2 py-1 border rounded text-sm dark:text-white"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      <section className="p-10 text-center bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <h2 className="text-4xl font-bold mb-4">CNC Programming | CAD/CAM | Part Design</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          I provide precision CNC programming and custom part design using advanced CAD/CAM tools. Fast, reliable, and tailored to your manufacturing needs.
        </p>
        <a href="#contact" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition duration-300">Get a Quote</a>
      </section>

      <section id="about" className="p-10 bg-white dark:bg-gray-900" data-aos="zoom-in-up">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
          <div>
            <h4 className="text-3xl font-bold text-blue-600 dark:text-blue-400">10</h4>
            <p className="text-gray-600 dark:text-gray-300">Projects</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-blue-600 dark:text-blue-400">2</h4>
            <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</h4>
            <p className="text-gray-600 dark:text-gray-300">Client Satisfaction</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-blue-600 dark:text-blue-400">24/7</h4>
            <p className="text-gray-600 dark:text-gray-300">Support</p>
          </div>
        </div>
        <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600 dark:text-blue-400 mt-10">About Us</h3>
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow text-gray-700 dark:text-gray-300">
          <p className="font-bold mb-4">
            At CodeCraft Studio, we specialize in delivering high-quality CNC programming, CAD design, and CAM simulation services tailored for precision and performance. Our mission is to bridge the gap between innovative design and efficient manufacturing by leveraging the latest in CAD/CAM technology.
          </p>
          <p className="font-bold mb-4">
            With a dedicated team of experts and years of industry experience, we take pride in providing personalized engineering solutions that meet the needs of diverse industries including automotive, aerospace, and industrial manufacturing.
          </p>
        </div>
      </section>

      <section id="services" className="p-10 bg-white dark:bg-gray-900" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600 dark:text-blue-400">Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h4 className="font-bold text-lg mb-2">CNC Programming</h4>
            <p>G-code and M-code programming for milling, turning,Mazatrol and multi-axis machining centers.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h4 className="font-bold text-lg mb-2">CAD Design</h4>
            <p>High-precision 2D/3D part design using SolidWorks, AutoCAD, and Fusion 360.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h4 className="font-bold text-lg mb-2">CAM Simulation</h4>
            <p>Toolpath optimization and simulation to ensure efficiency and safety before machining. Like Mastercam, Solidcam, Nx, Catia</p>
          </div>
        </div>
      </section>

      <section id="languages" className="p-10 bg-white dark:bg-gray-900" data-aos="fade-up">
  <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600 dark:text-blue-400">Languages & Systems</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow">
      <h4 className="font-bold text-lg mb-2">G-Code</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">Industry standard for CNC milling and turning.</p>
    </div>
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow">
      <h4 className="font-bold text-lg mb-2">Mazatrol</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">Conversational programming for Mazak machines.</p>
    </div>
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow">
      <h4 className="font-bold text-lg mb-2">Fanuc</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">One of the most widely used controller languages.</p>
    </div>
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow">
      <h4 className="font-bold text-lg mb-2">Siemens</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">Used in advanced CNC systems and shop floor automation.</p>
    </div>
  </div>
</section>



<section id="portfolio" className="p-10 bg-gray-100 dark:bg-gray-800" data-aos="fade-up">
  <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600 dark:text-blue-400">Portfolio</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
      <img src="https://cncmachiningptj.com/upload/image/20191212/20191212030713_91757.jpg" alt="Gearbox Housing Design" className="rounded mb-2" />
      <h4 className="font-bold dark:text-white">Gearbox Housing Design</h4>
    </div>
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
      <img src="https://www.cncyangsen.com/storage/uploads/images/202305/19/1684476184_53OHlwmyTp.jpg" alt="Part 2" className="rounded mb-2" />
      <h4 className="font-bold dark:text-white">3-Axis CNC Programmed Fixture</h4>
    </div>
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
      <img src="http://cfnewsads.thomasnet.com/images/large/527/527253.jpg" alt="Part 3" className="rounded mb-2" />
      <h4 className="font-bold dark:text-white">Automotive Bracket - CAM Simulated</h4>
    </div>
  </div>
</section>

<section id="case-studies" className="p-10 bg-white dark:bg-gray-900" data-aos="fade-up">
  <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600 dark:text-blue-400">Case Studies</h3>
  <div className="space-y-6 max-w-5xl mx-auto">
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
      <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">High Precision Impeller Design</h4>
      <p className="text-gray-700 dark:text-gray-300">Designed and programmed a 5-axis impeller for aerospace application. Optimized toolpath reduced machining time by 25% while maintaining micron-level tolerance. Used Fusion 360 and NX CAM.</p>
    </div>
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
      <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Fixture Design for Multi-Part Setup</h4>
      <p className="text-gray-700 dark:text-gray-300">Created a custom modular fixture system to hold 6 parts simultaneously. Reduced changeover time by 40% and increased throughput for client.</p>
    </div>
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
      <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Retrofitting Legacy Code to Mazatrol</h4>
      <p className="text-gray-700 dark:text-gray-300">Converted legacy G-code into Mazatrol for a client’s old Mazak machine. Enabled automation and improved part quality without needing machine upgrades.</p>
    </div>
  </div>
</section>

      <section id="team" className="p-10 bg-white dark:bg-gray-900" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600 dark:text-blue-400">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
            <img src="https://i.postimg.cc/zXCj0RcW/1740942066523.jpg" alt="Lalit Kumawat" className="w-24 h-24 mx-auto rounded-full mb-4" />
            <h4 className="font-bold text-lg mb-1 dark:text-white">Lalit Kumawat</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Founder & CAD/CAM Expert</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
            <img src="https://i.postimg.cc/V6s3DtLz/Whats-App-Image-2025-06-25-at-23-09-53.jpg" alt="Vipul Maheswari" className="w-24 h-24 mx-auto rounded-full mb-4" />
            <h4 className="font-bold text-lg mb-1 dark:text-white">Vipul Maheswari</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">CNC & CAM Programmer</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
            <img src="https://i.postimg.cc/fRrJXMhF/mr-hans-097-20250625-0001.jpg" alt="Hansraj" className="w-24 h-24 mx-auto rounded-full mb-4" />
            <h4 className="font-bold text-lg mb-1 dark:text-white">Hansraj</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">CAD/CAM Specialist</p>
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="p-10 bg-gray-100 dark:bg-gray-800" data-aos="zoom-in-up">
  <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600 dark:text-blue-400">Why Choose Us</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
      <h4 className="font-bold text-lg mb-2">Precision Engineering</h4>
      <p className="text-gray-600 dark:text-gray-300">We deliver CNC programs and CAD/CAM solutions with tight tolerances and high efficiency.</p>
    </div>
    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
      <h4 className="font-bold text-lg mb-2">Experienced Team</h4>
      <p className="text-gray-600 dark:text-gray-300">Our professionals bring years of expertise in complex design and manufacturing projects.</p>
    </div>
    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
      <h4 className="font-bold text-lg mb-2">Client-Focused</h4>
      <p className="text-gray-600 dark:text-gray-300">We customize solutions to your needs and ensure complete satisfaction and support.</p>
    </div>
  </div>
</section>

<section id="contact" className="p-10 bg-white dark:bg-gray-900" data-aos="fade-up">
  
        <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600 dark:text-blue-400">Contact</h3>
        <div className="max-w-md mx-auto text-center space-y-4">
          <p className="mb-4">Interested in working together? Get in touch!</p>
          <p><strong>Email:</strong> codecraftstudio01@gmail.com</p>
          <p><strong>Phone:</strong> +91-9521384830   +91-8930542553 </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://wa.me/919521384830" target="_blank" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">WhatsApp</a>
            <a href="https://www.linkedin.com/in/lalit-kumawat-2572a51a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded">LinkedIn</a>
            <a href="https://www.upwork.com/freelancers/yourprofile" target="_blank" className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">Upwork</a>
          </div>
        </div>
      <div className="flex justify-center mt-8">
  <img src="https://i.postimg.cc/KYytdTZP/Chat-GPT-Image-Jun-25-2025-12-26-39-PM.png" alt="CodeCraft Logo" className="h-60 rounded-md drop-shadow-lg" />
</div>
</section>




<footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 CodeCraft Studio. All rights reserved.</p>
      </footer>
    <a href="https://wa.me/919521384830" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg animate-bounce transition duration-300 flex items-center space-x-2">
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
  <span>WhatsApp</span>
</a>

      <div className="py-10 flex justify-center gap-8 items-center bg-white dark:bg-gray-900">
  <img src="https://i.postimg.cc/Z5hnJ6PT/ma6838m52a-mastercam-logo-mastercam.png" alt="Mastercam" className="h-12 grayscale hover:grayscale-0 transition duration-300" />
  <img src="https://i.postimg.cc/jdqKcvhn/solidcam-logo-vector.png" alt="SolidCAM" className="h-12 grayscale hover:grayscale-0 transition duration-300" />
  <img src="https://i.postimg.cc/P5RXgvM4/autodesk-fusion-360-logo-freelogovectors-net.png" alt="FUSION360" className="h-12 grayscale hover:grayscale-0 transition duration-300" />
  <img src="https://i.postimg.cc/0yqYhMbS/449-4498552-catia-v5-3de-type3-caa-dassault-systemes-hd.jpg" alt="CATIA" className="h-12 grayscale hover:grayscale-0 transition duration-300" />
</div>
    </main>
  );
}
