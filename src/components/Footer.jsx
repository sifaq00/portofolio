// Footer.jsx
import React from "react";
import LinkedIn from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";
import githubLogo from "../assets/github.png";

function Footer() {
  return (
    <footer>
      <div className="container mx-auto flex flex-col sm:flex-row justify-between px-4 py-6">
        <div className="text-center sm:text-left">
          <p className="text-gray-300 text-sm">
            &copy; copyright{" "}
            <a href="#" target="_blank" className="text-blue-500">
              Muhammad Asifaq
            </a>{" "}
            2024, created using{" "}
            <a
              href="https://id.react.dev/"
              target="_blank"
              className="text-blue-500"
              rel="noopener noreferrer"
            >
              React Js
            </a>{" "}
            &{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="text-blue-500"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
        <div className="flex justify-center mt-4 sm:mt-0">
          <ul className="flex gap-4">
            <li>
              <a href="https://github.com/sifaq00" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} className="w-8 grayscale hover:grayscale-0 transition-all duration-150" alt="GitHub" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/muhammad-asifaq/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} className="w-5 grayscale hover:grayscale-0 transition-all duration-150" alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/m.asfq_" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} className="w-6 grayscale hover:grayscale-0 transition-all duration-150" alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
