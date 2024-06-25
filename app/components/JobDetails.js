export default function JobDetails({
  details,
  benefits,
  schedule,
  payTypes,
  workLocation,
}) {
  return (
    <div className="mt-4 text-xs">
      <h3 className=" text-gray-500 font-semibold">About the job</h3>
      <ol className="list-inside list-decimal mb-4">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ol>
      <h3 className=" text-gray-500 font-semibold">Benefits:</h3>
      <ul className="list-disc list-inside mb-4">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <h3 className=" text-gray-500 font-semibold">Schedule:</h3>
      <p>
        <ul className="list-disc list-inside mb-2">
          <li>{schedule}</li>
        </ul>
      </p>
      <h3 className=" text-gray-500 font-semibold">
        Supplemental pay types:
      </h3>
      <ul className="list-disc list-inside mb-2">
        {payTypes.map((payType, index) => (
          <li key={index}>{payType}</li>
        ))}
      </ul>
      <h3 className="text-xs text-gray-500 mb-8">Work Location:<span>{workLocation}</span></h3>
      
    </div>
  );
}
