import React, { useState, useEffect } from "react";
// import configAxios from '../configAxios.js'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

import axios from "axios";
import Footer from "../Components/Footer";
function Products() {
  const [products, setProducts] = useState([]);
  const producsList = async () => {
    const products = await axios.get("http://localhost:3001/products");
    setProducts(products.data);
  };

  useEffect(() => {
    producsList();
  }, []);
  return (
    <div className="container my-4 d-flex justify-content-center align-content-center gap-4 flex-wrap">
      {products?.map((product) => {
        return (
          <MDBCard className="" style={{ width:"14rem" }} key={product.id}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src={product.img}
                fluid
                alt="..."
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>{product.ProductName}  </MDBCardTitle>
              <MDBCardText> {product.Description} </MDBCardText>
              <MDBBtn href="#">Ajouter <span className="fs-5">33DH </span></MDBBtn>
            </MDBCardBody>
          </MDBCard>
        );
      })}
      <Footer/>
    </div>
  );
}

export default Products;
