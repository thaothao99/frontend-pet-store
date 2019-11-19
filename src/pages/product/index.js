/* eslint-disable linebreak-style */
import React from 'react'
import ListProduct from '../../components/listProduct'
import Layout from '../layout'

const Product = (props) => {
  const { history, store } = props
  return (
    <div>
      <Layout history={history} store={store} />
      <ListProduct />
    </div>
  )
}

export default Product