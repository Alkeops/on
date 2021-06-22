import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { NubeskIcons } from "@atoms";
const SocialNetworks = ({
  network,
  href,
  isWhite,
}: {
  network: string;
  href: string;
  isWhite: boolean;
}) => {
  const prefix: string = "a-social";
  const classForComponent: string = classNames(prefix, network, {
    "is-white": isWhite,
  });
  return (
    <Link href={href}>
      <a className={classForComponent}>
        <NubeskIcons icon={network} />
      </a>
    </Link>
  );
};

export default SocialNetworks;
