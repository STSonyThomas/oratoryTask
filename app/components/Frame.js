import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
import TogglePane from "./TogglePane";

export default function Frame({ children, jobStats }) {
  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1">
        <TogglePane />

        <div className=" ">
          <NavBar />
          <hr className="text-black text-sm"/>
          <main className=" flex flex-row">
            <div className="flex-1">
            {children}
            </div>
            <Sidebar jobStats={jobStats} />
            </main>
        </div>
      </div>
      
    </div>
  );
}
