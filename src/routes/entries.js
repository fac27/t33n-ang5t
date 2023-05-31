const { listEntries } = require("../model/entries.js");
const { Layout } = require("../templates.js");

function get(res, req) {
   const entries = listEntries();
   let title = "";
   let content = "";
   if (!entries.length) {
    res.status(404);
   };
   const body = Layout({ title, content });
   res.send(body);
};

module.exports = { get };