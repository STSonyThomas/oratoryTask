import JobDetails from './JobDetails';
import CompanyDetails from './CompanyDetails';

export default function JobListing({ job }) {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{job.title}</h2>
        <span className="text-green-500">{job.status}</span>
      </div>
      <div className="flex justify-between items-center">
        <p>{job.location}</p>
        <p>{job.salary}</p>
      </div>
      <JobDetails details={job.details} />
      <CompanyDetails company={job.company} />
    </div>
  );
}