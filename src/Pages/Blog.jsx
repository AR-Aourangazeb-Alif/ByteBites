import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const Blog = () => {

    const blog = useLoaderData();

    const { title, user, published_at, readable_publish_date, reading_time_minutes, comments_count, public_reactions_count, tags } = blog;

    const [Tab, setTab] = useState(0);


    return (
        <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-end text-gray-400">
                        <div>
                            <div className="flex items-center md:space-x-2 mb-4">
                                <img src={user.profile_image} className="w-9 h-9 border rounded-full bg-gray-500 border-gray-700 mr-1" />
                                <p className="font-medium text-primary">{user.name}</p>
                            </div>

                            <p className="text-sm">{reading_time_minutes} min read <span className="mx-2">•</span> {readable_publish_date}, {new Date(published_at).getFullYear()}</p>
                        </div>
                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments <span className="mx-2">•</span> {public_reactions_count} views</p>
                    </div>
                </div>


                {/* Tabs  */}

                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap">
                <Link
                to={''}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${Tab===0 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-primary`}
                onClick={()=>setTab(0)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Architecto</span>
                </Link>
                <Link 
                to={'author'}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${Tab===1 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-primary`}
                onClick={()=>setTab(1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Corrupti</span>
                </Link>
                
            </div>

            </article>


            

            



            <div>
                <div className="flex flex-wrap py-6 gap-2">
                    
                    {tags.map(tag => <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900" key={tag}>#{tag}</a>)}
                    
                </div>


                <Outlet></Outlet>


                
            </div>
        </div>
    );
};

export default Blog;