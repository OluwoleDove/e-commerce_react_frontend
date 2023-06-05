import React, { useEffect, useReducer } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet-async";
import Product from "../components/Product";
import data from "../data";
import casioWatchImage from '../img/casio-watch.jpg';
import tommyHilfigerPantImage from '../img/tommy-hilfiger-pant.jpg';
import giorgioArmaniAcquaDiPerfumeImage from '../img/giorgio-armani-acqua-di-perfume.jpg';
import giorgioArmaniBlazerImage from '../img/giorgio-armani-blazer.jpg';

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: data.products, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Home() {
  const [{ loading, products, error }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    dispatch({ type: "FETCH_SUCCESS" });
  }, []);

  const productsPerRow = 4;
  const productRows = [];
  for (let i = 0; i < products.length; i += productsPerRow) {
    productRows.push(products.slice(i, i + productsPerRow));
  }

  return (
    <div>
      <Helmet>
        <title>Fashlinks</title>
      </Helmet>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          "..."
        ) : error ? (
          "Loading error"
        ) : (
          <>
            {productRows.map((row) => (
              <Row key={row[0]._id}>
                {row.map((product) => (
                  <Col key={product._id} sm={6} md={4} lg={3} className="mb-3">
                    <Product product={product} image={
                      product.name === "Casio Wrist Watch" ? casioWatchImage :
                      product.name === "Tommy Hilfiger Fit Pant" ? tommyHilfigerPantImage :
                      product.name === "Giorgio Armani Perfume" ? giorgioArmaniAcquaDiPerfumeImage :
                      product.name === "Giorgio Armani Blazer" ? giorgioArmaniBlazerImage : null
                    }></Product>
                  </Col>
                ))}
              </Row>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
