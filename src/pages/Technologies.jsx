import React from "react";

function Technologies() {
  return (
    <section className="py-8" id="technologies">
      <div className="container m-auto px-4">
        <div data-aos="zoom-in">

            <h2 className="text-2xl font-semibold">Technologies</h2>
        </div>
            <div className="mt-14">
              <div data-aos="fade-up-right">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8" data-aos="fade-up-right">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, Tailwind & Bootstrap</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[83%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8" data-aos="fade-up-right">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript, React Js, Express
                  </h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8" data-aos="fade-up-right">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">UI design in Figma</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8" data-aos="fade-up-right">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Python</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8" data-aos="fade-up-right">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Tensorflow</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8" data-aos="fade-up-right">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">MySQL</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8" data-aos="fade-up-right">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">PHP</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
            <div className="mt-8" data-aos="fade-up-right">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Laravel</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
          </div>

    <div className="container m-auto px-4 py-14" data-aos="zoom-out">
      <h2 className="text-2xl font-semibold">
        Additional technologies and skills
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
        <div>
          <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
            Git and GitHub
          </p>
        </div>
        <div>
          <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
            Wordpress
          </p>
        </div>
        <div>
          <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
            Microsoft Office 
          </p>
        </div>
        <div>
          <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
            Blogspot
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
        <div>
          <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
            Administration
          </p>
        </div>
        <div>
          <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
            Data Analyst
          </p>
        </div>
      </div>
    </div>
  </section>
    
  );
}

export default Technologies;
