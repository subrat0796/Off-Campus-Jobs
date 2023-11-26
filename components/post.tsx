import ms from "ms";
// import useSWR from 'swr'
import { Button, Text } from "@vercel/examples-ui";
import Image from "next/image";

interface DataProps {
  _id: string;
  companyName: string;
  title: string;
  location: string;
  imageUrl: string;
  type: string;
  salary: string;
  redirectLink: string;
  requiredExperience: string;
  skills: string;
  createdAt: string;
  updatedAt: string;
  count: number;
}

export default function Post({ job }: { job: DataProps }) {
  if (!job._id)
    return (
      <div className="flex justify-between items-center border border-gray-100 shadow-md rounded-lg p-5">
        <div className="grid gap-3">
          <div className="bg-gray-200 animate-pulse rounded-md w-96 h-6" />
          <div className="bg-gray-200 animate-pulse rounded-md w-60 h-4" />
        </div>
        <div className="bg-gray-200 animate-pulse rounded-md w-28 h-4" />
      </div>
    );

  const {
    _id,
    companyName,
    createdAt,
    location,
    redirectLink,
    requiredExperience,
    salary,
    skills,
    title,
    type,
    updatedAt,
  } = job || {};
  return (
    <div className="flex flex-col justify-evenly border border-gray-100 shadow-md rounded-lg p-5 min-h-max">
      <div className="grid">
        <div className="flex flex-col py-5 text-gray-500 text-sm">
          {/* <Image src={imageUrl} alt={companyName} height={100} width={100} /> */}
          <Text>Company Name : {companyName}</Text>
          <Text>Title : {title}</Text>
          <Text>Salary : {salary}</Text>
          <Text>Skills : {skills}</Text>
          <Text>Type : {type}</Text>
          <Text>Experice : {requiredExperience}</Text>
          <Text>Location : {location}</Text>
        </div>
      </div>
      <div>
        <Button className="bg-transparent">
          <a href={`${redirectLink}`} target="_blank" rel="noreferrer noopener">
            <h3 className="text-gray-600 hover:text-black font-semibold transition-all">
              Apply Here For The Job Application
            </h3>
          </a>
        </Button>
      </div>
      <div className="space-x-1 text-gray-500 text-sm flex justify-end">
        <p>Posted : {timeAgo(createdAt)} | </p>
        <p className="text-gray-500 text-sm">Fetched {timeAgo(updatedAt)}</p>
      </div>
    </div>
  );
}

const timeAgo = (time: number | string): string => {
  if (!time) return "Never";
  return `${ms(Date.now() - new Date(time).getTime())} ago`;
};
