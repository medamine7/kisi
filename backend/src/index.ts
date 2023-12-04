import express from 'express';
import dotenv from 'dotenv';
import router from './routes';
import path from 'path';
import cors from './plugins/cors';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use('/static', express.static(path.join(__dirname, './public')))

app.use('/images', router.images);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});