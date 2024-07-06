import Style from "./Manu.module.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <ul className={Style.wrap}>
          <Link className={Style.Link} to="/">
            Home
          </Link>
    
          <Link className={Style.Link} to="/blog">
            Blog
          </Link>
          <Link className={Style.Link} to="/">
            I'M TIRED
          </Link>
          <Link className={Style.Link} to="/">
            of this shit
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Menu;