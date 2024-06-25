import Frame from './components/Frame';
import JobDetails from './components/JobDetails';
import CompanyDetails from './components/CompanyDetails';
import { IoLocationOutline } from "react-icons/io5";
import { FaCoins } from "react-icons/fa";

export default function Home() {
  const job = {
    title: "Senior Product Designer",
    location: "Delaware, USA",
    salary: "$300k-$400k",
    status: "Open",
    postedDaysAgo: 2,
    skillsRequired: [
      { name: "Figma", logo: "/figma-logo.png" },
      { name: "Adobe Illustrator", logo: "/illustrator-logo.png" },
      { name: "Adobe XD", logo: "/xd-logo.png" }
    ],
    preferredLanguage: "English",
    type: "Full time",
    experience: "3+ Years of Experience",
    details: [
      "Handle the UI/UX research design",
      "Work on researching on latest web applications designs & trends",
      "Work on conceptualizing and visualizing",
      "Work on creating graphics content and other graphic related works"
    ],
    benefits: [
      "Health insurance",
      "Provident Fund"
    ],
    schedule: "Day shift",
    payTypes: [
      "Performance bonus",
      "Yearly bonus"
    ],
    workLocation: "In person",
    company: {
      name: "Atlassian",
      size: "1k - 2k Employees",
      type: "Private",
      sector: "Information Technology, Infrastructure",
      funding: "Bootstrapped",
      founded: "2019",
      founders: "Scott Farquhar, Mike Cannon-Brookes",
      logo: "/atlassian-logo.png"
    },
    stats: {
      applicants: 400,
      matches: 100,
      messages: 147,
      views: 800
    }
  };

  return (
    <Frame jobStats={job.stats}>
      <div className="">
        <div className="bg-white shadow-md rounded py-4 px-16 ">
          <div className="flex flex-row justify-start items-center mb-4 space-x-2">
            <h2 className="text-3xl font-bold">{job.title}</h2>
            <p className="text-gray-500  text-[0.7rem]">· posted {job.postedDaysAgo} days ago</p>
            <span className="text-green-500 text-[0.7rem] font-bold border border-green-500 px-2 py-1 rounded-full">{job.status}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400 font-bold mb-4">
            <p className='flex flex-row items-center text-black'><IoLocationOutline className='mr-1 h-6 w-8 font-bold text-gray-600'/>{job.location}</p>
            <p className='flex flex-row items-center text-black'><FaCoins className='mr-1 h-4 w-6 font-bold text-gray-500'/>{job.salary}</p>
          </div>
          
          <hr className='text-black text-sm'/>
          <div className='flex flex-row justify-between pr-64 pt-4'>
          <div className="flex w-fit flex-col items-start text-xs  mb-4 ">
            <p className='font-semibold text-gray-500'>Skills Required </p>
            {job.skillsRequired.map((skill, index) => (
              <div key={index} className="flex items-center mt-1 space-x-2 text-gray-800 rounded-lg px-2 py-1 text-[0.50rem] border border-solid border-gray-600 outline-gray-600">
                <img src={skill.logo} alt={skill.name} className="h-4 w-4" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
          <p className="font-semibold text-xs text-gray-500">Preferred Language: <div className="font-bold mt-2 text-black">{job.preferredLanguage}</div></p>
          <p className="font-semibold text-xs text-gray-500">Type: <div className="font-bold mt-2 text-black">{job.type}</div></p>
          <p className="font-semibold text-xs text-gray-500">Years of Experience: <div className="font-bold mt-2 text-black">{job.experience}</div></p>
          </div>
          <hr className='text-black text-sm'/>
          <JobDetails details={job.details} benefits={job.benefits} schedule={job.schedule} payTypes={job.payTypes} workLocation={job.workLocation} />
          <hr className='text-black text-sm mt-2'/>
          <CompanyDetails company={job.company} />
        </div>
      </div>
    </Frame>
  );
}
