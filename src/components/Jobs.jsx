// import React from 'react'
import { useSelector } from "react-redux"
import FilterCard from "./FilterCard"
import Job from "./Job"
import Navbar from "./shared/Navbar"

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8]

const Jobs = () => {
const {allJobs} = useSelector(store=>store.job);
console.log(allJobs);
return (
<div>
    <Navbar />
    <div className='max-w-7xl mx-auto mt-5'>
        <div className='flex gap-5'>
            <div className='w-1/5'>
                <FilterCard />
            </div>

            {/* {jobsArray.length <= 0 ? ( <span>Job Not found</span>
                ) : (
                <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                    <div className="grid grid-cols-3 gap-4">
                        {jobsArray.map((item, index) => (
                        <Job key={index} />
                        ))}
                    </div>
                </div>
                )} */}
                
                {
                allJobs.length <= 0 ? ( <span>Job Not Found</span>
                    ) : (
                    <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                        <div className="grid grid-cols-3 gap-4">
                            {
                            allJobs.map((job) => {
                            return (
                            <div key={job?._id}>
                                <Job job={job} />
                            </div>
                            );
                            })
                            }
                        </div>
                    </div>
                    )
                    }






        </div>
    </div>
</div>
)
}

export default Jobs
