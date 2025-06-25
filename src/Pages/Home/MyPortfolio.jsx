import { useEffect, useState } from "react";
import axios from "axios";

export default function MyPortfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio-backend-nu-beryl.vercel.app/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
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
      <div className="portfolio--section--container ">
        {projects?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img ">
              <img
                src={item.src}
                alt="Project Screenshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
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
