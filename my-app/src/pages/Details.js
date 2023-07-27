import React from 'react';
import {movies} from './Data';
import {useParams ,Link } from 'react-router-dom';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Details.css';
import imdb from '../Assets/imdb.png'
import play from '../Assets/play.png'
import star from '../Assets/star.png'

const Details = () => {

  const { moviesId } = useParams();
 

  const Details = movies .find(mov => mov.id === parseInt(moviesId))
  const { title, img ,director,year,genre,rating,details ,coverImg, time ,  boxOffice ,
  topCast1,topCast2,topCast3,topCast4,topCast5,topCast1Img,topCast2Img,topCast3Img,topCast4Img,topCast5Img,movieLink
  } = Details;

  console.log("product id ", moviesId)
   console.log("product ", Details)

   useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  return (
    <>
    
          <div className='cover-container'>
            
          <div className='img-container' style={{
          backgroundImage: `url(${coverImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
          opacity:'0.3', }}>
          
        </div>
        <div className='boxes'>
 
            <div className='box1'>   
             <img src={play} alt=''></img>
            </div>
       
            <div className='box2'>
            <img src={star} alt=''></img>
              <h1>{rating}</h1>
            </div>
            <div className='box3'>
              <h1>{year}</h1>
            </div>
            <div className='box4'>
              <h1>{time}</h1>
            </div>
            <div className='box5'>
              <h1>{ boxOffice}</h1>
            </div>
          </div>
      
          </div>
      <Container className='container'>
       
      <Row>
        <Col sm={4}>
          <div>
          <img src={img} alt='' className='details-img'></img>
          </div>
        </Col>
        <Col sm={8}>
          <h1 className='details-header'>{title}</h1>
          <img src={imdb} alt='' className='details-img2'></img>
          <span className='details-rating'>{rating}</span>
          <p className='details-date'>{year}</p>
          <div className='details-genre'>Genre : {genre}</div>
          <div className='director'>Director : {director}</div>
          <div className='Storyline'>Storyline</div>
          <p className='details'>{details}</p> 
         
        </Col>
      </Row>
      <Row>
        <Col lg-12 >
        <div className='TopCast'>Top Cast</div>
        <div className='img-div'>
          <div>
          <img src={topCast1Img} alt=''></img>
          <p>{topCast1}</p>
          </div>
          <div>
          <img src={topCast2Img} alt=''></img>
          <p>{topCast2}</p>
          </div>
          <div>
          <img src={topCast3Img} alt=''></img>
          <p>{topCast3}</p>
          </div>
          <div>
          <img src={topCast4Img} alt=''></img>
          <p>{topCast4}</p>
          </div>
          <div>
          <img src={topCast5Img} alt=''></img>
          <p>{topCast5}</p>
          </div>
  
        </div>
        </Col>
      </Row>

    </Container>

 
    </>
  );
};

export default Details;
