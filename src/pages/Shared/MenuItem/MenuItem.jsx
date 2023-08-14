const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;

  return (
    <div>
      <img className="w-[120px]" src={image} alt="" />
      <div>
        <h3 className="uppercase">{name}---------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;