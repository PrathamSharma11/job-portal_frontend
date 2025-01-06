import { setAllAdminJobs } from '@/redux/jobSlice'
// import { JOB_API_END_POINT } from '../utils/constant.js'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch} from 'react-redux'

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/v1/job/getrecruiterjobs",{withCredentials:true});
                if(res.data.status){
                    // console.log(res);
                    dispatch(setAllAdminJobs(res.data.data));
                    // console.log("Dispatched jobs:", res.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllJobs();
    },[])
}

export default useGetAllAdminJobs