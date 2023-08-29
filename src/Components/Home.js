import React from 'react'



function Home() {
  return (
    <>
    <h1>Home Components</h1>
    <div className='container'>
    <div className='add' >
        <img style={{width:"5rem", marginLeft:"95rem"}} src='https://media.istockphoto.com/id/1195705173/vector/add-to-cart-icon-adding-shopping-cart.jpg?s=612x612&w=0&k=20&c=lKq9JyQKD0-0wn2k-eBrBT5-Vreq0EZovVDxO4nAAgs='/>
    </div>
  <div className="row">
    
    <div className="col">
    <div className="card" style={{width:"22rem"}}>
    <img src='https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg' className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">Real me 91</h5>
    <h3>$10999</h3>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className='btn btn-primary'>Add To Cart</button>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" style={{width:"22rem"}}>
    <img src='https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg' className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">Real me 91</h5>
    <h3>$10999</h3>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className='btn btn-primary'>Add To Cart</button>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" style={{width:"22rem"}}>
    <img src='https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg' className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">Real me 91</h5>
    <h3>$10999</h3>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className='btn btn-primary'>Add To Cart</button>
  </div>
</div>
    </div>
  </div>
</div>
    
    </>
  )
}
export default Home 
