import React, { useState } from "react";
import classNames from "classnames";
import { NavItem, NubeskIcons, Paragraph } from "@atoms";
import { FooterControlType } from "./FooterControlType";
import Link from "next/link";

const FooterContact = ({ icon, href, p, textButton }: FooterControlType) => {
  const prefix: string = "m-footer-contact";
  const classForComponent: string = classNames(`${prefix}`, {});
  return (
    <Link href={href}>
      <a className={classForComponent}>
        <NubeskIcons icon={icon} />
        <div className={`${prefix}__info`}>
          <Paragraph>{p}</Paragraph>
          <span>{textButton}</span>
        </div>
      </a>
    </Link>
  );
};

export default FooterContact;
