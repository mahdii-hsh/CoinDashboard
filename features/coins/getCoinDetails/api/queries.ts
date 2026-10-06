import { TCoinDetails } from "@/entities/coin";
import { queryOptions } from "@tanstack/react-query";
import axios from "axios";

export const coinDetailsQueryOptions = (coinId: TCoinDetails["id"]) =>
  queryOptions({
    queryKey: ["coins","details",coinId],
    queryFn: async () => {
      const res = await axios.get("/api/coins/details", {
        params: {
          id: coinId,
        },
      });

      return res.data;
    },
  });
