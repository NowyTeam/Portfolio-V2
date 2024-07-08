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
            Blogeg
          </Link>
          <Link className={Style.Link} to="/">
            I'M TIRED
          </Link>
          <Link className={Style.Link} to="/">
            of this shit agh
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Menu;
