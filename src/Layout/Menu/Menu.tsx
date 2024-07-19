import Style from "./Menu.module.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <div className={Style.Introduce}>
          <div className={Style.Introduce_wrap}>
            <div className={Style.logo}></div>
            <div className={Style.Description}>
              <h3 className={Style.Main_Description}>Nowy</h3>
              <h5 className={Style.Second_Description}>Front Dev & Designer</h5>
            </div>
          </div>
        </div>
        <ul className={Style.wrap}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${Style.Link} ${Style.activeLink}` : Style.Link
            }
            to="/">
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${Style.Link} ${Style.activeLink}` : Style.Link
            }
            to="/blog">
            Blog
          </NavLink>
          {/* <NavLink
            className={({ isActive }) =>
              isActive ? `${Style.Link} ${Style.activeLink}` : Style.Link
            }
            to="https://www.meme-arsenal.com/memes/19b4a7b94c0760e212c5873d79dde793.jpg">
            Y aparata
          </NavLink> */}
          {/* <NavLink
            className={({ isActive }) =>
              isActive ? `${Style.Link} ${Style.activeLink}` : Style.Link
            }
            to="https://i.pinimg.com/736x/fe/9d/3b/fe9d3ba40bf7fb1ede8e42e69e8e9b32.jpg">
            Helikopter
          </NavLink> */}
        </ul>
      </div>
    </>
  );
};

export default Menu;
