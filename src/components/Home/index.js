
import { Component } from "react";
import Hotel from "../Hotel";
import Orders from "../Orders";
import Cart from "../Cart";
import './index.css'
import Header from "../Header";

const hotelsArray = [
    {
      id: 1,
      imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0e/a9/d6/bc/lily-pool-villa.jpg",
      title: "Lily Pool Villa",
      description: "A luxurious villa with a private pool, perfect for a relaxing getaway.",
      price: 12000,
      location: "Goa",
      amenities: ["Free WiFi", "Swimming Pool", "Spa", "Free Breakfast"],
    },
    {
      id: 2,
      imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/2c/09/dc/21/premier-rooms-with-semi.jpg",
      title: "Premier Rooms",
      description: "Modern rooms with semi-private pools and stunning views.",
      price: 10000,
      location: "Mumbai",
      amenities: ["Free WiFi", "Swimming Pool", "Gym", "Restaurant"],
    },
    {
      id: 3,
      imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/28/65/11/fc/the-leela-kovalam-a-raviz.jpg",
      title: "The Leela Kovalam",
      description: "A premium beachfront resort offering world-class amenities.",
      price: 15000,
      location: "Kovalam",
      amenities: ["Free WiFi", "Beach Access", "Spa", "Infinity Pool"],
    },
    {
      id: 4,
      imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/12/9b/64/ad/the-tall-trees-munnar.jpg",
      title: "The Tall Trees Munnar",
      description: "A serene retreat nestled among the tall trees of Munnar.",
      price: 8000,
      location: "Munnar",
      amenities: ["Free WiFi", "Nature Walks", "Restaurant", "Yoga Classes"],
    },
    {
      id: 5,
      imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/1d/5a/bf/58/the-leaf-munnar.jpg",
      title: "The Leaf Munnar",
      description: "Experience tranquility and comfort at The Leaf Munnar.",
      price: 9000,
      location: "Munnar",
      amenities: ["Free WiFi", "Swimming Pool", "Restaurant", "Garden"],
    },
    {
      id: 6,
      imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0d/f9/c5/ee/swimming-pool.jpg",
      title: "Poolside Resort",
      description: "Relax and unwind at this resort with a large swimming pool.",
      price: 7000,
      location: "Jaipur",
      amenities: ["Free WiFi", "Swimming Pool", "Free Breakfast", "Parking"],
    },
    {
      id: 7,
      imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/2a/a9/1a/66/swimming-pool.jpg",
      title: "Luxury Resort",
      description: "A luxury resort with top-notch facilities and a stunning pool.",
      price: 14000,
      location: "Udaipur",
      amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant"],
    },
    {
      id: 8,
      imageUrl: "https://media1.thrillophilia.com/filestore/xj5dxgvfmczi5mukyqz8c9fzjcmb_snow-valley-resorts%20(13).jpg?w=305&h=230&dpr",
      title: "Snow Valley Resorts",
      description: "Enjoy the beautiful snowy landscapes at Snow Valley Resorts.",
      price: 11000,
      location: "Manali",
      amenities: ["Free WiFi", "Heated Pool", "Ski Access", "Restaurant"],
    },
  ];
const amenitiesArray = [
    "Free WiFi",
    "Swimming Pool",
    "Spa",
    "Free Breakfast",
    "Gym",
    "Restaurant",
    "Beach Access",
    "Infinity Pool",
    "Nature Walks",
    "Yoga Classes",
    "Garden",
    "Parking",
    "Heated Pool",
    "Ski Access"
  ];
const locationsArray = [
    "Goa",
    "Mumbai",
    "Kovalam",
    "Munnar",
    "Jaipur",
    "Udaipur",
    "Manali",
    "Shimla"
  ];

class Home extends Component {
  state = {activeComponent: "home", location: "", amenitie: "", hotelsList:hotelsArray, ordersArray: [], cartsArray: []}

  handleBooknowBtn = (id, each) => {
    const {ordersArray} = this.state
    const updated = ordersArray.filter(eachObj => (
      eachObj.id === id
    ))
    if (updated.length === 0){
      this.setState({ordersArray: [...ordersArray, each] })
      alert("Booking Confirmed")
    }else {
      alert("Already Booked")
    }
  }

