import Navbar from "./Navbar"
import Hero from "../img/Hero.png"
import Footer from "./Footer"

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <Navbar />
          <div>
            <img className="hero-section" src={Hero} alt="" />
          </div>

          <div>
            <h2>Don’t Be Slow! Our Prices Are Low</h2>
            <div className="col1">
              <div className="col2">
                <p><b>0</b></p>
                <p>HOURS</p>
              </div>
              <div className="col3">
                <p><b>0</b></p>
                <p>MIN</p>
              </div>
              <div className="col4">
                <p><b>0</b></p>
                <p>SEC</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="cat">Top Categories</h2>
            <div className="col5">
              <div className="image">
                <img src="https://mnfurnitures.co.uk/wp-content/uploads/2022/10/RUGBY-WHITE-HIGH-GLOSS-BED-300x300.jpg" alt="" />
                <span><b>BEDS</b></span>
              </div>
              <div className="image">
                <img src="https://mnfurnitures.co.uk/wp-content/uploads/2022/09/Top-Categories-WARDROBE-IMAGE-300x300.jpg" alt="" />
                <span><b>WARDROBES</b></span>
              </div>
              <div className="image">
                <img src="https://mnfurnitures.co.uk/wp-content/uploads/2022/09/Top-Categories-SOFA-BED-IMAGE-300x300.jpg" alt="" />
                <span><b>SOFA BEDS</b></span>
              </div>
              <div className="image">
                <img src="https://mnfurnitures.co.uk/wp-content/uploads/2022/09/Top-Categories-SOFA-SET-IMAGE-300x300.jpg" alt="" />
                <span><b>SOFAS</b></span>
              </div>
              <div className="image">
                <img src="https://mnfurnitures.co.uk/wp-content/uploads/2022/09/Top-Categories-TV-SET-IMAGE-300x300.jpg" alt="" />
                <span><b>TV SET</b></span>
              </div>
              <div className="image">
                <img src="https://mnfurnitures.co.uk/wp-content/uploads/2022/09/Top-Categories-outdoor-garden-furniture-IMAGE-300x300.jpg" alt="" />
                <span><b>OUTDOOR AND GARDEN</b></span>
              </div>
            </div>
          </div>
          <div className="homeContainer">
            <div className="homeCard">
              <div className="homeCardImg">
                <img src="https://mnfurnitures.co.uk/wp-content/uploads/2022/08/HOUSTON-SKY-BLUE-CORNER-SOFA-BED.jpg" alt="IMG" />
              </div>
              <h1>
                HOUSTON SKY BLUE CORNER SOFA BED
              </h1>
              <span>
                <span>£1,999.99</span>
                <span>£899.99</span>
              </span>
              <button>ADD TO CART</button>
            </div>
            <div className="homeCard">
              <div className="homeCardImg">
                <img src="https://mnfurnitures.co.uk/wp-content/uploads/2019/02/Borys-Blue-mini-sofa-bed-280x280.jpg" alt="IMG" />
              </div>
              <h1>
                BORYS BLUE SOFA BED SMALL
              </h1>
              <span>
                <span>£1,599.99</span>
                <span>£899.99</span>
              </span>
              <button>ADD TO CART</button>
            </div>
            <div className="homeCard">
              <div className="homeCardImg">
                <img src="https://mnfurnitures.co.uk/wp-content/uploads/2022/10/LIDO-Green-Corner-Sofa-Bed-Colors-Variation-280x280.jpg" alt="IMG" />
              </div>
              <h1>
                LIDO Green Corner Sofa Bed
              </h1>
              <span>
                <span>£1,999.99</span>
                <span>£899.99</span>
              </span>
              <button>ADD TO CART</button>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home