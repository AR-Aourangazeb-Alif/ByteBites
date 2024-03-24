import { Link } from "react-router-dom";
import errorimg from "../assets/404.jpg";

const BlogCard = ({ blog }) => {
    const {cover_image, title, published_at, description, id} = blog;

    return (
        <Link rel="noopener noreferrer" 
            to={`/bookmarks/${id}`}
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
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