import GetCoinList from "@/features/coins";
import { Navbar } from "./Navbar";


export default function page() {
  return (
    <div>
      <Navbar />
      <div className="mb-16"></div>
      <GetCoinList />
    </div>
  );
}
