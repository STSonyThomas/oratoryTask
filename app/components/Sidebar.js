import TogglePane from "./TogglePane";

export default function Sidebar({ jobStats }) {
  return (
    <div className="w-64 bg-white shadow-lg  px-4 flex flex-col justify-start space-y-2">
      <div className="mt-8 mb-2 flex text-sm flex-row space-x-2 ">
        <button className="flex border border-orange-500 text-orange-500 px-4 py-2 rounded w-full mb-2">
          Delete job
        </button>
        <button className="flex bg-orange-500 text-white px-4 py-2 rounded w-full mb-2">
          Edit job
        </button>
      </div>
      <div className="">
        {/* <div className="text-center mb-8">
          <h2 className="text-xl font-bold">Job Stats</h2>
        </div> */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p>Applicants</p>
            <span>{jobStats.applicants}</span>
          </div>
          <div className="flex justify-between items-center">
            <p>Matches</p>
            <span>{jobStats.matches}</span>
          </div>
          <div className="flex justify-between items-center">
            <p>Messages</p>
            <span>{jobStats.messages}</span>
          </div>
          <div className="flex justify-between items-center">
            <p>Views</p>
            <span>{jobStats.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
