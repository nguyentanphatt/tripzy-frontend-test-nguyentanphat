import Header from "@/component/Header";
import SearchPanel from "@/component/SearchPanel";

export default function Home() {

  return (
    <div className="h-screen w-full relative">
      <Header />
      <SearchPanel />
    </div>
  );
}
