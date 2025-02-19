import { JokeI, VoteT } from "@/types";
import { axiosClient } from "../axiosClient";
import { endpoints } from "../endpoints";

// ========== GET SERVICES ========== //
const {
  getRandomJoke,
  postJoke,
  getJokeById,
  putJoke,
  deleteJoke,
  postVoteJoke,
  postUnvoteJoke,
} = endpoints;
export const getRandomJokeService = async (): Promise<JokeI> => {
  const httpRequest = await axiosClient.get(getRandomJoke);

  return httpRequest.data;
};

export const getJokeByIdService = async (id: string): Promise<JokeI> => {
  const httpRequest = await axiosClient.get(getJokeById(id));

  return httpRequest.data;
};

// ========== POST SERVICES ========== //

export const postJokeService = async (data: {
  question: string;
  answer: string;
}): Promise<{ message: string }> => {
  const httpRequest = await axiosClient.post(postJoke, data);

  return httpRequest.data;
};

export const postJokeVoteService = async (
  id: string,
  data: VoteT
): Promise<{ message: string }> => {
  const httpRequest = await axiosClient.post(postVoteJoke(id), data);

  return httpRequest.data;
};

export const postUnvoteJokeService = async (
  id: string,
  label: string
): Promise<{ message: string }> => {
  const httpRequest = await axiosClient.post(postUnvoteJoke(id), { label });

  return httpRequest.data;
};

// ========== PUT SERVICES ========== //
export const putJokeService = async (
  id: string,
  data: Omit<JokeI, "votes" | "availableVotes">
): Promise<{ message: string }> => {
  const httpRequest = await axiosClient.put(putJoke(id), data);

  return httpRequest.data;
};

// ========== DELETE SERVICES ========== //

export const deleteJokeService = async (
  id: string
): Promise<{ message: string }> => {
  const httpRequest = await axiosClient.delete(deleteJoke(id));

  return httpRequest.data;
};
