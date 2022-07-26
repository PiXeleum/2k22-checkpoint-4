import axios from "axios";
import { useEffect, useState } from "react";

export default function Project() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/project`
      )
      .then((response) => {
        setProjectList(response.data);
      });
  }, []);

  return (
    <section className="text-center p-3">
      <h1 className="font-bold text-2xl mb-5">Project</h1>
      {projectList.map((project) => (
        <article
          key={project.id}
          className="animColor mb-10 p-1 border-2 border-gray-600 bg-gray-500 text-zinc-100"
        >
          <h1 className="text-lg font-bold">{project.name}</h1>
          <p>{project.description}</p>
          <a
            href={project.link}
            target="_blanck"
            className="text-emerald-400 hover:text-purple-800 "
          >
            {project.link}
          </a>
          <ul className="flex p-1 pt-6 space-x-2">
            {project.technoList.map((techno) => (
              <li key={techno.id}>
                <picture>
                  <img className="h-8" src={techno.logo} alt={techno.name} />
                </picture>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
