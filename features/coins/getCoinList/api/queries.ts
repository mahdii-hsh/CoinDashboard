import { queryOptions } from "@tanstack/react-query";
import axios from "axios";
import { env } from "process";

const coinQueryOption = queryOptions({
  queryKey: ["coins"],
  queryFn: async () => {
    const res = await axios.get(`/api/coins`);
    // const data = await res.data
    return res.data;
  },
  staleTime: 1000 * 60 * 10,
});

export { coinQueryOption };
