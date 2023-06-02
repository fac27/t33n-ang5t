# t33n-ang5t

FacTales allows emotional teens to submit diary entries and view anonymised entries from other users. Diary entries are stored in a SQLite database. Users need to sign up and log in with their own username and password. They can delete their own entries.

## Visit the deployed site

t33n ang5t is deployed [here](https://t33n-ang5t.fly.dev/)

## Collaborating

**Clone the Repo**
```
git clone https://github.com/fac27/t33n-ang5t.git
```
**Install all dependencies**
```
npm install
```
**Seed your database with test data**
```
npm run seed
```

**Start the server**
```
npm run dev
```

**Running tests**
```
npm run test
```

## User Stories

As a user, I want to...

- submit information to your site for anyone to see
- come back to your site later and see what I posted is still there
- be the only person allowed to delete my stuff
- hide my identity on my posts from other users
- store my session so I stay logged in for a while
- use the app on all my devices

## Wireframes

[figma](https://www.figma.com/file/ghkJFnIZC3NPK1788j7HK9/Untitled?type=design&node-id=0%3A1&t=GkywJHyUM72xRNx8-1)

## .env 

DB_FILE="./db.sqlite"
COOKIE_SECRET="mwOkzEhuE6D520EZNyD3kGYl"

