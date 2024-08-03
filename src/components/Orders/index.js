import './index.css'


const Orders = (props) => {
  const {ordersArray, handleRemoveOrderItem} = props
  const renderOrders = (each) => {
    const {id, imageUrl, title, price, location} = each
    return(
      <div className='order-card'>
            <div className='order-sub-card'>
                <img className='order-img' src={imageUrl} alt={title} />
                <div className="order-details-card">
                  <h1 className='order-title'>{title}</h1>
                  <p className='order-id'>Order Id : {id}</p>
                  <p className='order-location'>Location : {location}</p>
                  <p className='order-price'>Price : <span className='price-text'>₹ {price}</span> </p>
                </div>
                <button className='check-btn' type='button' onClick={() => handleRemoveOrderItem(id)}>Check Out</button>
            </div>
        </div>
    )
  }
  const renderNoorder = () => (
    <div className="no-order-card">
      <img className="no-order-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bdEtO9_tLdGvcoTRyCWOJiF2Mwvq5zXTdF1ciWU5PTfHtm8wtdGfKXNSzYOsuPskm44&usqp=CAU" alt="No-Oredrs" />
    </div>
  )
  return(
    <div className="orders-card">
      {/* <Header /> */}
      {ordersArray.length === 0 && renderNoorder()}
      {ordersArray.length !== 0 && <><h1 className="my-orders">My Orders</h1>
      <div className="orders-maincard">
        {ordersArray.map(each => 
          renderOrders(each)
        )}
      </div></>}
    </div>
  )
}

export default Orders