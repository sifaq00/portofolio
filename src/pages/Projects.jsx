import React from "react";
import Project1 from "../assets/Screenshot1.png";
import Project2 from "../assets/ss2.png";
import Project3 from "../assets/ss3.png";
import Project4 from "../assets/PetRescue.png";
import Project5 from "../assets/ss4.png";
import Project6 from "../assets/ss6.png";

function Projects() {
  return (
    <section id="projects">
      <div className="container m-auto px-4 sm:py-24">
        <div data-aos="zoom-out">
        <h2 className="text-2xl font-semibold">Projects</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 mt-11">
          <div className="border border-gray-500 rounded-md p-5 flex-1"
          data-aos="zoom-in-right">
            <img src={Project1} className="w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-8">
              Rent Car Web using PHP Native and XAMPP
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              A web-based car rental project that uses native PHP with a MySQL
              database
            </p>
            <div className="flex mt-12 gap-2"> 
              <a href="https://github.com/sifaq00/Rental-Mobil.git" target="_blank" className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-center">
                Checkout github
              </a>
            </div>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1"
          data-aos="zoom-in-left">
            <img src={Project2} className="w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-8">
              Open Donate Web Using Laravel 8 and Payment Gateway
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              My practice is making online donations using the Midtrans payment
              gateway
            </p>
            <div className="flex gap-2 mt-12">
              <a
                href="https://github.com/sifaq00/DonasiMahasiswa.git"
                target="_blank"
                className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-center"
              >
                Checkout GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  gap-10 mt-11">
          <div className="border border-gray-500 rounded-md p-5 flex-1"
          data-aos="zoom-in-right">
            <img src={Project3} className="w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-8">
              Image Classification using Inception v3
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Cat and dog classification using tensorflow with the Inception V3
              model
            </p>
            <div className="flex gap-4 mt-12">
              <a href="https://github.com/fallenrayveil/Pet-Rescue-CH2-PS354-Bangkit/blob/70f3e00fc8da42389e2aaf2748b448374597ed79/Inceptionv3.ipynb" target="_blank" className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-center">
                Checkout github
              </a>
            </div>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1"
          data-aos="zoom-in-left">
            <img src={Project4} className="w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-8">
              Mobile Application for Pet Rescue
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Introducing our pet rescue app. Using machine learning, it swiftly
              identifies cats and dogs, aiding in rescue efforts. Revolutionize
              pet rescue with our innovative app.
            </p>
            <div className="flex gap-2 mt-12">
            <a href="https://github.com/sifaq00/Pet-Rescue-CH2-PS354-Bangkit.git" target="_blank" className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-center">
                Checkout github
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  gap-10 mt-11">
          <div className="border border-gray-500 rounded-md p-5 flex-1"
          data-aos="zoom-in-right">
            <img src={Project5} className="w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-8">
              Orchid Classification using CNN.
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              The app uses CNN (Convolutional Neural Network) to classify orchid
              species from photos. Upload an image for instant identification.
            </p>
            <div className="flex gap-4 mt-12">
            <a href="https://github.com/sifaq00/" target="_blank" className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-center">
                Checkout github
              </a>
            </div>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1"
          data-aos="zoom-in-left">
            <img src={Project6} className="w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-8">
              Tourist Website Landing Page
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Explore Kendal, Indonesia, with our tourist website. Discover
              cultural heritage and breathtaking landscapes in Central Java.
              Start your adventure now!
            </p>
            <div className="flex gap-2 mt-12">
            <a href="https://github.com/sifaq00/Dolan-Kendal" target="_blank" className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-center">
                Checkout github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
