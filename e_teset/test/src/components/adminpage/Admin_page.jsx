import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import productsapi from '../../redux/products/productsapi'

function Admin_page() {


  let dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(productsapi())        
    },[dispatch])

    let aaa = useSelector(state => state.product.data)

    console.log(aaa)
    
  return (
    <>
      {
      
      aaa.length === 0 ? null :
      aaa.map((e) => {
        return (
          <>
          <Admin_page
            key={e.id}
            name={e.name}
            phonename={e.phonename}
            color={e.color}
            price={e.price}
            instok={e.instok}
            />
            </>
        )
      })}

    </>
  )
}

export default Admin_page