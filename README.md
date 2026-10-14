# Aphmax Company Ltd. website

This project separates the supplied Aphmax front end into pages and shared assets while retaining the original homepage's markup and main stylesheet. It uses Node.js, Express, and SQLite. You do **not** need to install a separate database server.

## Easiest setup on Windows

1. Extract the ZIP to a normal folder (not inside the ZIP preview).
2. Double-click `install.bat`. It checks for Node.js 20+, attempts to install the current Node.js LTS release if missing, and installs the npm packages. Internet access is needed for the first setup.
3. When setup finishes, double-click `start.bat`.
4. Open <http://localhost:3000> if it does not open automatically.
5. Keep the terminal window open while using the site. Press `Ctrl+C` there to stop it.

If Windows asks for permission to install Node.js, approve the prompt. If installation is blocked by organization policies, install Node.js LTS manually from <https://nodejs.org/> and run `install.bat` again.

## Stack
- HTML5, CSS3 and vanilla JavaScript
- Node.js 20+ and Express
- SQLite through `better-sqlite3`; no MySQL server required

## Pages
- `/` — original full-page experience
- `/pages/about.html` — About Us
- `/pages/services.html` — Services / merchandise supply
- `/pages/quality.html` — Quality assurance
- `/pages/logistics.html` — Delivery logistics
- `/pages/clients.html` — Clients and markets
- `/pages/experience.html` — Experience
- `/pages/hse.html` — Health, safety and environment
- `/pages/ethics.html` — Ethics and compliance
- `/pages/growth.html` — Growth outlook
- `/pages/contact.html` — Contact and quotation form

## Database

The first server start creates `database/aphmax.db` and the `contact_enquiries` table automatically. `database/schema.sql` documents the SQLite schema. Keep the `.db` file backed up; it contains submitted enquiries. The app accepts enquiry submissions at `POST /api/enquiries`.

## Manual commands

```bash
npm install
npm start
```

Development mode: `npm run dev`. Tests: `npm test`.

## Images

Photo placeholders use curated remote Unsplash image URLs. An internet connection is required for those remote images to load. For production, review the current image source terms and consider storing optimized licensed WebP/AVIF files in `client/assets/images/`.

## Deployment notes

Set `NODE_ENV=production` and persist the `database/` directory. Serve public traffic over HTTPS using a hosting provider or reverse proxy. Do not expose the SQLite database file publicly. No admin UI is included.

## Front-end preservation

The original CSS rules and homepage markup are retained as the visual source of truth. The extra CSS/JS category files are scaffolding for incremental refactoring so future changes can be made without replacing the design wholesale.


### Windows installer troubleshooting

`install.bat` runs `npm install` and verifies that every runtime dependency (`dotenv`, `express`, `helmet`, `express-rate-limit`, and `better-sqlite3`) can be resolved before reporting success. `start.bat` repeats that check and will not start the server if any dependency is missing. If installation fails, keep the full Command Prompt output; it identifies the package or install step that failed.


### Windows setup

On Windows, double-click `INSTALL-APHMAX.bat` (recommended) or `install.bat`. The installer leaves the console open, records diagnostics in `install-log.txt`, installs dependencies from `package.json`, and verifies required packages. Once successful, double-click `start.bat`. Node.js LTS and internet access are needed for first-time setup.


Service image update: refreshed the image URLs for the stationery, printer/office equipment, cleaning supplies, furniture, electrical, plumbing, and PPE cards. After updating, restart the server and hard-refresh the browser with Ctrl+F5.


Category card artwork is stored locally in `client/images/categories/`. These category visuals load from the website itself and do not depend on third-party image hosts. If the site is already running, reload the page with Ctrl+F5 to fetch the updated JavaScript.
