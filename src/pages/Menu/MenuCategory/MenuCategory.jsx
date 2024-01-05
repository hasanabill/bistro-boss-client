import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title}></Cover>}

            <div className="my-16">
                <div className="grid md:grid-cols-2 gap-10 mx-16">
                    {items.map((item) => (
                        <MenuItem key={item._id} item={item}></MenuItem>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Link to={`/order/${title}`}>
                        <button className=" my-5 btn btn-outline uppercase border-0 border-b-[3px] border-black">Order Your Favourite Food</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;