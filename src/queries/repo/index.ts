import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import api from "../../services/api"
import { Repo } from "./types";

const key = 'repos_key';


const getRepos = async (context: QueryFunctionContext) => {
  const [ queryKey, userId ] = context.queryKey;

  const { data } = await api.get<Repo[]>(`/users/${userId}/repos`);

  return data;
}

export default function useFetchRepos( userId: string) {
  return useQuery([ key, userId ], getRepos);
}
