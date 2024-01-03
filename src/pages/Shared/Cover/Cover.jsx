import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the Menu"
            strength={150}
        >
            <div className="hero h-[600px]">
                <div className="bg-black  bg-opacity-60 w-[900px] h-[350px]"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 font-semibold">What would you like to try?</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;