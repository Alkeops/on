import { ReactNode } from "react";

type ContainerType = {
  children: ReactNode;
  full?: boolean;
  wide?: boolean;
  className?: string;
  isXlWide?: boolean;
};

export type { ContainerType };
