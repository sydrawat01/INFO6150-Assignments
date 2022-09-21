import app from './api/app.js';

const port = 8000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
