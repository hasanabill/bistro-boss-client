import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/dessert-bg.jpeg";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <Cover img={menuImg}></Cover>
      <h1>Menu</h1>
    </div>
  );
};

export default Menu;
