

import './index.css'

const Cart = (props) => {
  const {cartsArray,handleBooknowBtn, handleRemoveCartItem} = props

  const renderCart = (each) => {
    const {id, imageUrl, title, price, location} = each
    return(
      <div className='cart-card'>
            <div className='cart-sub-card'>
                <img className='cart-img' src={imageUrl} alt={title} />
                <div className="cart-details-card">
                  <h1 className='cart-title'>{title}</h1>
                  <p className='cart-id'>Order Id : {id}</p>
                  <p className='cart-location'>Location : {location}</p>
                  <p className='cart-price'>Price : <span className='price-text'>₹ {price}</span> </p>
                </div>
                {/* <button className='cart-btn' type='button'>Add to cart</button> */}
                <div className="btns-card">
                <button className='check-btn' type='button' onClick={() => handleBooknowBtn(id, each)}>Book now</button>
                <button className='remove-btn' type='button' onClick={() => handleRemoveCartItem(id)}>Remove</button>
                </div>
            </div>
        </div>
    )
  }
  const renderNoCart = () => (
    <div className="no-cart-card">
      <img className="no-cart-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN6dw0GpDq-yNH_qGr5ixnF5Sa3hF7S-xIYQ&s" alt="No-Oredrs" />
    </div>
  )
  return(
    <div className="carts-card">
      {/* <Header /> */}
      {cartsArray.length === 0 && renderNoCart()}
      {cartsArray.length !== 0 && <><h1 className="my-carts">My Cart</h1>
      <div className="carts-maincard">
        {cartsArray.map(each => 
          renderCart(each)
        )}
      </div></>}
      
    </div>
  )
}

export default Cart