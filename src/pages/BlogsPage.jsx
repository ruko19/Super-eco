
import { useEffect, useState } from "react";
import { getDataBlogs } from "../api/firebaseConfig";
import BlogItem from "../components/Blogitem/BlogItem";
import { useBlogs } from "../hooks/useBlogs";

const BlogsPage = () => {

  const { blogs } = useBlogs()
  console.log(blogs);


  return (
    <div className="container md:grid grid-cols-3 gap-8 ">

      <div className="col-span-2 ">
        {
          blogs.map((b) => (
            <BlogItem data={b} />

          ))

        }
      </div>

      {/*columna 2*/}
      <div className="mx-auto">
        <p className="font-medium text-4xl mb-5">Blogs Recientes</p>
        <div className="flex gap-4">
          <div>
            <img src="http://kodeforest.net/html/eco-friendly/extra-images/blog_listing_img_01.jpg" alt="imagen blog" width="100" />
          </div>
          <div className="w-1/2">
            <p className="font-medium">¿Que es la economia circular?</p>
            <p className="text-gray-400">Fecha: 5 Jul</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <img src="http://kodeforest.net/html/eco-friendly/extra-images/blog_listing_img_01.jpg" alt="imagen blog" width="100" />
          </div>
          <div className="w-1/2">
            <p className="font-medium">¿Que es la economia circular?</p>
            <p className="text-gray-400">Fecha: 5 Jul</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <img src="http://kodeforest.net/html/eco-friendly/extra-images/blog_listing_img_01.jpg" alt="imagen blog" width="100" />
          </div>
          <div className="w-1/2">
            <p className="font-medium">¿Que es la economia circular?</p>
            <p className="text-gray-400">Fecha: 5 Jul</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsPage
