module.exports = { entriesPage };

function entriesPage(entries, userId, userName) {
  const entryList = entries
    .map(
      (entry) => /*html*/ `
    <div class="entry-post stack-sm">
      <div class="entry-post__header no-top-margin">
        <p> 
          ${entry.posted_at} 
          <span class="entry-post__header${
            userId === entry.user_id ? `--user-name` : `--anonymous`
          }">
            ${userId === entry.user_id ? userName : 'anonymous'}
          </span>
        </p>
      </div>
      <div class="entry-post__body">
        ${entry.content}
      </div>
    </div>`
    )
    .join('');

  return /*html*/ `
    <header class="header row space-between">
      <div class="header__user-name">${userName}</div>
      <button class="header__log-out" type="button">
        Log out
      </button>
    </header>
    <section class="entries-display row fd-column">
      ${entryList}    
    </section>
    <form 
      action="/entries/:user_id" 
      method="POST"
      class="submit-form row fd-column align-center"
    >
    <textarea 
      class="submit-form__content" 
      name="entry"
    >
    </textarea>
    <button 
      class="submit-form__button"
      type="submit"
    >
      Add entry to your journal
    </button>
    </form>
  `;
}
