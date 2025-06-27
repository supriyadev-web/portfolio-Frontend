import { useEffect, useState } from "react";
import axios from "axios";

export default function Myportfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio-backend-nu-beryl.vercel.app/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="projects--section" id="Myprojects">
      <div className="projects--container-box">
        <div className="projects--container">
          <h2 className="section--heading">My Projects</h2>
        </div>
        <div>
          <a
            href="https://github.com/supriyadev-web"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github"
          >
            {/* GitHub SVG */}
            Visit My GitHub
          </a>
        </div>
      </div>
      <div className="projects--section--container ">
        {projects?.map((item, index) => (
          <div key={index} className="projects--section--card">
            <div className="projects--section--img ">
              <img
                src={item.src}
                alt="Project Screenshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="projects--section--card--content">
              <div>
                <h3 className="projects--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm projects--link">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  {item.link}
                </a>
                {/* SVG Icon */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
// 