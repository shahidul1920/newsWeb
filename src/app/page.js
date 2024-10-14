import Catag from "@/components/Allpages/Catag";
import { Mainnews } from "@/components/Allpages/Mainnews";
import { Sidebar } from "@/components/Allpages/Sidebar";

export default async function Home() {


  return (
    <div>
      <div className="categories my-[50px]">
        <Catag />
      </div>

      <div className="newsSection flex flex-wrap">
        <div className="mainNews w-[60%]">
          <Mainnews />
        </div>

        <div className="sideBar w-[40%]">
          <Sidebar />
        </div>

      </div>
    </div>
  );
}
