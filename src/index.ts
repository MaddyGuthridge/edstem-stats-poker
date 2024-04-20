import app from './server';
import dotenv from 'dotenv';

dotenv.config();

const port = parseInt(process.env.PORT as string);
const ip = process.env.IP as string;

const server = app.listen(
  port,
  ip,
  () => console.log(`EdStem stats poker backend running on http://${ip}:${port}/`)
);

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  server.close(() => console.log('Shutting down server gracefully.'));
});
