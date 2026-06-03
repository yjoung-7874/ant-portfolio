import { SiteHeader } from "../components/SiteHeader";

export default function PortfolioOverview() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="placeholder-page">
        <section className="paper-panel page-note">
          <p className="kicker">portfolio</p>
          <h1>Overview</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Portfolio
            overview content will live here.
          </p>
        </section>
      </main>
      <footer className="site-footer">© 2026 Ant</footer>
    </div>
  );
}
