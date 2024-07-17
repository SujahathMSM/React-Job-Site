/* This code snippet is a React component named `JobListings`. Here's a breakdown of what it does: */
import React from 'react'
import JobsList from './JobsList'
import { useState, useEffect } from 'react'
// eslint-disable-next-line react/prop-types
const JobListings = ({ Home = false }) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {

      try {
        const res = await fetch('http://localhost:5000/jobs')
        const data = await res.json();
        setJobs(data)
      } catch (error) {
        console.log("Error Fecthing data", error);
      } finally {
        setLoading(false)
      }

    }

    fetchJobs();
  }, [])

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {Home ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {loading ? (<h2>Loading ...</h2>) : (
            <>
              {jobs.map((job) => (
                <JobsList Job={job} key={job.id} />
              ))}
            </>
          )}

        </div>
      </div>
    </section>
  )
}

export default JobListings