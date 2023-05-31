module.exports = layout;

function layout(title, content) {
  return /*html*/ `
   <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>${title}</title>
        <style rel="stylesheet" src="styles.css"></style>
      </head>
      <body>
        ${content}
      </body>
    </html> 
`;
}
