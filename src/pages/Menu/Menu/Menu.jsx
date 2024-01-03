import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import Cover from "../../Shared/Cover/Cover";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our menu"></Cover>
      <SectionTitle heading="Today's offer" subHeading="Don't miss"></SectionTitle>
      {/* offered menu item */}
      <MenuCategory items={offered} coverImg={menuImg}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title="Dessert"
        coverImg={dessertImg}
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory
        items={pizza}
        title="Pizza"
        coverImg={pizzaImg}
      ></MenuCategory>
      {/* salad menu items */}
      <MenuCategory
        items={salad}
        title="Salad"
        coverImg={saladImg}
      ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory
        items={soup}
        title="Soup"
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
