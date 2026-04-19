import {useState,useEffect} from "react";
import axios from "axios";
import {BACKEND_URL} from "../config"


export interface Blog {
    "content": string;
    "title": string;
    "id": number;
    "description"?: string;
    "thumbnail"?: string;
    "createdAt": string;
    "likesCount"?: number;
    "isLiked"?: boolean;
    "category"?: { id: number; name: string };
    "author": {
        "name": string
    }
}

export interface Category {
    id: number;
    name: string;
}

export const useBlog = ({id}:{id:number})=>{
    const [loading,setLoading]= useState(true);
    const [blog,setBlog]= useState<Blog>();


useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
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
const [selectedCategory, setSelectedCategory] = useState<number | null>(null);


useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
    try {
       
        if (!token) {
            setLoading(false);
            return;
        }
      setLoading(true);
      setError(null);
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        params: { page, limit, categoryId: selectedCategory },
        headers: { Authorization: `Bearer ${token}` }
      });
      
      const blogsData = response.data.blogs || [];
      setBlogs(blogsData);
      setTotalPages(response.data.totalPages || 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  
  if (token) fetchData();
}, [page, limit, selectedCategory]);

return {
    loading,
    blogs,
    error,
    page,
    setPage,
    totalPages,
    limit,
    selectedCategory,
    setSelectedCategory
}
}

export const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/categories`).then(res => {
            setCategories(res.data.categories);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, []);

    return { categories, loading };
}

export const useUser = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<{ name: string; username: string } | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        
        const fetchUser = async () => {
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/user/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(response.data.user);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return {
        loading,
        user
    };
}

