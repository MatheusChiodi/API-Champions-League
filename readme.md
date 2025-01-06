# Champions League API

## Overview

Champions League API is a **Node.js** and **TypeScript** project built using the **Express** framework. This API provides data on players and clubs participating in the Champions League, allowing users to perform CRUD operations on players and retrieve club information.  

## Features

- **Player Data**: Create, read, update, and delete players.
- **Club Data**: Retrieve club information.
- **Express Router**: Organized route handling for clean and scalable code.
- **CORS Support**: Ensures API accessibility across different origins.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Fast and minimalist web framework.
- **TypeScript**: Type safety and improved developer experience.
- **Tsup**: Bundler for compiling TypeScript code.
- **TSX**: Node.js enhanced with TypeScript support.

## API Routes

### **Players**
- `GET /players`: Get all players.
- `GET /players/:id`: Get player by ID.
- `POST /players`: Create a new player.
- `PATCH /players/:id`: Update an existing player.
- `DELETE /players/:id`: Delete a player by ID.

### **Clubs**
- `GET /clubs`: Get all clubs.
- `GET /clubs/:id`: Get club by ID.

## Prerequisites

- **Node.js** (>= 14.x)
- **npm** (>= 6.x)