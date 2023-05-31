module.exports = { home };

function home() {
  return /*html*/ `
  <header class="header">
    <div class="header__user-name">t33n ang5t<div>
  </header>
  <main class="main">
    <form action="/" method="POST" class="main__form">
      <button type="submit" name="sign-up">
        Sign up
      </button>
      <button type="submit" name="log-in">
        Log in
      </button>
    </form>
  </main>
`;
}
