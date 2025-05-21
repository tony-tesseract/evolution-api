const dotenv = require('dotenv');
const { execSync } = require('child_process');

dotenv.config();

const { DATABASE_PROVIDER } = process.env;
const provider = DATABASE_PROVIDER || 'postgresql';

let command = process.argv.slice(2).join(' ').replace(/DATABASE_PROVIDER/g, provider);

try {
  execSync(command, { stdio: 'inherit' });
} catch (error) {
  console.error(`Erro ao executar o comando: ${command}`);
  process.exit(1);
}
