# Dad Jokes Application

A web application that allows users to search for dad jokes and mark them as favorites. Users can view their saved favorite jokes without querying the API again. 

The project features a modular structure and follows best practices for frontend and backend development. It uses **Node.js**, **MySQL**, **React**, and **Bootstrap 5**.

---

## Features

### Page 1: Search
- Allows users to search for dad jokes using the [icanhazdadjoke API](https://icanhazdadjoke.com/api).
- Displays jokes in a card layout, where each card contains:
  - A joke displayed as an image.
  - A "Favorite" button to save the joke in the database.
  
### Page 2: Favourites
- Displays all the jokes saved as favorites.
- No API call is made to fetch these jokes; they are retrieved directly from the database.

---

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Bootstrap 5**: For styling and responsive design.
- **Vite**: For fast development.

### Backend
- **Node.js**: For creating the RESTful API.
- **Express.js**: To handle HTTP requests.
- **MySQL**: For storing favorite jokes.
- **Axios**: For making API requests to the dad jokes API.

---



