import React from "react";
import Experience1 from "../assets/bangkit.png";
import Experience2 from "../assets/Dicoding.jpeg";
import Experience3 from "../assets/KampusMerdeka.png";

function AboutMe() {
  return (
    <section className="py-8" id="experience">
      {/* Your existing code for About Me section */}
      <div className="container m-auto px-4">
        <div data-aos="zoom-in">
        <h2 className="text-2xl font-semibold">Experience</h2>
        </div>
        <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
          <div className="flex pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]" data-aos="zoom-in-up">
            <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
            <div className="clearfix">
              <img src={Experience1} className="float-left w-auto h-24 mr-2" />
              <p>
                I am participating in the Independent Study Program at Bangkit,
                part of the MSIB Kampus Merdeka Batch 5, with a focus on the
                Machine Learning Learning Path. This program offers practical
                and innovative learning experiences in technology, allowing me
                to develop industry-relevant Machine Learning skills. Supported
                by leading tech companies, I learn from experts, engage in
                real-world projects, and expand my professional network,
                preparing myself for a career in the digital era.
              </p>
            </div>
          </div>
          <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]" data-aos="zoom-in-up">
            <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
            <div className="clearfix">
              <img
                src={Experience2}
                className="float-left w-auto h-24 mr-2 object-contain"
              />
              <p>
                I participated in a training program at Dicoding, where I
                learned technology skills such as programming and app
                development. This training, with a structured curriculum and
                experienced mentors, provided practical knowledge and skills
                that can be directly applied to real-world projects, preparing
                me for future professional challenges.
              </p>
            </div>
          </div>
          <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]" data-aos="zoom-in-up">
            <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
            <div className="clearfix">
              <img
                src={Experience3}
                className="float-left w-auto h-24 mr-2 object-contain"
              />
              <p>
                I participated in the Kampus Merdeka Program Batch 5. This
                program provided me with the opportunity to learn outside the
                campus and gain valuable practical experience. During the
                program, I engaged in various real-world projects, collaborated
                with professionals from different industries, and expanded my
                professional network. This experience significantly helped me
                develop skills relevant to industry needs and prepare for my
                future career.
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
