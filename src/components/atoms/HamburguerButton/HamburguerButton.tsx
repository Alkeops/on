import { HamburguerButtonType } from "./HamburguerButtonType";
import classNames from "classnames";

const HamburguerButton = ({ open, setOpen }: HamburguerButtonType) => {
  const prefix: string = "a-hamburguer";
  const classForComponent: string = classNames(`${prefix}`, {
    "is-open": open,
  });
  return (
    <button className={classForComponent} onClick={(): void => setOpen(!open)}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default HamburguerButton;
