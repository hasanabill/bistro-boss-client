import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item  pt-8 my-20">
            <SectionTitle heading="Featured Item" subHeading="Check it Out"></SectionTitle>
            <div className="md:flex justify-center items-center py-20 px-36 pt-12">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 text-white bg-slate-700 bg-opacity-50 p-10 rounded">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">where can I get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, enim, iste omnis delectus sint optio aperiam, consequuntur accusamus qui quasi beatae consectetur eveniet. Deleniti ullam commodi suscipit, reprehenderit exercitationem perferendis.</p>
                    <button className="btn btn-outline border-0 border-b-2">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;