import { Button, NavItem } from "@atoms";
import classNames from "classnames";

const NavBar = ({ open }: { open: boolean }) => {
    const prefix :string = "m-nav-bar";
    const classForComponent : string = classNames(`${prefix}`, {"is-open": open})
  return (
    <nav className={classForComponent}>
      <div className={`${prefix}__items`}>
        <NavItem href="/producto" content="Producto" />
        <NavItem href="/precios" content="Precios" />
        <NavItem href="/blog" content="Blog" />
        <NavItem href="/contacto" content="Contacto" />
      </div>
      <Button content="Prueba Gratis" />
    </nav>
  );
};

export default NavBar;
