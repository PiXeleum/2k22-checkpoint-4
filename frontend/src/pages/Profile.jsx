export default function Profile() {
  return (
    <section>
      <article className="text-align-center p-1">
        <h1 className="font-bold mb-5">Profil</h1>
        <picture className="flex justify-center items-center">
          <img
            className="h-15"
            src="./src/assets/Carapuce.jpg"
            alt="|Squirtle|"
          />
        </picture>
        <p>firstname : </p>
        <p>lastname : </p>
        <p>old : </p>
      </article>
    </section>
  );
}
