import {
  TeliaCol,
  TeliaPrice,
  TeliaProductCardHardware,
} from "@teliads/components/react";
import React, { FC } from "react";
import { Product } from "../../types";
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const {
    href,
    badgeTitle,
    badgeVariant,
    preTitle,
    productTitle,
    price,
    currency,
    periodicity,
    slot,
    imgSrc,
  } = product;
  return (
    <TeliaCol width={12} width-md={6} width-lg={4} className="productCard">
      <TeliaProductCardHardware
        href={href}
        badge-title={badgeTitle}
        badge-variant={badgeVariant}
        product-title={productTitle}
        pre-title={preTitle}
        img-src={imgSrc}
      >
        <TeliaPrice slot={slot} price={price} currency={currency} periodicity={periodicity} />
      </TeliaProductCardHardware>
    </TeliaCol>
  );
};

export default ProductCard;
