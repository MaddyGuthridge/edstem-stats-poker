import edClient from './edApi';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  const apiKey = process.env.EDSTEM_API_KEY;
  if (!apiKey) {
    console.error('EDSTEM_API_KEY not in .env');
    return;
  }
  const client = edClient('au', apiKey);

  const details = await client.dashboard();

  console.log(details);
}

main()
  .catch(() => console.error('Main rejected'));
