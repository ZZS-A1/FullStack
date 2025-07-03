const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const notes = [];

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/notes', (req, res) => {
  let list = notes.map(note => `<li>${note}</li>`).join('');
  res.send(`
    <h1>Notes</h1>
    <form action="/new_note" method="post">
      <input name="note" />
      <button type="submit">Save</button>
    </form>
    <ul>${list}</ul>
  `);
});

app.post('/new_note', (req, res) => {
  const note = req.body.note;
  notes.push(note);
  res.redirect('/notes');
});

app.listen(3001);