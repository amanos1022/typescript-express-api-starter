import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome home champ')
});

const port = process.env.port || 3000;

app.listen(
  port,
  () => console.log(`Typescript/Express server running at http://localhost:${port}`),
);