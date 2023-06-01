module.exports = { home };

function home() {
  return /*html*/ `
  <header class="header">
    <div class="header__user-name">t33n ang5t<div>
  </header>
  <main class="main">
    <a href="/sign-up">Sign up</a>
    <a href="/sign-in">Sign in</a>
  </main>
`;
}
