import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ProductDetailCard from '../component/ProductDetailCard';

const Product = () => {
  const { id } = useParams();
  const [productDetailCard,setProductDetailCard] = useState({});

  const getProduct = async () => {
    let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProductDetailCard(res.data)
  }

  useEffect(()=>{
    getProduct();
  },[])

  return (
    <div>
      <ProductDetailCard productDetailCard={productDetailCard} />
    </div>
  )
}

export default Product
