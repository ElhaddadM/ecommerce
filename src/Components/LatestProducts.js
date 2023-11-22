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
function LatestProducts() {
  const [products, setProducts] = useState([]);
  const producsList = async () => {
    const products = await axios.get("http://localhost:3001/products");
    setProducts(products.data);
  };

  useEffect(() => {
    producsList();
  }, []);
  return (
    <div className="d-flex flex-column gap-3 flex-md-row">
      {products?.map((product) => {
        return (
          <MDBCard className="" key={product.id}>
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
    </div>
  );
}

export default LatestProducts;
