export default function SignupPage() {
  return (
    <main className="auth-shell">
      <form className="card auth-card">
        <h1>Create your MoGo account</h1>
        <p className="muted">Start as a Dreamer and build your status.</p>
        <label>Full name<input type="text" placeholder="Jane Creator" /></label>
        <label>Email<input type="email" placeholder="you@mogosquare.com" /></label>
        <label>Password<input type="password" placeholder="Create a strong password" /></label>
        <label>District<select><option>Technology</option><option>Fashion</option><option>Financial</option></select></label>
        <button type="submit" className="btn primary">Create account</button>
      </form>
    </main>
  );
}
