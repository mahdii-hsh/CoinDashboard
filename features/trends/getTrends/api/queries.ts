import { queryOptions } from "@tanstack/react-query";
import axios from "axios";
import { TTrendsQueryDTO } from "../model/types/apiResponse";

export const trendsQueryOption = queryOptions({
  queryKey: ["trends"],
  queryFn: async () => {
    const res = await axios.get("/api/trends");

    const data: TTrendsQueryDTO = {
      coins: res.data.coins,
      nfts: res.data.nfts,
      categories: res.data.categories,
    };
    console.log("DDD",data);
    return data;
  },
  staleTime: 1000 * 60 * 10,
});

