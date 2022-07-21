import axios from "axios";
import { useEffect, useState } from "react";

export default function Project() {
  const [technoList, setTechnoList] = useState([]);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/techno`
      )
      .then((response) => {
        setTechnoList(response.data);
      });
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/project`
      )
      .then((response) => {
        setProjectList(response.data);
      });
  }, []);

  return (
    <section className="text-align-center p-3 bg-zinc-900">
      <h1 className="font-bold mb-5 text-zinc-100">Project</h1>
      {projectList.map((project) => (
        <article
          key={project.id}
          className="mb-10 p-1 border-2 border-gray-600 bg-gray-500 text-zinc-100"
        >
          <h1 className="text-lg font-bold">{project.name}</h1>
          <p>{project.description}</p>
          <a
            href={project.link}
            target="_blanck"
            className="text-purple-800 hover:text-emerald-400"
          >
            {project.link}
          </a>
          <ul className="flex p-1 pt-6 space-x-2">
            {technoList.map((techno) => (
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
