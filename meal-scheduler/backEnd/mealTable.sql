DROP TABLE IF EXISTS favorites CASCADE;

CREATE TABLE favorites (
    id integer PRIMARY KEY,
    name varchar(150),
    instructions text,
    thumbnail_url varchar(250),
    video_url varchar(250),
    ingredients text
);

DROP TABLE IF EXISTS schedule CASCADE;

CREATE TABLE schedule (
    id varchar(25) PRIMARY KEY,
    favoriteId integer REFERENCES favorites(id),
    name varchar(150),
    instructions text,
    thumbnail_url varchar(250),
    video_url varchar(250),
    ingredients text
);

INSERT INTO favorites (id, name, instructions, thumbnail_url, video_url, ingredients) VALUES (52977, 'Corba', 'Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later\r\nIn a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week.', 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg', 'https://www.youtube.com/watch?v=VVnZd8A84z4', 'Lentils, Onion, Carrots, Tomato Puree, Cumin, Paprika, Mint, Thyme, Black Pepper, Red Pepper Flakes, Vegatable Stock, Water, Sea Salt');
INSERT INTO schedule (id, favoriteId, name, instructions, thumbnail_url, video_url, ingredients) VALUES ('Monday1', 52977, 'Corba', 'Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later\r\nIn a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week.', 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg', 'https://www.youtube.com/watch?v=VVnZd8A84z4', 'Lentils, Onion, Carrots, Tomato Puree, Cumin, Paprika, Mint, Thyme, Black Pepper, Red Pepper Flakes, Vegatable Stock, Water, Sea Salt');
