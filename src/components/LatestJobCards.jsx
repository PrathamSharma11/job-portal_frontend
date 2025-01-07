// // import React from 'react'
// import { Badge } from './ui/badge'

// const LatestJobCards = ({job}) => {
    
//     return (
//         <div  className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
//             <div>
//                 <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
//                 <p className='text-sm text-gray-500'>India</p>
//             </div>
//             <div>
//                 <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
//                 <p className='text-sm text-gray-600'>{job?.description}</p>
//             </div>
//             <div className='flex items-center gap-2 mt-4'>
//                 <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position}Positions</Badge>
//                 <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
//                 <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
//             </div>

//         </div>
//     )
// }

// export default LatestJobCards



// import React from 'react'
import PropTypes from 'prop-types'; // Import PropTypes
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({ job }) => {
   
    const navigate = useNavigate();
    return (
        // eslint-disable-next-line react/prop-types
        <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div>
                <h1 className="font-medium text-lg">{job?.company?.name}</h1>
                <p className="text-sm text-gray-500">India</p>
            </div>
            <div>
                <h1 className="font-bold text-lg my-2">{job?.title}</h1>
                <p className="text-sm text-gray-600">{job?.description}</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Badge className="text-blue-700 font-bold" variant="ghost">{job?.position} Positions</Badge>
                <Badge className="text-[#F83002] font-bold" variant="ghost">{job?.jobType}</Badge>
                <Badge className="text-[#7209b7] font-bold" variant="ghost">{job?.salary} LPA</Badge>
            </div>
        </div>
    );
};

// Define PropTypes for LatestJobCards
LatestJobCards.propTypes = {
    job: PropTypes.shape({
        company: PropTypes.shape({
            name: PropTypes.string.isRequired, // `company.name` is a required string
        }).isRequired, // `company` itself is required
        title: PropTypes.string.isRequired, // `title` is a required string
        description: PropTypes.string, // `description` is an optional string
        position: PropTypes.number, // `position` is an optional number
        jobType: PropTypes.string, // `jobType` is an optional string
        salary: PropTypes.oneOfType([
            PropTypes.string, // `salary` can be a string
            PropTypes.number, // or a number
        ]), // `salary` is optional
    }).isRequired, // `job` prop is required
};

export default LatestJobCards;




