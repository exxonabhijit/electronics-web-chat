import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { fetchProductById } from '../store/Product/productActions';
export default function ProductDetails() {
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(id);
    dispatch(fetchProductById(id));
  }, [id])

  return (
    <div>ProductDetails</div>
  )
}
