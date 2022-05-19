import CategoryNav from "../categoryNav";
import Header from "../header";

const Layout = (props) => {
  return (
    <div className="container">
      <Header />
      <CategoryNav />
      {props.children}
    </div>
  );
};

export default Layout;
