import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div className="mainCont">
      <h1>Hello World! :D</h1>

      <h2>My first "project" in Next.js</h2>

      <p>Starting right now!</p>

      <p>There is nothing to see here! It's just a challenge of a course.</p>

      <h3>Take my social medias:</h3>

      <ul>
        <li>
          <a
            href="https://lucsas.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Website
          </a>
        </li>
        <li>
          <a
            href="http://github.com/lucsasl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lucsas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/lucsas.l"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://gitlab.com/LucsasL"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gitlab
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Page;
