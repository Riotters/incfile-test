import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

//...GatsbyImageSharpFluid

const Image = (props) => (
	<StaticQuery
		query={graphql`
			query {
				images: allFile(filter: { extension: { in: ["png", "jpg"] } }) {
					edges {
						node {
							relativePath
							name
							childImageSharp {
								fluid(maxWidth: 720) {
                                    ...GatsbyImageSharpFluid_withWebp
								}
							}
						}
					}
				}
			}
		`}
		render={(data) => {
			const image = data.images.edges.find((n) => {
				return n.node.relativePath.includes(props.filename);
			});

			if (!image) {
				return null;
			}

			let imageFluid = "";

			if (image.node.childImageSharp !== null) {
				imageFluid = image.node.childImageSharp.fluid;
			}

			if (imageFluid) {
				return <Img alt={props.alt} fluid={imageFluid} />;
			} else {
				return null;
			}
		}}
	/>
);
export default Image;
