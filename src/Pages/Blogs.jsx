import { Link, useLoaderData, useOutletContext } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import { useContext } from "react";

const Blogs = () => {

    const blogs = useLoaderData();
    
    const {theme} = useOutletContext();
    
    return (

        <section className="py-14">
            <div className="container max-w-6xl mx-auto space-y-6 sm:space-y-12">
                <Link 
                 to={`/blogs/${blogs[0].id}`}
                 className="block shadow-xl max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
                    <img src={blogs[0].cover_image} className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
                        <span className="text-xs text-gray-400">{blogs[0].readable_publish_date}, {new Date(blogs[0].published_at).getFullYear()}</span>
                        <p>{blogs[0].description}</p>
                    </div>
                </Link>

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    
                    {blogs.slice(1).map(blog => <BlogCard key={blog.id} blog={blog} theme={theme}></BlogCard>)}
                    
                </div>
                
            </div>
        </section>

    );
};

export default Blogs;