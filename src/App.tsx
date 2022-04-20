import React, { FC } from "react";
import "./App.scss";
import {
  TeliaButton,
  TeliaChipFilter,
  TeliaCol,
  TeliaFieldset,
  TeliaGrid,
  TeliaHeading,
  TeliaHeroBanner,
  TeliaLink,
  TeliaP,
  TeliaRow,
  TeliaTextSpacing,
} from "@teliads/components/react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { products as inventory } from "./products";
import { Product } from "./types";
import ProductCard from "./components/ProductCard/ProductCard";

const App: FC = () => {
  const [products, setProducts] = React.useState(inventory);

  const getFilterOptions = Array.from(
    new Set(inventory.map((product: Product) => product.preTitle))
  );

  const onSubmit = (e: any) => {
    e.preventDefault();

    const selectedProducts = [...e.target.products]
      .filter((input) => input.checked && input.value)
      .map((input) => input.value);

    if (selectedProducts.length) {
      setProducts(
        inventory.filter((product: Product) => {
          return selectedProducts.includes(product.preTitle);
        })
      );
    } else {
      setProducts(inventory);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <main className="main">
          <TeliaHeroBanner imgSrc="/images/Telia_Company_large.png">
            <TeliaTextSpacing>
              <TeliaHeading tag="h1" variant="title-500">
                Header takes two lines
              </TeliaHeading>

              <TeliaP variant="preamble-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                at rutrum nulla. Morbi mi libero, finibus in varius blandit,
                suscipit.
              </TeliaP>
              <Link to="/about">
                <TeliaLink>About us</TeliaLink>
              </Link>
              <TeliaLink href="#products">Link to content</TeliaLink>
            </TeliaTextSpacing>
          </TeliaHeroBanner>
          <TeliaGrid>
            <TeliaRow>
              <TeliaCol width={12}>
                <form onSubmit={onSubmit}>
                  <TeliaFieldset id="products" legend="Products">
                    <div className="filter-chip-row">
                      {getFilterOptions.map((option, i) => {
                        return (
                          <TeliaChipFilter
                            name="products"
                            key={i}
                            value={option}
                            text={option}
                          />
                        );
                      })}
                      <TeliaButton variant="primary" type="submit">
                        Filter
                      </TeliaButton>
                    </div>
                  </TeliaFieldset>
                </form>
              </TeliaCol>
            </TeliaRow>
            <TeliaRow>
              {products.map((product: Product, index: number) => {
                return <ProductCard product={product} key={index} />;
              })}
            </TeliaRow>
          </TeliaGrid>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
