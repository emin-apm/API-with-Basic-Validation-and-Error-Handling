# Item API

A simple Express API to manage items with in-memory storage.

## Features

- Get all items (`GET /items`)
- Add a new item (`POST /items`)
- Get item by id (`get /items/:id`)
- Update an existing item (`POST /items/:id`)
- Delete an item (`POST /items/:id`)

## Requirements

- Node.js (v14+ recommended)
- npm or yarn

## Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/emin-apm/Simple-In-Memory-API-for-Managing-Items
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. The server will run on `http://localhost:3000` by default.

## Notes

- Items are stored in-memory and will reset on server restart.
- Make sure to send JSON content-type headers when using POST.

## License

MIT
