import React from "react";

const CtaButton = ({text, link, linkTarget}) => {
	return (
		<a className="btn" href={link} target={linkTarget}>
			{text}
		</a>
	);
};

export default CtaButton;
