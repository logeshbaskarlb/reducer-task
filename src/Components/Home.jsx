import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import Carosuel from "./Carosuel";

const Home = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="contianer-fluid">
      <Carosuel  src={"https://picsum.photos/200/300"} />
      <article className="py-5">
        <section className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols row-cols-md-2 row-cols-xl-4 justify-content-center">
            {products.map((item, index) => {
              return <ProductCard product={item} key={index} />;
            })}
          </div>
        </section>
      </article>
    </div>
  );
};

export default Home;
