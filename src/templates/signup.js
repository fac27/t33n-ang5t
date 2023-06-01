module.exports = { signUpForm };

function signUpForm(mode) {
  const isSignUp = mode === 'sign-up';
  return /*html*/ `
  <header class="header">
    <div class="header__user-name">
      ${isSignUp ? 'Sign Up' : 'Sign In'}
    </div>
  </header>
  <main class="main">
    <form
      action= ${isSignUp ? '/sign-up' : '/log-in'}
      method="POST"
      class="submit-form"
    >
      <input 
        type="text" 
        name="username" 
        placeholder="Your user name"
        required
      >
      <input
        type="password"
        name="password"
        placeholder="Your password"
        required
      >
      <button type="submit" class="submit-form__button">
        ${isSignUp ? 'Sign Up' : 'Log In'}
      </button>
    </form>
  </main>
  `;
}
