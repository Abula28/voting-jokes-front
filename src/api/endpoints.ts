export const endpoints = {
  getRandomJoke: "/jokes",
  postJoke: "/jokes/create",
  getJokeById: (id: string) => `/jokes/${id}`,
  postVoteJoke: (id: string) => `/jokes/vote/${id}`,
  postUnvoteJoke: (id: string) => `/jokes/unvote/${id}`,
  putJoke: (id: string) => `/jokes/${id}`,
  deleteJoke: (id: string) => `/jokes/${id}`,
};
