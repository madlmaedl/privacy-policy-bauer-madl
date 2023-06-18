import express from 'express';
import favicon from 'serve-favicon';

const app = express();
const port = process.env.PORT || 80;

app.use('/home', express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: './public'});
});

app.use(favicon('public/favicon.ico'));

app.listen(port, () => {
  console.log(`Server gestartet auf Port : ${ port }`);
});
