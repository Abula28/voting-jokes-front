import { useMutation } from "@tanstack/react-query";
import {
  deleteJokeService,
  getJokeByIdService,
  getRandomJokeService,
  postJokeService,
  putJokeService,
} from "../services";
import { JokeI } from "@/types";

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
