import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { NubeskIcons } from "@atoms";
const SocialNetworks = ({
  network,
  href,
}: {
  network: string;
  href: string;
}) => {
  const prefix: string = "a-social";
  const classForComponent: string = classNames(prefix, network);
  return (
    <Link href={href}>
      <a className={classForComponent}>
        <NubeskIcons icon={network} />
      </a>
    </Link>
  );
};

export default SocialNetworks;