  handleCartBtn = (cartid, each) => {
    const {cartsArray} = this.state
    const updated = cartsArray.filter(eachObj => (
      eachObj.id === cartid
    ))
    if (updated.length === 0){
      this.setState({cartsArray: [...cartsArray, each] })
      alert("Cart Added")
    }else {
      alert("Already Added")
    }
  }

  handleActiveState = (name) => {
    this.setState({activeComponent: name})
  }

  handleRemoveOrderItem = (id) => {
    this.setState(prevState => ({ordersArray: prevState.ordersArray.filter(each => (each.id !== id))}))
    alert("Check out")
  }

  handleRemoveCartItem = (id) => {
    this.setState(prevState => ({cartsArray: prevState.cartsArray.filter(each => (each.id !== id))}))
    alert("Removed from Cart")
  }

  handleLocationChange = (event) => {
    this.setState(prevState => ({
        location: event.target.value,
        hotelsList: prevState.hotelsList.filter(hotel => 
          hotel.location.includes(event.target.value)
        )
      }));
  }

  handleAmenitieChange = (event) => {
    this.setState(prevState => ({
        amenitie: event.target.value,
        hotelsList: prevState.hotelsList.filter(hotel => 
          hotel.amenities.includes(event.target.value)
        )
      }));
  }

  handleClear = () => {
    this.setState({location: "", amenitie:"", hotelsList: hotelsArray})
  }

  renderHomeContent = () => {
    const {hotelsList, location, amenitie} = this.state
    console.log(hotelsList)
    return(
    <div className="home-card">
              {/* <Header handleActiveState={this.handleActiveState}/> */}
              <div className="page-description-card">
                <img className="page-description-img" src="https://img.freepik.com/premium-vector/design-concept-hotel-search-booking-online-hotel-building-detailed-reservation-application-interface-hand-holding-smart-phone-modern-flat-style-design-illustration-isolated_126608-236.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721520000&semt=ais_user" alt="img" />
                <p className="page-description-text">Welcome to your ultimate destination for finding the perfect vacation rental. Whether you're looking for a luxurious resort, a cozy hotel, or a serene retreat, we have something for everyone. Discover the best properties across India and make your dream vacation a reality.</p>
              </div>
              
              <div className="hotels-main-card">
                <div className="hotels-main-headingcard">
                  <h1 className="hotels-main-heading">Discover Your Next Stay</h1>
                  <p className="hotels-main-heading">Filters</p>
                  <select value={location} onChange={this.handleLocationChange} className="select">
                    <option value="" disabled>
                      Select Location
                    </option>
                    {locationsArray.map(each => (
                      <option value={each}>{each}</option>
                    ))}
                  </select>
                  <select value={amenitie} onChange={this.handleAmenitieChange} className="select">
                    <option value="" disabled>
                      Select Amenities
                    </option>
                    {amenitiesArray.map(each => (
                      <option value={each}>{each}</option>
                    ))}
                  </select>
                  <button type="button" className="select" onClick={this.handleClear}>Clear Filters</button>
                </div>
                <div className="hotels-card">
                  {hotelsList.map(each => (
                    <Hotel each={each} handleBooknowBtn={this.handleBooknowBtn} handleCartBtn={this.handleCartBtn} key={each.id} />
                  ))}
                </div>
                {hotelsList.length === 0 && <div className="no-data-card"><h1 className="">No Data Found</h1></div>}
              </div>
            </div>
  )
  }

  renderOrdersComponent = () => {
    const {ordersArray} = this.state
    return(
      <Orders ordersArray={ordersArray} handleRemoveOrderItem={this.handleRemoveOrderItem} />
    )
  }

  renderCartsComponent = () => {
    const {cartsArray} = this.state
    return(
      <Cart cartsArray={cartsArray} handleBooknowBtn={this.handleBooknowBtn} handleRemoveCartItem={this.handleRemoveCartItem} />
    )
  }
  


  renderComponent = () => {
    const {activeComponent} = this.state
    switch (activeComponent) {
      case 'home':
        return this.renderHomeContent()
      case 'orders':
        return this.renderOrdersComponent()
      case 'carts':
        return this.renderCartsComponent()
      default:
        return null
    }
  }
  


    render(){
        return(
          <>
          <Header handleActiveState={this.handleActiveState}/>
          {this.renderComponent()}
          </>
        )
    }
}

export default Home