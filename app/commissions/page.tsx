import { SiteHeader } from "../components/SiteHeader";

export default function Commissions() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="placeholder-page">
        <section className="paper-panel page-note">
          <p className="kicker">commissions</p>
          <h1>Commissions</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commission
            info, samples, prices, and request details will live here.
          </p>
        </section>
      </main>
      <footer className="site-footer">© 2026 Ant</footer>
    </div>
  );
}
