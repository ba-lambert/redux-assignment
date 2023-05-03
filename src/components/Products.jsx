// eslint-disable-next-line no-unused-vars
import React from 'react'
import {useState,useEffect} from 'react'

function Products() {
    const [product, setProduct] = useState([]);
    const fetchProducts = ()=>{
        fetch('')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setProduct(data)
        })
    }
    useEffect(()=>{
        fetchProducts()
    },[])
  return (
    <div>
        {product.length > 0 && (
            <div>
                {product.map(data => {
                    <div>
                        <p>data.name</p>
                        <img url={data.img} />
                    </div>
                })}
            </div>
        )}
    </div>
  )
}

export default Products