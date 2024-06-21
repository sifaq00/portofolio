import React from "react";
import LinkedIn from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import githubLogo from "../assets/github3.png";

function Footer() {
  return (
    <footer>
      <div
        className="container m-auto flex justify-between px-4 py-6">
        <div>
          <p className="text-gray-300 text-sm">
            &copy; copyright{" "}
            <a href="#" target={"_blank"} className="text-blue-500">
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
        <div>
          <ul className="flex gap-4">
            <li>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} className="w-5" alt="GitHub" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} className="w-5" alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} className="w-5" alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
