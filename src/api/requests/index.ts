import { useMutation } from "@tanstack/react-query";
import {
  deleteJokeService,
  getJokeByIdService,
  getRandomJokeService,
  postJokeService,
  postJokeVoteService,
  postUnvoteJokeService,
  putJokeService,
} from "../services";
import { JokeI, VoteT } from "@/types";

// ========== GET REQUESTS ========== //
export const useGetRandomJokeReq = () => {
  const { data, ...rest } = useMutation({
    mutationKey: ["useGetRandomJokeReq"],
    mutationFn: getRandomJokeService,
  });

  return { data, ...rest };
};

export const useGetJokeByIdReq = () => {
  const { data, ...rest } = useMutation({
    mutationFn: (id: string) => getJokeByIdService(id),
    mutationKey: ["useGetJokeByIdReq"],
  });

  return { data, ...rest };
};

// ========= POST REQUESTS ========= //

export const usePostJokeReq = () => {
  const data = useMutation({
    mutationFn: (data: { question: string; answer: string }) =>
      postJokeService(data),
    mutationKey: ["usePostJokeReq"],
  });

  return data;
};

export const usePostVoteJokeReq = () => {
  const data = useMutation({
    mutationFn: (variables: { id: string } & VoteT) =>
      postJokeVoteService(variables.id, variables),
    mutationKey: ["usePostVoteJokeReq"],
  });

  return data;
};

export const usePostUnvoteJokeReq = () => {
  const data = useMutation({
    mutationFn: (variables: { id: string; label: string }) =>
      postUnvoteJokeService(variables.id, variables.label),
    mutationKey: ["usePostUnvoteJokeReq"],
  });

  return data;
};

// ========== PUT REQUESTS ========== //

export const usePutJokeReq = () => {
  const data = useMutation({
    mutationFn: (data: Omit<JokeI, "votes" | "availableVotes">) =>
      putJokeService(data._id, data),
    mutationKey: ["usePutJokeReq"],
  });

  return data;
};

// ========== DELETE REQUESTS ========== //
export const useDeleteJokeReq = () => {
  const data = useMutation({
    mutationFn: (id: string) => deleteJokeService(id),
    mutationKey: ["useDeleteJokeReq"],
  });

  return data;
};
