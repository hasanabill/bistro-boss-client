import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { image, name, price, recipe, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [, refetch] = useCart();

    const handleAddToCart = (item) => {
        console.log(item);
        if (user && user.email) {
            const orderItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch("http://localhost:5000/carts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Added to cart",
                            showConfirmButton: false,
                            timer: 1200
                        });
                    }
                })
        } else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Please login to add to cart",
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            })
        }
    };

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt={name} /></figure>
                <p className="absolute right-0 mr-4 mt-3 px-4 py-2 bg-slate-900 text-white">${price}</p>
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleAddToCart(item)} className=" btn btn-ghost uppercase border-0 border-b-[3px] border-black">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;