import Porfile from "../assets/Photo.png";
import { useEffect, useState } from "react";

import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import phpLogo from "../assets/php.png";
import laravelLogo from "../assets/laravel.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import expressLogo from "../assets/express.png";
import pythonLogo from "../assets/python.png";
import tensorflowLogo from "../assets/tensorflow.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import mysqlLogo from "../assets/mysql.png";

function LandingPage() {
    const [index, setIndex] = useState(0);
    const titles = ['Web Developer', 'Machine Learning', 'Data Scientist'];
    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000); // change every 3 seconds
    
        return () => clearInterval(interval); 
      }, []);
  return (
    <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-28 flex flex-col sm:flex-row gap-6 text-center sm:text-left" data-aos="fade-right">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm Muhammad Asifaq</h2>
              <div>
              <h2 className="font-bold text-4xl mt-1 gradiant-text">{titles[index]}</h2>
              </div>
              <div className="pt-2" data-aos="zoom-in-right">
                <p className="mt-4 text-gray-400">
                  Former machine learning engineer and junior web developer, seeking to apply
                  competent development skills with focus on collaboration,
                  communication, and passion
                </p>
                <a href="/portofolio/CV.pdf" download className="inline-block px-8 shadow-gray-500 shadow-md py-5 mt-10 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Download resume
                </a>
              </div>
            </div>
            <div className="relative ">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px]" />
              </div>
            </div>
          </div>

          <div className="container m-auto px-4 pb-6 flex flex-wrap justify-center gap-4 mt-10">
            <img src={htmlLogo} alt="HTML" className="w-12 h-12" />
            <img src={cssLogo} alt="CSS" className="w-12 h-12" />
            <img src={phpLogo} alt="PHP" className="w-12 h-12" />
            <img src={laravelLogo} alt="Laravel" className="w-12 h-12" />
            <img src={jsLogo} alt="JavaScript" className="w-12 h-12" />
            <img src={reactLogo} alt="React" className="w-12 h-12" />
            <img src={expressLogo} alt="Express" className="w-12 h-12" />
            <img src={pythonLogo} alt="Python" className="w-12 h-12" />
            <img src={tensorflowLogo} alt="TensorFlow" className="w-auto h-12" />
            <img src={gitLogo} alt="Git" className="w-12 h-12" />
            <img src={githubLogo} alt="GitHub" className="w-12 h-12" />
            <img src={mysqlLogo} alt="MySQL" className="w-12 h-12" />
          </div>
        </section>
  );
}

export default LandingPage;