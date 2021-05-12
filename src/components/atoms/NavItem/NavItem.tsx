import Link from "next/link";
import classNames from "classnames";
import { NavItemType } from "./NavitemType";
import { NextRouter, useRouter } from "next/router";

const NavItem = ({ content, href }: NavItemType) => {
  const { pathname }: NextRouter = useRouter();
  const prefix: string = "a-nav-item";
  const classForComponent: string = classNames(`${prefix}`, {
    "is-active": pathname === href,
  });
  return (
    <Link href={href}>
      <a className={classForComponent}>{content}</a>
    </Link>
  );
};

export default NavItem;
