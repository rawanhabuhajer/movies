import React from "react";
import { Link ,useEffect} from "react-router-dom";
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import man from "../App.css";
import movies from "./Data";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import search from '../Assets/search.png'


function Home() {

    const [moviesList , setMovieList] = useState(movies)

    const onInputItem = (event)=>{
        let query = event.target.value;
        let updatedList = movies.filter((movie)=>{
            return movie.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        })
        setMovieList(updatedList);
        console.log(updatedList);

        
    }
  return (
  
    <div className="main-page">
      
      <main
        className="main-img"
        style={{
          backgroundImage: `url(${man})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <header>
        <Navbar  expand="lg" className="navbar">
          <Container fluid>
            <Navbar.Brand href="#" className='Navbar-text'>Movies.State</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <div className="menu">
                <Nav.Link to="Home">Home</Nav.Link>
                <Nav.Link to="">Category</Nav.Link>
                <Nav.Link to="">Sign in</Nav.Link>
                </div>
              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
        <div>
          <h1 className="h">Where Cinema Comes<br></br> <span className="alive">Alive!</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing <br></br>elit.consectetur adipisicing elit</p>
        </div>
        <div>
   <div className="wrapper">
    
        <input
        type="text"
        id="search-second"
        onChange={onInputItem}
        placeholder=""
      
      />
<img src={search} alt="" className="search-icon" ></img>
      </div>

        </div>
        {/* <div className="links-main">
        <div>Privacy Policy</div>
        <div>Terms of use</div>
        <div>Settings</div>
        </div> */}
      </main>
      <h1 className="latest-movies">Discover Movies</h1>
      <div className="cards">
      {moviesList.map((movie, index) => (
        <div className="cardContainer" key={index}>
          <Link to= {`/details/${movie.id}`} className="btn-text">
          <Card style={{ width: "18rem" , height: '22rem',
          backgroundImage: `url(${movie.img})`,
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",}} className="cards">
            <Card.Body>
              {/* <Card.Title className="title">{movie.title}</Card.Title> */}
              
            </Card.Body>
          </Card>
          </Link>
          <div className="info">
               <Card.Title className="title">{movie.title}</Card.Title>
                <button className="deatiles-btn"> 
                <Link to= {`/details/${movie.id}`} className="btn-text">Details</Link></button>
               
              </div>
          
        </div>
        
      ))}
      </div>
      <div class="card-container"
     
      >
 
</div>
    </div>

    
  );
}

export default Home;

        // <div>
        //   <Link to={"/details/5"}>aa</Link>
        // </div>

        // `/details/${index}`

      //   <div className="cards">
      // {moviesList.map((movie, index) => (
      //   <div className="cardContainer" key={index}>
      //     <Card style={{ width: "18rem" , height: '22rem',
      //     backgroundImage: `url(${movie.img})`,
      //     backgroundRepeat:"no-repeat",
      //     backgroundSize:"cover",}} className="cards">
      //       <Card.Body>
      //         <Card.Title className="title">{movie.title}</Card.Title>
      //         <div className="info">
                
      //           <button className="deatiles-btn"> <Link
      //           to= {`/details/${movie.id}`} className="btn-text">Details</Link></button>
               
      //         </div>
      //       </Card.Body>
      //     </Card>
          
      //   </div>
        
      // ))}
      // </div>
  