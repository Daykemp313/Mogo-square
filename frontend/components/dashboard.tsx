import Link from "next/link";
import { creators, deals, districts, marketplace } from "@/lib/mock-data";

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <div className="card stat-card">
    <p>{label}</p>
    <h3>{value}</h3>
  </div>
);

export default function Dashboard() {
  return (
    <main className="container">
      <section className="hero card">
        <div>
          <p className="eyebrow">MoGo Square MVP</p>
          <h1>District-first social commerce for modern creators.</h1>
          <p>
            Connect through trusted networks, monetize your brand, and track your growth with MOGO Bucks.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="btn primary" href="/signup">Create account</Link>
          <Link className="btn" href="/login">Log in</Link>
        </div>
      </section>

      <section className="stats-grid">
        <StatCard label="Active districts" value="12" />
        <StatCard label="Weekly transaction volume" value="$12.5M" />
        <StatCard label="Avg wallet balance" value="8,920 MOGO" />
        <StatCard label="Investor-ready creators" value="426" />
      </section>

      <section className="content-grid">
        <article className="card">
          <h2>District map</h2>
          <div className="district-grid">
            {districts.map((district) => (
              <div key={district.id} className="district-item">
                <h3>{district.icon} {district.name}</h3>
                <p>{district.creators.toLocaleString()} creators</p>
                <span>{district.weeklyVolume} weekly volume</span>
              </div>
            ))}
          </div>
        </article>

        <article className="card">
          <h2>Deal feed</h2>
          <ul className="stack">
            {deals.map((deal) => (
              <li key={deal.id}>
                <strong>{deal.actor}</strong> · {deal.activity}
                <div className="muted">{deal.district} · {deal.amount} MOGO · {deal.timestamp}</div>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="content-grid">
        <article className="card">
          <h2>Creator profiles</h2>
          <ul className="stack">
            {creators.map((creator) => (
              <li key={creator.id}>
                <div className="row-between">
                  <strong>{creator.name}</strong>
                  <span className="pill">{creator.level}</span>
                </div>
                <p>{creator.district}</p>
                <p className="muted">{creator.bio}</p>
                <p>Wallet: <strong>{creator.walletBalance.toLocaleString()} MOGO</strong></p>
              </li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h2>Marketplace</h2>
          <ul className="stack">
            {marketplace.map((listing) => (
              <li key={listing.id}>
                <div className="row-between">
                  <strong>{listing.title}</strong>
                  <span>{listing.price} MOGO</span>
                </div>
                <p>{listing.seller} · {listing.district}</p>
                <p className="muted">Stock: {listing.stock}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card">
        <h2>District leaderboard</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Creator</th>
              <th>District</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {creators.map((creator, i) => (
              <tr key={creator.id}>
                <td>#{i + 1}</td>
                <td>{creator.name}</td>
                <td>{creator.district}</td>
                <td>{(creator.walletBalance * 4).toLocaleString()} MOGO</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
