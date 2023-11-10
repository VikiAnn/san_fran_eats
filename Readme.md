### Install

Clone the repo, cd into it, and run `npm install`

### Run the dev server

Run `npm start`

### Run the tests

Run `npm run test`

### Current functionality:

`/` root url serves up a string expressing the intent of the app
`/food_trucks` index page returning a list of food truck data as JSON

### To do:

- Set up templates, layouts, etc (decide on templating framework)
- Add MapBox map
- Render food truck locations on the map
- Persist food truck data to a database and use the CSV to seed
- Add more tests (maybe e2e/outside-in cypress or other tests in addition to unit tests)
- Set up asset bundling properly so that `npm run serve` works (currently static files like images aren't being copied over to the `dist` outDir)
