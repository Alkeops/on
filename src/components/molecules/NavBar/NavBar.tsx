import { Button, NavItem } from "@atoms";
import classNames from "classnames";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";

const NavBar = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: MouseEventHandler;
}) => {
  const router = useRouter();
  const prefix: string = "m-nav-bar";
  const classForComponent: string = classNames(`${prefix}`, {
    "is-open": open,
  });
  return (
    <nav className={classForComponent}>
      <div className={`${prefix}__items`}>
        <NavItem href="/producto" content="Producto" />
        <NavItem href="/precios" content="Precios" />
        <NavItem href="/blog" content="Blog" />
        <button onClick={onClick}>Contacto</button>
      </div>
      <Button content="Agenda tu Demo" onClick={() => router.push('/agenda')} />
    </nav>
  );
};

export default NavBar;
