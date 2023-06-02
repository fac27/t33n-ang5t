module.exports = { signUpForm };

function signUpForm(mode) {
  const isSignUp = mode === 'sign-up';
  const title = isSignUp ? 'Sign Up' : 'Sign In';
  const path = `/${title.replace(' ', '-').toLowerCase()}`;

  return /*html*/ `
  <header class="header">
    <div class="header__user-name">
      ${title}
    </div>
  </header>
  <main class="main">
    <form
      action= ${path}
      method="POST"
      class="submit-form"
    >
      <input 
        type="text" 
        name="username" 
        placeholder="Your user name"
        class="submit-form__input"
        required
      >
      <input
        type="password"
        name="password"
        placeholder="Your password"
        class="submit-form__input"
        required
      >
      <button type="submit" class="submit-form__button">
        ${title}
      </button>
    </form>
  </main>
  `;
}
