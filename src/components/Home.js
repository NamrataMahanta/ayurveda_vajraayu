import "./Home.css";
import { Link } from 'react-router-dom';
import logo from '../assests/images/logo.jpg';
const Home = () => {
  const fontStyles = ["normal", "italic"];
  return (

    <div>
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
      <div class="container-fluid">
        {/* <img src={logo} alt="Avatar Logo" width="30" height="30" class="rounded-pill" /> */}
        {/* <Link to="/medicine/all" class="btn btn-success btn-rounded">view All Medicine</Link> */}
        {/* <button type="button" class="btn btn-dark">Home</button>
            <button type="button" class="btn btn-dark">AboutUs</button>
            <button type="button" class="btn btn-dark">SignUp</button>
            <button type="button" class="btn btn-success btn-rounded">Login</button> */}
        <div class="navbar">
          <Link to="/about" class="btn btn-primary">AboutUs</Link>
          <Link to="/login" class="btn btn-primary"> Login</Link>
          <Link to="/customer/add" class="btn btn-primary" >SignUp</Link></div>
        {/* <Link to="/customer/all"class="btn btn-success btn-rounded" >All Customers</Link> */}
      </div>


      <div
        style={{
          backgroundImage: `url("https://colorlib.com/wp-content/uploads/sites/2/Ayurvedic-Medicine-WordPress-Themes.jpg")`,
          backgroundPosition: `cover`
        }}
      >
        <div style={{ minHeight: "100vh", textShadow: '2px 2px #f2f2f2' }} className="container">
          <img src={logo} alt="Avatar Logo" width="100" height="100" class="rounded-pill" />
          <p class="appname"><b />Vajraayu</p>
          
          <p class="typewriter"><h5>Nature  That Nurture's You</h5></p>
          {/* <p class="typewriter"><h6>Nature can do more than physicians</h6></p> */}


        </div>
        {/* <div className="Banner2">
        <div class="card1" >
          <img src="https://www.pratilipi.com/images/feature-read.webp" class="card-img-top1" alt="..." />
          <div class="card-body1">
            <h4 class="card-title1">Read</h4>
            <p class="card-text1">Discover thousands of stories, poems, articles, magazines, novels, essays, etc for free. Read popular genres... filled with endless emotions, thoughts, verses, and possibilities.</p>
          </div>
        </div>

        <div class="card1" >
          <img src="https://www.pratilipi.com/images/feature-write.webp" class="card-img-top1" alt="..." />
          <div class="card-body1">
            <h5 class="card-title1">Explore</h5>
            <p class="card-text1">Explore your book or books and swim into the ocean of books..
            </p>
          </div>
        </div>

        <div class="card1" >
          <img src="https://www.pratilipi.com/images/feature-involve.webp" class="card-img-top1" alt="..." />
          <div class="card-body1">
            <h5 class="card-title1">Get Involed</h5>
            <p class="card-text1">At Your Service brings writers and readers on a single platform..</p>
          </div>
        </div>
      </div >*/}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </div>
    </div>
  );
}
export default Home;