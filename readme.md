# Learning Node.js & Express.js

This repository contains hands-on practice files for learning core Node.js and Express.js concepts, from modules and file system operations to streams and a TypeScript-based Express app.

## Repository Structure

- `basic-nodejs.ts`  
  Notes about Node.js fundamentals (runtime, event loop, thread pool, key features).

- `event-emitter.js`  
  EventEmitter examples (creating events, passing arguments, removing listeners).

- `module/`  
  Basic CommonJS module usage with `require` and `module.exports`.

- `fileSystem  module/`  
  Synchronous and asynchronous file system examples (`readFile`, `writeFile`, `appendFile`, `unlink`, and sync variants) with sample text files in `texts/`.

- `stream-buffer.js`  
  Raw Node.js HTTP server example using readable streams to serve file content.

- `project-1/`  
  TypeScript + Express learning project with middleware, routing, request parsing, and error handling.

## Prerequisites

- Node.js (LTS recommended)
- npm

## Run Examples

From the repository root:

```bash
node event-emitter.js
node module/index.js
node "fileSystem  module/file.js"
node "fileSystem  module/async-file.js"
node stream-buffer.js
```

When `stream-buffer.js` is running, open:

`http://localhost:3000/read-file`

## Run Express Project (`project-1`)

```bash
cd project-1
npm install
npm run build
npm start
```

Server runs on:

`http://localhost:3000`

### Example API Endpoints

- `POST /api/users/create-user`
- `POST /api/products/create-product`

Both endpoints accept JSON body and return the submitted data in the response.

## Notes

- This repo is primarily for learning and experimentation.
- There is currently no automated test suite configured for `project-1`.
