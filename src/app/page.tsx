// app/layout.js (or app/page.js if you're using file-based routing)

export const metadata = {
  title: "My Portfolio",
  description: "Hi, I'm Peter Wang, a Software Engineer (Data Analytics/Science + Full-Stack Developer).",
};

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <header>
        <h1 style={{ textAlign: 'center' }}>Welcome to My Portfolio</h1>
        <p style={{ textAlign: 'center' }}>Hi, I'm Peter Wang, a Software Engineer (Data Analytics/Science + Full-Stack Developer).</p>
      </header>
      <section>
        <h2>About Me</h2>
        <p>
          I'm passionate about creating dynamic websites and applications that
          offer great user experiences. I specialize in JavaScript, React, and
          Node.js.
        </p>
        <h3>Skills</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Next.js, Node.js</li>
          <li>MongoDB, MySQL, PostgreSQL</li>
        </ul>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '40px' }}>
        <p>© 2024 [Peter Wang] | All rights reserved</p>
      </footer>
    </div>
  );
}
