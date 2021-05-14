import { ReactNode } from "react";

type FlexContainerType = {
  children: ReactNode;
  isColumn?: boolean;
  justifyCenter?: boolean;
  alignStart?: boolean;
};

export type { FlexContainerType };
