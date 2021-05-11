import { MouseEventHandler } from "react";
type ButtonType = {
  content: string;
  className?: string;
  type?: "error" | "warning";
  onClick?: MouseEventHandler<HTMLElement>;
  [x: string]: any;
};

export type { ButtonType };
