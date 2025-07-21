import { useEffect, useState } from "react";
import axios from "axios";

export default function MySkills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://portfolio-backend-nu-beryl.vercel.app/api/skills")
      .then((res) => {
        setSkills(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load skills.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading skills...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="section--heading">My Skills</h2>
      </div>
      <div className="skills--section--container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((item, index) => (
          <div
            key={index}
            className="skills--section--card p-4 shadow-md rounded-md"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-16 h-16 mx-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
