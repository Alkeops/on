import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { NubeskIcons } from "@atoms";
const SocialNetworks = ({
  network,
  href,
  isWhite,
  target,
}: {
  network: string;
  href: string;
  isWhite?: boolean;
  target?: string;
}) => {
  const prefix: string = "a-social";
  const classForComponent: string = classNames(prefix, network, {
    "is-white": isWhite,
  });
  return (
    <>
      {target ? (
        <a className={classForComponent} href={href} rel="noopener noreferrer" target={target}>
          <NubeskIcons icon={network} />
        </a>
      ) : (
        <Link href={href}>
          <a className={classForComponent} rel="noopener noreferrer">
            <NubeskIcons icon={network} />
          </a>
        </Link>
      )}
    </>
  );
};

export default SocialNetworks;
