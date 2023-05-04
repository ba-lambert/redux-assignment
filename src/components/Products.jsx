import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/reducers/productSlices'

const Cards = ({products}) =>{
  return (
    <div key={products.id}>
        <p>{products.name}</p>
        <img src={products.images[0]} />
    </div>
  )
}
function Products() {
  const dispatch = useDispatch()
  const {products,loading,error} = useSelector((state) => state.product)
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  let content
  if (loading === 'pending') {
    content = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  if (loading === 'idle') {
    content = products.map((item) => {
      return <Cards products={item} key={item.id} />
    })
  }
  if (error !== null) {
    content = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )
  }
  return <div>{content}</div>
}

export default Products