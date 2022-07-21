import NavBar from "@components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Project() {
  const [technoList, setTechnoList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/techno`
      )
      .then((response) => {
        setTechnoList(response.data);
      });
  }, []);

  return (
    <section>
      <NavBar />
      <h1>Project</h1>
      <article className="text-align-center p-1">
        <h2>project one</h2>
        <picture className="flex justify-center items-center">
          <img
            className="h-15"
            src="./src/assets/Carapuce.jpg"
            alt="|Squirtle|"
          />
        </picture>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          aut laudantium iusto labore reprehenderit ratione nihil quas! Maxime
          eligendi fugit nobis similique animi assumenda fuga doloribus tempora
          totam minus aperiam adipisci, necessitatibus quisquam quo ab suscipit
          asperiores officia voluptatibus a illum ducimus? Iste, quae odio ipsam
          aut doloremque provident nulla, harum numquam laudantium expedita id
          beatae, suscipit quibusdam voluptas aperiam quas non sapiente error
          est modi. Ipsam, repellendus, ut illum omnis tenetur corrupti
          voluptates animi odit dolores enim quas, expedita iste commodi vero
          tempora assumenda ipsum sint et ex distinctio. Iure esse explicabo
          voluptates similique autem earum reprehenderit enim neque?
        </p>
        <ul className="flex p-1 space-x-2">
          <li>
            <picture>
              {technoList[0] && (
                <img
                  className="h-8"
                  src={technoList[0].logo}
                  alt={technoList[0].name}
                />
              )}
            </picture>
          </li>
          <li>
            <picture>
              {technoList[1] && (
                <img
                  className="h-8"
                  src={technoList[1].logo}
                  alt={technoList[1].name}
                />
              )}
            </picture>
          </li>
          <li>
            <picture>
              {technoList[2] && (
                <img
                  className="h-8"
                  src={technoList[2].logo}
                  alt={technoList[2].name}
                />
              )}
            </picture>
          </li>
          <li>
            <picture>
              {technoList[3] && (
                <img
                  className="h-8"
                  src={technoList[3].logo}
                  alt={technoList[3].name}
                />
              )}
            </picture>
          </li>
          <li>
            <picture>
              {technoList[4] && (
                <img
                  className="h-8"
                  src={technoList[4].logo}
                  alt={technoList[4].name}
                />
              )}
            </picture>
          </li>
        </ul>
        <a href="empty">link </a>
      </article>

      <article className="text-align-center p-1">
        <h2>project two</h2>
        <picture className="flex justify-center items-center">
          <img
            className="h-15"
            src="./src/assets/Carapuce.jpg"
            alt="|Squirtle|"
          />
        </picture>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          aut laudantium iusto labore reprehenderit ratione nihil quas! Maxime
          eligendi fugit nobis similique animi assumenda fuga doloribus tempora
          totam minus aperiam adipisci, necessitatibus quisquam quo ab suscipit
          asperiores officia voluptatibus a illum ducimus? Iste, quae odio ipsam
          aut doloremque provident nulla, harum numquam laudantium expedita id
          beatae, suscipit quibusdam voluptas aperiam quas non sapiente error
          est modi. Ipsam, repellendus, ut illum omnis tenetur corrupti
          voluptates animi odit dolores enim quas, expedita iste commodi vero
          tempora assumenda ipsum sint et ex distinctio. Iure esse explicabo
          voluptates similique autem earum reprehenderit enim neque?
        </p>
        <ul className="flex p-1 space-x-2">
          <li>
            <picture>
              {technoList[0] && (
                <img
                  className="h-8"
                  src={technoList[0].logo}
                  alt={technoList[0].name}
                />
              )}
            </picture>
          </li>
          <li>
            <picture>
              {technoList[1] && (
                <img
                  className="h-8"
                  src={technoList[1].logo}
                  alt={technoList[1].name}
                />
              )}
            </picture>
          </li>
          <li>
            <picture>
              {technoList[2] && (
                <img
                  className="h-8"
                  src={technoList[2].logo}
                  alt={technoList[2].name}
                />
              )}
            </picture>
          </li>
          <li>
            <picture>
              {technoList[3] && (
                <img
                  className="h-8"
                  src={technoList[3].logo}
                  alt={technoList[3].name}
                />
              )}
            </picture>
          </li>
          <li>
            <picture>
              {technoList[4] && (
                <img
                  className="h-8"
                  src={technoList[4].logo}
                  alt={technoList[4].name}
                />
              )}
            </picture>
          </li>
        </ul>
        <a href="empty">link </a>
      </article>

      <article className="text-align-center p-1">
        <h2>project three</h2>
        <picture className="flex justify-center items-center">
          <img
            className="h-15"
            src="./src/assets/Carapuce.jpg"
            alt="|Squirtle|"
          />
        </picture>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          aut laudantium iusto labore reprehenderit ratione nihil quas! Maxime
          eligendi fugit nobis similique animi assumenda fuga doloribus tempora
          totam minus aperiam adipisci, necessitatibus quisquam quo ab suscipit
          asperiores officia voluptatibus a illum ducimus? Iste, quae odio ipsam
          aut doloremque provident nulla, harum numquam laudantium expedita id
          beatae, suscipit quibusdam voluptas aperiam quas non sapiente error
          est modi. Ipsam, repellendus, ut illum omnis tenetur corrupti
          voluptates animi odit dolores enim quas, expedita iste commodi vero
          tempora assumenda ipsum sint et ex distinctio. Iure esse explicabo
          voluptates similique autem earum reprehenderit enim neque?
        </p>
        <ul className="flex p-1 space-x-2">
          <li>
            <picture>
              {technoList[0] && (
                <img
                  className="h-8"
                  src={technoList[0].logo}
                  alt={technoList[0].name}
                />
              )}
            </picture>
          </li>
          <li>
            <picture>
              {technoList[1] && (
                <img
                  className="h-8"
                  src={technoList[1].logo}
                  alt={technoList[1].name}
                />
              )}
            </picture>
          </li>
          <li>
            <picture>
              {technoList[2] && (
                <img
                  className="h-8"
                  src={technoList[2].logo}
                  alt={technoList[2].name}
                />
              )}
            </picture>
          </li>
          <li>
            <picture>
              {technoList[3] && (
                <img
                  className="h-8"
                  src={technoList[3].logo}
                  alt={technoList[3].name}
                />
              )}
            </picture>
          </li>
          <li>
            <picture>
              {technoList[4] && (
                <img
                  className="h-8"
                  src={technoList[4].logo}
                  alt={technoList[4].name}
                />
              )}
            </picture>
          </li>
        </ul>
        <a href="empty">link </a>
      </article>
    </section>
  );
}
