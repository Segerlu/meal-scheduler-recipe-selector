
# Meal Scheduler / Recipe Selector

This project was created to help people keep track of their meals and help them discover new recipes.



## To Start

Fork and Clone

Create a database to store your favorites.

Create a secrets.json file to hold the connection string to your database.
It'll need an object with the key as connectionString and the value your connection string to your database.

NPM install

ENJOY!


## API Reference

#### Get all favorites
##### API Address 
`http://localhost:5555`
```http
  GET /read/favorites
```

#### Get recipes
##### API Address 
`https://www.themealdb.com`
```http
  GET /api/json/v1/1/search.php?s=
```

| Parameters | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name` | `string` | **Required** |


#### Add favorite
##### API Address 
`http://localhost:5555`
```http
  POST /add/favorites/
```

| Parameters | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` `name` `instructions` `thumbnail_url` `video_url` `ingredients` | `strings` `array` | **Required** |

#### Delete favorite
##### API Address 
`http://localhost:5555`
```http
  GET /delete/favorites/${id}
```

| Parameters | Type  | Description|
| :-------- | :----- | :--------- |
| `id` | `integer` | **Required** |


## Features

- Stores favorites in the database
- Includes instructions/ingredients/instructional video
- Allows the user to plan out the dinners 2 weeks in advance
- Has a randomize button to randomize those dinners


## Roadmap

- More user friendly viewing and interacting with the saved favorites.

- Fix the ingredients list on the bookmark to use scroll for lists too long for the bookmark.

- A way to view a printer friendly page that will contain the sheduled meals as well as all the ingredients needed for the scheduled meals.

- Animations for the opening/closing of the book.

## Screenshots

![App Screenshot](./recipePlanner.png)

![App Screenshot](./recipePlannerSchedule.png)