import { ButtonConfig, getButtonClasses } from "./ButtonConfig";

import Link from "next/link";

interface ButtonProps extends ButtonConfig {
  label?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  mode,
  style,
  size,
  iconPosition,
  icon,
  label,
  href,
}) => {
  const buttonConfig: ButtonConfig = {
    mode,
    style,
    size,
    iconPosition,
    icon,
  };

  
  if (style === "link" && href) {
    return (
      <Link href={href} passHref>
        <a className={getButtonClasses(buttonConfig)}>{label}</a>
      </Link>
    );
  }

  return (
    <button className={getButtonClasses(buttonConfig)}>
      {iconPosition === "leading" && icon}
      {label && iconPosition !== "onlyicon" && (
        <span className="mx-2">{label}</span>
      )}
      {iconPosition === "trailing" && icon}
      {iconPosition === "onlyicon" && icon}
    </button>
  );
};

export default Button;
