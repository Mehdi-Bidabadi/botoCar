import Categories from '@/components/module/Categories'
import carsData from '@/data/carsdata'
import React from 'react'

function index() {
  return (
    <div>
        {carsData.map((e) => (

            <Categories key={e.id} {...e} />
        ))}
    </div>
  )
}

export default index