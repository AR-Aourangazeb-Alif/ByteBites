import { Link } from "react-router-dom";
import errorimg from "../assets/404.jpg";

const BlogCard = ({ blog, theme }) => {
    const {cover_image, title, published_at, description, id} = blog;

    return (
        <Link rel="noopener noreferrer" 
            to={`/bookmarks/${id}`}
            className={`max-w-sm mx-auto group hover:no-underline focus:no-underline shadow-xl border-2 ${theme==='night' ? 'border-secondary' : 'border-primary'} border-opacity-30 rounded-sm ${theme==='night' ? 'hover:border-primary' : 'hover:border-secondary'} hover:scale-105 transition-all p-2`}>
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={!!cover_image ? cover_image : errorimg} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs text-gray-400">{new Date(published_at).toLocaleString()}</span>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default BlogCard;