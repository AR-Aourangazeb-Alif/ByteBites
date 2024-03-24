import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero -mt-36">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">Welcome to ByteBites, the digital oasis for coders, developers, and tech enthusiasts worldwide.</p>

                    <div className="space-x-4">
                        <Link
                        to={'/blogs'}
                        className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                            <span className="relative text-primary group-hover:text-white">Button Text</span>
                        </Link>

                        <Link
                        to={'/bookmarks'}
                        className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                            <span className="relative text-primary group-hover:text-white">Button Text</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;