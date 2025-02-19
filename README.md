# Voting Jokes Frontend

This is the frontend part of the **Voting Jokes** project, a fun web application where users can vote on daily jokes using emoji reactions. The frontend is built using **React** with **TypeScript**, and it interacts with a **Node.js backend API** to fetch jokes, submit votes, and manage joke data.

---

## Features

- **Fetch Random Joke**: Users can fetch a random joke from the backend API.
- **Vote on Jokes**: Users can vote on jokes using emoji reactions.
- **Update Jokes**: Users can update the content of a joke.
- **Delete Jokes**: Users can delete the current joke.
- **Smooth Navigation**: Users can navigate between jokes using the "Next Joke" button.
- **Modern UI**: The user interface is clean and intuitive, built with **Sass** for styling.
- **State Management**: The app uses **React Query** for data fetching and state management.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **React Query**: For data fetching and state management.
- **Axios**: For making HTTP requests to the backend API.
- **Sass**: A CSS preprocessor for styling the application.
- **Vite**: A fast build tool for modern web projects.
- **Notistack**: For displaying snackbar notifications.

---

## API Endpoints

The frontend interacts with the backend using the following endpoints:

```typescript
export const endpoints = {
  getRandomJoke: "/jokes",
  postJoke: "/jokes/create",
  getJokeById: (id: string) => `/jokes/${id}`,
  postVoteJoke: (id: string) => `/jokes/vote/${id}`,
  postUnvoteJoke: (id: string) => `/jokes/unvote/${id}`,
  putJoke: (id: string) => `/jokes/${id}`,
  deleteJoke: (id: string) => `/jokes/${id}`,
};
```

---

## Environment Variables

The app uses the following environment variable to connect to the backend API:

```env
VITE_APP_API_URL=your_backend_api_url
```

Make sure to add this variable to your .env file before running the app.

---

## Getting Started

Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine.
- **npm**: npm is bundled with Node.js, so you don't need to install it separately.

Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/voting-jokes-front.git
cd voting-jokes-front
```
2. **Install dependencies:**
```bash
npm install
```
3. **Run the development server:**
```bash
npm run dev
```

---

## Acknowledgments
- **Vite**: For providing a fast and modern build tool.
- **React Query**: For simplifying data fetching and state management.
- **Notistack**: For making it easy to display notifications.

---

Happy Coding! 🚀
