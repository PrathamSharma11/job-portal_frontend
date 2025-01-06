// import { COMPANY_API_END_POINT } from '../utils/constant.js'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { setCompanies } from '@/redux/companySlice.js'

const useGetAllCompanies = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const fetchAllCompanies = async () => {
            try {
                // const res = await axios.get(`${COMPANY_API_END_POINT}/get`,{withCredentials:true});
                const res = await axios.get("http://localhost:8000/api/v1/company/get",{withCredentials:true});
                if(res.data.success){
                    dispatch(setCompanies(res.data.company));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllCompanies();
    },[])
}

export default useGetAllCompanies