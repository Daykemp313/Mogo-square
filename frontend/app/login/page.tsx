export default function LoginPage() {
  return (
    <main className="auth-shell">
      <form className="card auth-card">
        <h1>Welcome back</h1>
        <p className="muted">Login to access your districts and wallet.</p>
        <label>Email<input type="email" placeholder="you@mogosquare.com" /></label>
        <label>Password<input type="password" placeholder="••••••••" /></label>
        <button type="submit" className="btn primary">Sign in</button>
      </form>
    </main>
  );
}
