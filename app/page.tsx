import { GetCoinList } from "@/features/coins";
import { Navbar } from "./Navbar";
import Trending from "@/features/trends";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="mb-16"></div>
      <div className="w-full  px-24">
        <Trending />
        <GetCoinList />
      </div>
    </div>
  );
}
