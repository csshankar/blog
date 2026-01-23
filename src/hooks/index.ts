import {useState,useEffect} from "react";
import axios from "axios";
import {BACKEND_URL} from "../config"


export interface Blog{
    "content" :string;
    "title" :string;
    "id":number;
    "author":{
        "name" : string
    }
}
export const useBlog = ({id}:{id:number})=>{
    const [loading,setLoading]= useState(true);
    const [blog,setBlog]= useState<Blog>();


useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
        headers:{
            Authorization:localStorage.getItem("token")
        }
    }).then(response =>{
        setBlog(response.data.blog);
        setLoading(false);
    })
},[id])

return {
    loading,
    blog
}
}
export const useBlogs = () => {
const [loading,setLoading]= useState(true);
const [blogs,setBlogs]= useState<Blog[]>([]);
const [error, setError] = useState<string | null>(null);
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);
const [limit] = useState(10);


useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
    try {
       
        if (!token) {
            console.log("No token found in localStorage");
            setLoading(false);
            return;
        }
      setLoading(true);
      setError(null);
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        params: { page, limit },
        headers: { Authorization: token }
      });
      setBlogs(response.data.blogs); // Completely replaces previous results
      if (response.data.totalPages) {
        setTotalPages(response.data.totalPages);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  
  if (token) fetchData();
}, [page, limit]);

return {
    loading,
    blogs,
    error,
    page,
    setPage,
    totalPages,
    limit
}
}

