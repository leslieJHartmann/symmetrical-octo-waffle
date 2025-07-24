export default function Home() {
  return (
    <>
     <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/projects">Projects</Link> |{' '}
        <Link to="/contact">Contact</Link>
      </nav>
    <main className="home">
      <section className="hero">
        <h1>Hello, I’m Lethelay</h1>
        <p>
          Welcome to my personal website. I’m a [your profession, e.g. web developer]
          who loves building cool things with code.
        </p>
        <a href="/projects" className="button">View My Projects</a>
      </section>
    </main>
    </>
  );
}
