# Kisi mosaic [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

A dockerized full stack app with a Nuxt frontend and Node/Express backend.
It has a single page, with a mosaic layout gallery, which you can add to by uploading your own images accompanied with a title and a description.

## Demo:
https://kisi-frontend.fly.dev/

## How to run

### USING DOCKER (RECOMMENDED)

Simply enough, just clone the repository, then build the image and start the container, using these commands:

- `cd kisi`
- `docker compose up --build`

The app will start on port 80, on http://localhost/

### RUNNING EACH APP SEPARATELY

- First run the server, by  running these commands:
  
  - `cd kisi/backend`
  - `cp .env.example .env`
  - `yarn install`
  - `yarn setup`
  - `yarn dev`
  
  The server will start on http://localhost:3000/

- Then run the Nuxt app by opening a new terminal and running these commands:

  - `cd kisi/frontend`
  - `cp .env.example .env`
  - `yarn install`
  - `yarn dev`

  The Nuxt app will start on http://localhost:8000/

