export default function Profile() {
  return (
    <section className=" flex justify-center items-center">
      <article className="text-center text-xl text-align-center p-1">
        <h1 className="font-bold text-2xl mb-5">Profile</h1>
        <picture className="animColor flex justify-center items-center">
          <img className="h-15" src="./src/assets/me2.jpg" alt="|Squirtle|" />
        </picture>
        <p>Rigaux </p>
        <p>Jeffrey </p>
        <p>22 ans</p>
        <br />
        <p>Link:</p>
        <a
          href="https://www.linkedin.com/in/jeffrey-rigaux-086463234/"
          target="_blanck"
          className="text-emerald-400 hover:text-purple-500 "
        >
          linkedin
        </a>
        <br />
        <a
          href="https://github.com/PiXeleum"
          target="_blanck"
          className="text-emerald-400 hover:text-purple-500 "
        >
          github
        </a>
      </article>
    </section>
  );
}
