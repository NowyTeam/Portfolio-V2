import Main from "./Main/Main";
import Menu from "./Menu/Menu";


import Style from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={Style.wrapper}>
      <header className={Style.header}>
        <Menu />
      </header>
      <main className={Style.main}>
        <Main />
      </main>

    </div>
  );
};
