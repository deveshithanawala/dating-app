## Features (User Stories)

- Users can sign up and create a profile
- User can connect social media profiles to their profile
- Users can find other user's profile
- Users can like each other
- Users get notified whenever a user likes them
- Once users like each other, they are provided a way to start a conversation

## Instructions to run

- Clone the repository.
- Go into `webapp` directory using the command `cd /webapp`.
- Install dependencies using `npm install`
- Go into `server` directory using the command `cd /server`.
- Install dependencies using `npm install`
- Create a `.env` file in the `/server` directory.
- Add following variables in the `.env`

```bash
PORT=5001
DB_URL=<MONGODB_INSTANCE_URL_FOR_DATABASE>
CORS_ORIGIN=<ROOT_DOMAIN_OF_FRONTEND>
JWT_TOKEN=<SECRET_TOKEN>
COOKIE_PARSER_SECRET=<SECRET_TOKEN_FOR_COOKIES>
```

- Run `npm run start` to start the server.
- Again, change directory to `/webapp` using the command `cd /webapp`.
- Create a `.env` file in the `/webapp` directory.
- Add `REACT_APP_MAPBOX_ACCESS_KEY=<MAPBOX_API_ACCESS_KEY>` in `.env` file.
- Run `npm run start` to start the React app.
- Open browser and run the app on `http://localhost:3000/`

> You must start the server before starting the react app.

## Technologies Used

- React (UI)
- Redux (State Management)
- React Bootstrap (Styling)
- Express.js (Server)
- MongoDB (Database)
- Mongoose (ORM)
- JWT (JsonWebTokens) (Authentication)
- Cookies (User sessions)
- Socket (Real Time Chat)
- Log4js (Logging)
- MapBox API (Location service)

