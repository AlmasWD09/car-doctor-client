import img01 from "../../assets/images/about/person.jpg"
import img02 from "../../assets/images/about/parts.jpg"

const About = () => {
    return (
        <div className="mt-24">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-4 lg:gap-20">
                <div className=" w-full lg:w-1/2 relative z-[-2]">
                    <img className="rounded-lg" src={img01} alt="" />
                    <img className="w-1/2 h-1/3 absolute -right-7 md:-bottom-16 lg:bottom-32 -bottom-8 border-white rounded" src={img02} alt="" />
                </div>

                <div className=" w-full lg:w-1/2  p-8 space-y-4">
                    <h3 className="font-semibold text-primary">About us</h3>
                    <h2 className="max-w-96 font-bold text-5xl">We are qualified & of experience in this field</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="bg-primary px-4 py-2 text-white rounded mb-3">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;