import { Layout, Text, Code, Page, Link } from "@vercel/examples-ui";
import Post from "@/components/post";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://api.cuvette.tech/api/v1/externaljobs?search=";

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

interface Jobs {
  count: 0;
  data: [DataProps] | [];
}

export default function Home({ data }: { data: any }) {
  const [jobs, setJobs] = useState<Jobs>({
    count: 0,
    data: [],
  });

  const fetchJobs = async () => {
    const { data } = await axios.get(baseUrl);
    console.log(data);
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
    console.log(jobs);
  }, []);

  return (
    <div>
      <section className="grid gap-6 mt-10 pt-10 border-t border-gray-300">
        <div className="flex flex-col gap-12">
          {jobs?.count &&
            jobs?.data.map((job) => (
              <div key={job._id} className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <Text variant="h2">{job.companyName}</Text>
                  <Code>{job.title}</Code>
                </div>
                <Post job={job} />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

Home.Layout = Layout;
