import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const ProductSchema = ({
    productName,
    productImage,
    productDescription,
    productUrl,
    productPrice,
    priceValidUntil
}) => {
    return (
        <Helmet>
            <script type="application/ld+json">{`
            {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "${productName}",
                "image": [
                    "${productImage}"
                ],
                "description": "${productDescription}",
                "brand": {
                    "@type": "Brand",
                    "name": "incfile"
                },
                "review": {
                    "@type": "Review",
                    "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4.8",
                    "bestRating": "5"
                    },
                    "author": {
                    "@type": "Person",
                    "name": "June M."
                    }
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "18741"
                },
                "offers": {
                    "@type": "Offer",
                    "url": "${productUrl}",
                    "priceCurrency": "USD",
                    "price": "${productPrice}",
                    "priceValidUntil": "${priceValidUntil}",
                    "availability": "https://schema.org/InStock"
                }
            }
            `}</script>
        </Helmet>
    );
}

export default ProductSchema;

ProductSchema.defaultProps = {
    productName: `Form a Business Entity`,
    productImage: `https://www.incfile.com/static/img/logos/incfile.svg`,
    productUrl: typeof window !== 'undefined' ? window.location.href : '',
    productPrice: `0.00`,
    priceValidUntil: `2021-12-30`,
    productDescription: `Start your business today for as little as $0 + state fees. Incfile helps you quickly and easily create your LLC or other business entity. Learn more.`,
}

ProductSchema.propTypes = {
    productName: PropTypes.string,
    productImage: PropTypes.string,
    productDescription: PropTypes.string
}