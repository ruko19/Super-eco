import { useContext } from "react";

import { BlogContext } from "../context/BlogContext";

const useBlogs = () => {
    return (
        useContext(BlogContext)
    )
}


export { useBlogs }