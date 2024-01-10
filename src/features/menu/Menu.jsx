import { useLoaderData } from "react-router-dom";

function Menu() {
  const menu = useLoaderData();
  return <h1>Menu</h1>;
}

export default Menu;
