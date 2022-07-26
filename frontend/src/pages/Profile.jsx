export default function Profile() {
  return (
    <section>
      <article className="text-center text-xl text-align-center p-1">
        <h1 className="font-bold text-2xl mb-5">Profile</h1>
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
