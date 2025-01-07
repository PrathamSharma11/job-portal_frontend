// // import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'




const AppliedJobTable = () => {
    const {allAppliedJobs} = useSelector(store=>store.job);
    // console.log(allAppliedJobs);
    return (
        <div>
            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {       
                            allAppliedJobs.length<=0?<span>You have not applied to any job yet</span>:allAppliedJobs.map((appliedjob) =>(

                            
                             <TableRow key={appliedjob._id}>
                                <TableCell>{appliedjob?.createdAt?.split("T")[0]}</TableCell>
                                <TableCell>{appliedjob?.job?.title}</TableCell>
                                <TableCell>{appliedjob?.job?.company.name}</TableCell>
                                <TableCell className="text-right"><Badge className={`${appliedjob?.status === "rejected" ? 'bg-red-400' : appliedjob.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'}`}>{appliedjob.status.toUpperCase()}</Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable







// import React from 'react'
// import { useSelector } from "react-redux";
// const AppliedJobTable = () => {
//     const {allAppliedJobs} = useSelector(store=>store.job);
//     console.log(allAppliedJobs);
//   return (
//     <div>AppliedJobTable</div>
//   )
// }

// export default AppliedJobTable