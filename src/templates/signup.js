module.exports = { signUpForm };

function signUpForm(mode) {
  const isSignUp = mode === 'sign-up';
  return /*html*/ `
  <header class="header">
    <div class="header__user-name">
      ${mode === isSignUp ? 'Sign Up' : 'Log In'}
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
      ></input>
      <input
        type="text"
        name="password"
        placeholder="Your password"
        required
      ></input>
      <button type="submit" class="submit-form__button">
        ${isSignUp ? 'Sign Up' : 'Log In'}
      </button>
    </form>
  </main>
  `;
}
