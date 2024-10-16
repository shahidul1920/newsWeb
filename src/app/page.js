import Catag from "@/components/Allpages/Catag";
import { Mainnews } from "@/components/Allpages/Mainnews";
import { Sidebar } from "@/components/Allpages/Sidebar";

export default function Home() {


  return (
    <div>
      <div className="categories my-[50px]">
        <Catag />
      </div>

      <div className="newsSection grid grid-cols-1 md:grid-cols-2">
        <div className="mainNews max-w-[700px]">
          <Mainnews />
        </div>

        <div className="sideBar max-w-[400px]">
          <Sidebar />
        </div>

      </div>
    </div>
  );
}
