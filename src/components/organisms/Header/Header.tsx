import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useWindowScroll } from "@hooks";
import { HamburguerButton } from "@atoms";
import { NavBar } from "@molecules";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { color } = useWindowScroll();
  const prefix = "o-header";
  const classForComponent: string = classNames(`${prefix}`, {
    "has-color": color,
  });
  return (
    <header className={classForComponent}>
      <Link href="/">
        <a style={{ fontSize: 20, marginRight: 18, width: 100 }}>Logo</a>
      </Link>
      <HamburguerButton open={open} setOpen={setOpen} />
      <NavBar open={open} />
    </header>
  );
};

export default Header;
