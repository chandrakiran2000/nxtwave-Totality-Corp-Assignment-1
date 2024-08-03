
import './index.css'

const Hotel = (props) => {
    const {each, handleBooknowBtn, handleCartBtn} = props
    const {id, imageUrl, title, description, price, location, amenities} = each

    const bookBtn = () => {
        handleBooknowBtn(id, each)
    }

    const cartBtn = () => {
        handleCartBtn(id, each)
    }

    return(
        <div className='hotel-card'>
            <div className='sub-card'>
                <img className='hotel-img' src={imageUrl} alt={title} />
                <h1 className='hotel-title'>{title}</h1>
                <p className='hotel-location'>Location : {location}</p>
                <p className='hotel-description'>{description}</p>
                <p className='hotel-description'>{amenities.join(', ')}</p>
                <p className='hotel-price'>Price : <span className='price-text'>₹ {price}</span> </p>
                <button className='cart-btn' type='button' onClick={cartBtn}>Add to cart</button>
                <button className='book-btn' type='button' onClick={bookBtn}>Book now</button>
            </div>
        </div>
    )
}

export default Hotel