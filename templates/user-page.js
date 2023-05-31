module.exports = entriesPage

function entriesPage(entries, userId, userName) {
  const entryList = entries.map(
    (entry) => /*html*/ `
    <div class="entry-post">
      <div class="entry-post__header">
        <p> 
          ${entry.created_at} 
          <span class="entry-post__header${userId === entry.user_id ? `--user-name` : `--anonymous`}">
            ${userId === entry.user_id ? userName : "anonymous"}
          </span>
      </p>
      </div>
      <div class="entry-post__body">
        ${entry.content}
      </div>
    <div>`
  );
  
  return /*html*/`
    <header class="header">
      <div class="header__user-name">${userName}</div>
      <button class="header__log-out" type="button">
        Log out
      <button>
    </header>
    <section class="entries-display">
      ${entryList}    
    </section>
    <form 
      action="/entries" 
      method="POST"
      class="submit-form"
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
  `
}
