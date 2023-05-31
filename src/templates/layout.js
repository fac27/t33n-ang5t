module.exports = { layout };

function layout(title, content) {
  return /*html*/ `
   <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1" />
        <title>${title}</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        ${content}
      </body>
    </html> 
`;
}
