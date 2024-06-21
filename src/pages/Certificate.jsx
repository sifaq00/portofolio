import React from "react";
import Certificate1 from "../assets/certificate1.jpg";
import Certificate2 from "../assets/certificate2.jpg";
import Certificate3 from "../assets/certificate3.jpg";
import Certificate4 from "../assets/certificate4.jpg";
import Certificate5 from "../assets/certificate5.jpg";
import Certificate6 from "../assets/certificate6.jpg";
import Certificate7 from "../assets/certificate7.jpg";
import Certificate8 from "../assets/certificate8.jpg";
import Certificate9 from "../assets/certificate9.jpg";
import Certificate10 from "../assets/certificate10.jpg";
import Certificate11 from "../assets/certificate11.jpg";
import Certificate12 from "../assets/certificate12.jpg";

const certificates = [
    { img: Certificate1, title: "Crash Course on Python", description: "Certificate of completion from Coursera", link: "https://coursera.org/verify/XWYAGBYXHBDV" },
    { img: Certificate2, title: "Using Python to Interact with the...", description: "Certificate of completion from Coursera", link: "https://coursera.org/verify/PYPZAS2ZKBCL" },
    { img: Certificate3, title: "Foundations: Data, Data, Everywhr", description: "Certificate of completion from Coursera", link: "https://coursera.org/verify/CP2ZU3KJDHBV" },
    { img: Certificate4, title: "Process Data from Dirty to Clean", description: "Certificate of completion from Coursera", link: "https://coursera.org/verify/PT7FHNFDMXM7" },
    { img: Certificate5, title: "Introduction to Git and GitHub", description: "Certificate of completion from Coursera", link: "https://coursera.org/verify/6S6EQLX28G7D" },
    { img: Certificate6, title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang...", description: "Certificate of completion from Dicoding", link: "https://www.dicoding.com/certificates/EYX46NEM6PDL" },
    { img: Certificate7, title: "Programming Logic 101", description: "Certificate of completion from Dicoding", link: "https://www.dicoding.com/certificates/L4PQQ4DR4PO1" },
    { img: Certificate8, title: "Belajar Dasar Git dengan GitHub", description: "Certificate of completion from Dicoding", link: "https://www.dicoding.com/certificates/2VX3O1QWVZYQ" },
    { img: Certificate9, title: "Mathematics for Machine Learning", description: "Certificate of completion from Coursera", link: "https://coursera.org/verify/specialization/P6GXKL5AD2LE" },
    { img: Certificate10, title: "Machine Learning", description: "Certificate of completion from Coursera", link: "https://coursera.org/verify/specialization/737DRPVYH5AG" },
    { img: Certificate11, title: "TensorFlow: Data and Deployment", description: "Certificate of completion from Coursera", link: "https://coursera.org/verify/specialization/LHPBJ5B4L9XX" },
    { img: Certificate12, title: "DeepLearning.AI TensorFlow...", description: "Certificate of completion from Coursera", link: "https://coursera.org/verify/professional-cert/JEBJ3PS4RMDV" },
  ];
  
  function Certificates() {
    return (
      <section id="certificate">
        <div className="container m-auto px-4 sm:py-12">
          <h2 className="text-2xl font-semibold mb-8">Certificates and Specialization</h2>
          <div className="flex flex-wrap -mx-2">
            {certificates.map((certificate, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/2 px-2 mb-4" 
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500">
                <div className="border border-gray-500 rounded-md p-5">
                  <img src={certificate.img} className="w-full h-auto" alt={certificate.title} />
                  <h3 className="text-2xl font-semibold mt-8">{certificate.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">
                    {certificate.description}
                  </p>
                  <div className="flex mt-12 gap-2">
                    <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-center">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
export default Certificates;
