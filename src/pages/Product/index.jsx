import { useParams } from 'react-router-dom'

const Product = () => {
  const { title } = useParams()

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{title}</h2>
    </div>
  )
}

export default Product
