import React, { useEffect } from "react";
import pp from "../assets/benget.jpeg"; 
import projek from "../assets/th (2).jpg";
import AOS from "aos";
import "aos/dist/aos.css";  

const Profile = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,      
    });
  }, []);

  return (
    <div id="Home" className="container mx-auto px-6 py-8 bg-black text-white">
      
      
      <nav className="fixed w-full top-0 left-0 bg-black text-white z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Sulthan</div>
          <div className="space-x-6 text-lg">
            <a href="#Home" className="hover:text-gray-300">Home</a>
            <a href="#About" className="hover:text-gray-300">About</a>
            <a href="#Project" className="hover:text-gray-300">Projects</a>
            <a href="#Contact" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </nav>

      
      <div className="min-h-screen flex items-center justify-center mt-24">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          
          <div data-aos="fade-right" className="text-left max-w-xl">
            <p className="text-xl font-medium">Hello </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
              My Name is
              <br />
              <span className="text-white">Sulthan Albiansyah</span>
            </h1>
            <p className="text-xl mt-4 font-medium">
              I’m a <span className="font-bold">Student</span>
            </p>
          </div>

  
          <div 
            data-aos="zoom-in" 
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-40 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-xl"
          >
            <img
              src={pp}
              alt="Profile Picture"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>

      
      <div className="my-16" id="About" data-aos="fade-up">
        <h1 className="text-center lg:text-5xl text-3xl font-medium mb-2">About Me</h1>
        <h3 className="text-lg sm:text-xl md:text-2xl text-center" data-aos="fade-up">
          Saya seorang pelajar yang malas belajar itung itungan
        </h3>
      </div>

      
      <div id="Project" data-aos="fade-up">
        <h1 className="text-center lg:text-5xl text-3xl font-medium mb-4">Projects</h1>
        <div className="project-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          
          <div 
            data-aos="flip-left"
            className="box p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src={projek}
              alt="Project Example"
              className="w-full h-[220px] rounded-lg object-cover"
            />
            <h3 className="text-xl font-bold mt-4 mb-2">song project</h3>
            <p className="text-gray-700">
              cuma bisa gini ginian
            </p>
          </div>

          
        </div>
      </div>

      <div className="my-16" id="Contact" data-aos="fade-up">
  <h1 className="text-center lg:text-5xl text-3xl font-medium mb-2">Contact</h1>
  <div className="flex justify-center gap-6 text-gray-600">
    
   
    <a 
      href="mailto:example@example.com" 
      className="text-xl hover:text-gray-300" 
      data-aos="fade-right"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    </a>


    <a 
      href="https://www.linkedin.com/in/your-profile" 
      className="text-xl hover:text-gray-300" 
      data-aos="fade-left"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    </a>

 
    <a 
      href="tel:+1234567890" 
      className="text-xl hover:text-gray-300" 
      data-aos="fade-up"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m-4-4v8" />
      </svg>
    </a>

  </div>
</div>

    </div>
  );
};

export default Profile;
