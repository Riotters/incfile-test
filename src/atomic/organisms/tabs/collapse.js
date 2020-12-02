import React from "react";
import PropTypes from "prop-types";
import { Collapse } from "react-collapse/lib/Collapse";

const CollapseWrapper = ({ isOpened, layout, children }) => (
	<Collapse isOpened={isOpened}>
		{React.Children.map(children, (child, i) =>
			React.cloneElement(child, {
				//isVisible: isVisible,
				//layout: layout,
				//panelNo: i,
			})
		)}
	</Collapse>
);

export default CollapseWrapper;

CollapseWrapper.propTypes = {
	isOpened: PropTypes.bool,
};

CollapseWrapper.defaultProps = {
	isOpened: true,
};
