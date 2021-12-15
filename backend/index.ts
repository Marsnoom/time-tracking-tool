import express from 'express';
import routes from './routes/routes';
const app = express();
const port = 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Use Routes
app.use('/', routes);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Example app listening at http://localhost:${port}`)
})
