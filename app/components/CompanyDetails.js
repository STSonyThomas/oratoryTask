export default function CompanyDetails({ company }) {
    return (
      <div className="mt-4 flex flex-col items-start text-[0.7rem]">
        <div className="flex flex-row space-x-2 justify-center items-center my-4">
        <img src={company.logo} alt={company.name} className="ml-1 h-8 w-8" />
        <h3 className="text-[1rem] text-gray-700 ">{company.name}</h3>
        </div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-2  pl-0">
          
          <p className="flex flex-col font-semibold p-2 text-gray-500">Company size: <span className="text-black">{company.size}</span></p>
          <p className="flex flex-col font-semibold p-2 ml-8 text-gray-500">Type: <span className="text-black">{company.type}</span></p>
          <p className="flex flex-col font-semibold p-2 text-gray-500">Sector: <span className="text-black">{company.sector}</span></p>
          <p className="flex flex-col font-semibold p-2 ml-8 text-gray-500">Funding: <span className="text-black">{company.funding}</span></p>
          <p className="flex flex-col font-semibold p-2 text-gray-500">Founded In: <span className="text-black">{company.founded}</span></p>
          <p className="flex flex-col font-semibold p-2 ml-8 text-gray-500">Founded By: <span className="text-black">{company.founders}</span></p>
        </div>
      </div>
    );
  }
  