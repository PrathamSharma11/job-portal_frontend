import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import AdminJobsTable from "./AdminJobsTable";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
import { searchJobByText } from "@/redux/jobSlice";

const AdminJobs = () => {
  useGetAllAdminJobs()
  const [input,setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  //search k text ko dispatch kr diya
  useEffect(()=>{
          dispatch(searchJobByText(input))
  },[input]);

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input className="w-fit" onChange = {(e)=>setInput(e.target.value)} placeholder="Filter by name" />
          <Button onClick={() => navigate("/admin/jobs/create")}>
            New Job
          </Button>
        </div>
        <AdminJobsTable />
      </div>
    </div>
  );
};

export default AdminJobs;
