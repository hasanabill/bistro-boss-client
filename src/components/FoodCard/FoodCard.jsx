

const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt={name} /></figure>
                <p className="absolute right-0 mr-4 mt-3 px-4 py-2 bg-slate-900 text-white">${price}</p>
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className=" btn btn-ghost uppercase border-0 border-b-[3px] border-black">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;