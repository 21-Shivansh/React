import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import DetailProductCard from '../components/DetailProductCard';

const ProductPage = () => {

    const { id } = useParams();

    const [detailProduct,setDetailProduct] = useState({});

    const getData = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setDetailProduct(res.data);
    }
    useEffect(()=>{
        getData();
    },[])


  return (
    <div>
        <DetailProductCard detailProduct={detailProduct}/>
    </div>
  )
}

export default ProductPage

