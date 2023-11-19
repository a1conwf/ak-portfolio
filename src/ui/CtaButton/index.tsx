import React from "react";

type CtaButtonProps = {
  text: string;
  link: string;
  linkTarget?: string;
};

const CtaButton: React.FC<CtaButtonProps> = ({ text, link, linkTarget }) => {
  return (
    <a className="btn" href={link} target={linkTarget}>
      {text}
    </a>
  );
};

export default CtaButton;
