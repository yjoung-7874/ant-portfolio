import { SiteHeader } from "../components/SiteHeader";

export default function Contact() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="placeholder-page">
        <section className="paper-panel page-note">
          <p className="kicker">contact</p>
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contact
            details and links will live here.
          </p>
        </section>
      </main>
      <footer className="site-footer">© 2026 Ant</footer>
    </div>
  );
}
