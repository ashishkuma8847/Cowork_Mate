import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const WorkspaceDeatil = () => {
    const [data, setData] = useState([]);
  const query = new URLSearchParams(useLocation().search);
  const baseurl = "http://localhost:3000/upload";

  const id = query.get("pages"); 
  useEffect(() => {
    const hadelget = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/getoneproduct/${id}`);
            setData([res.data.data]);
          } catch (error) {
        console.error(error);
      }
    };
    
    hadelget();
  }, [id]); 
  
  console.log(data);
  
  return (
    <>
 <section>
  <div className="container">

  </div>
 </section>
    </>
  )
}

export default WorkspaceDeatil