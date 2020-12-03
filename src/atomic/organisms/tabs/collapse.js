import React from "react";
import PropTypes from "prop-types";
import { Collapse } from "react-collapse";

const CollapseWrapper = ({ isOpened, children }) => (
	<Collapse isOpened={isOpened}>
		{children}
	</Collapse>
);

export default CollapseWrapper;

CollapseWrapper.propTypes = {
	isOpened: PropTypes.bool,
};

CollapseWrapper.defaultProps = {
	isOpened: true,
};
