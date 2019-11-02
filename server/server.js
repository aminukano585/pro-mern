import express from 'express';

const app = express();
const port = 3000 || process.env.PORT;

app.use(express.static('public'));

app.listen(port, () => {
  console.log('App started on port 3000');
});