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


useEffect(()=>{
    const token = localStorage.getItem("token");
    if (!token) {
        console.log("No token found in localStorage");
        setLoading(false);
        return;
    }
    axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
        headers:{
            Authorization:token
        }
    }).then(response =>{
       // setBlogs(response.data.blogs);
        
            setBlogs(response.data.blogs); // Assuming blogs are in response.data.blogs
        
            
        
          setLoading(false);
       
    }).catch(error => {
        console.log('Error fetching blogs:', error.response ? error.response.data : error.message);
        setError(error);
        setLoading(false);
      })
},[])

return {
    loading,
    blogs,
    error
}
}

