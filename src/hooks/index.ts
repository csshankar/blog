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
      
      const blogsData = response.data.blogs || [];
      setBlogs(blogsData);
      
      // Calculate total pages from backend response
      if (response.data.totalPages !== undefined && response.data.totalPages !== null) {
        setTotalPages(response.data.totalPages);
      } else if (response.data.total !== undefined && response.data.total !== null) {
        setTotalPages(Math.ceil(response.data.total / limit));
      } else {
        // Fallback: If we got exactly 'limit' blogs, assume there might be more pages
        // If we got fewer, we're on the last page
        if (blogsData.length === limit) {
          // We got a full page, so there might be more - set to at least current page + 1
          setTotalPages(prev => {
            // If we're on a higher page than what we previously thought was the last page, update it
            return Math.max(prev, page + 1);
          });
        } else {
          // We got fewer than limit, so this is the last page
          setTotalPages(page);
        }
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

