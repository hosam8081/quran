import React from 'react'
import Aside from '../component/Aside'
import Reader from '../component/Reader'
const Reciters = () => {
  return (
    <section className="spad">
      <div className="container-fluid">
        <div className="row">
          <Reader />
          <Aside />
        </div>
      </div>
    </section>
  )
}

export default Reciters