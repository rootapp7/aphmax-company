require('dotenv').config();
const app = require('./app');
const db = require('./config/database');
const port = Number(process.env.PORT || 3000);
const server = app.listen(port, () => {
  console.log(`Aphmax website running at http://localhost:${port}`);
});

function shutdown() {
  server.close(() => {
    try { db.close(); } finally { process.exit(0); }
  });
  setTimeout(() => process.exit(1), 5000).unref();
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
