
import './index.css'


const Header = (props) => {
  const {handleActiveState} = props

  return(
    // <div className="home-card">
    <div className="header-card">
      <img className='logo-img'  src='https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FC4D0BAQFxW0DINigh9A%2Fcompany-logo_200_200%2F0%2F1631354119336%3Fe%3D1730332800%26v%3Dbeta%26t%3DyFjZI40-71JcBw2_eyyrN7RWfJE9CzCr-M7SOgu2ieg' alt='logo'/>
      <div className="links-card">
        <button className="links-text" onClick={() => handleActiveState("home")}>Home</button>
        <button className="links-text" onClick={() => handleActiveState("orders")}>Orders</button>
        <button className="links-text" onClick={() => handleActiveState("carts")}>Cart</button>
      </div>
              {/* <button className='logout-btn' onClick={handleLogout} type="button">Log Out</button> */}
    </div>
            // </div>
  )
}

export default Header