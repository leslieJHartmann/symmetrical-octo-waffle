import { Routes, Route, Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <main className="home">
      <section className="hero">
        <h1>Hi there! I'm Lethelay!</h1>
        <p>
          Welcome to my little corner.
          I’m an artist and interaction design student with many interests and a love for a multitude of different projects.
        </p>
        <a href="/projects" className="button">View My Projects</a>
      </section>
    </main>
    </>
  );
}
