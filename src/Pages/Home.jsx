import Hero from "../Components/Hero"
import { useOutletContext } from "react-router-dom";
import wave from "../assets/wave1.svg"
import wave2 from "../assets/wave2.svg"

const Home = () => {

    const {theme} = useOutletContext();


    return (
        <div className="h-[calc(100svh-72px)] flex flex-col justify-center relative">

            <Hero></Hero>

            <img src={wave} className={`absolute bottom-0 w-full ${theme === 'night' ? 'hidden' : ''}`} />

            <img src={wave2} className={`absolute bottom-0 w-full ${theme === 'light' ? 'hidden' : ''}`} />
        </div>
    );
};

export default Home;