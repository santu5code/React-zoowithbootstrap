import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import {  Col, Row, Container } from "react-bootstrap";
import {Navbar, Nav, Card} from 'react-bootstrap'
import { FaPaw } from "react-icons/fa";
import { BsSun,BsCheck } from "react-icons/bs";
import { GiDrop,GiMonkey,GiTigerHead,GiElephantHead,GiRhinocerosHorn, GiBottomRight3DArrow } from "react-icons/gi";
import { IoIosArrowDropdown } from "react-icons/io";
import { SiJohndeere } from "react-icons/si";
import { IoLogoFacebook} from "react-icons/io";
import { AiFillTwitterCircle,AiFillInstagram} from "react-icons/ai";
export default class App extends Component {
  render() {
    return (
      
        <Container className="m-0  ">
          <div className="banner" Style={{maxWidth:'1400px'  }}>
          <Row >
            <Col md={7} >
              <Navbar bg="transparent" >
                <Navbar.Brand style={{fontWeight:'bold', fontSize:'30px', color:'#133A04'}}href="#home">ZOO</Navbar.Brand>
                  <Nav className="ml-auto" style={{ color:'#28a745'}}>
                  <Nav.Link className='pr-5' style={{color:'#17C20C'}}href="#">About</Nav.Link>
                  <Nav.Link className='pr-5' style={{color:'#17C20C'}}href="#">Animal</Nav.Link>
                  <Nav.Link className='pr-5' style={{color:'#17C20C'}}href="#">Donate</Nav.Link>
                  <Nav.Link className='pr-5' style={{color:'#17C20C'}}href="#">Pricing</Nav.Link>
                  <Nav.Link className='pr-5' style={{color:'#17C20C'}}href="#">Blog</Nav.Link>
                </Nav>
              </Navbar>
              <div className="text-area  pb-3" style={{ textAlign:'left', margin: '120px 372px 150px 150px',minWidth: '250px' }}>
                <h6 style={{ color:'#1ADB06' }}>welcome to zoo</h6>
                <h1 style={{ color:'#133A04',fontWeight:'800',width:'300px' }}>Care For Any Animals</h1>
                <p style={{ color:'#094505',width:'380px', fontWeight:'500' }}>
                  Larger than urban and open-range zoos, safari parks are 
                  areas where tourists can drive their own cars.
                </p>
                <Button  variant="success" style={{border: 'none', borderRadius:'30px' }} size="lg">Explore</Button>
              </div>
              </Col>
              <Col md={5} className="p-0">
              <Card style={{ width: '34.6rem', height:'30rem', backgroundColor:'#E9F0E6', border:'none' }}>
                <img className="m-1"src={require('./images/panda.jpg').default} alt="panda image" style={{ width:'34.5rem', height:'30rem', borderRadius:'30%'}}></img>
              </Card>
              </Col>
          </Row>
          </div>
{/* ----------------------------------------------------------------------------second line--------------------------------           */}
          <div className="text-center p-2" Style={{maxWidth:'1400px'  }}>
          <h6 style={{ color:'#1ADB06' }}>zoo features</h6>
          <h2 style={{ color:'#094505',margin: '20px 300px',fontWeight:'800' }}>Parks where animals are kept so that people can look at them.
                </h2>
          </div>
{/* ---------------------------------------------------tri card----------------------------------------------------------------- */}
          <div className="tri-card" Style={{maxWidth:'1400px'  }}>
            <Row classname="justify-content-between" style={{margin:'20px 200px' }}>
              <Col bg="transparent" className="m-4 p-2 " md={3} style={{border:'none', borderRadius:'10px',  height:'250px'  }}>
                <FaPaw className="border  rounded-circle p-2 mt-3 bg-light"  style={{fontSize:'60px', color:'#1ADB06'}}/>
                <h2 className="pt-5 pl-2" style={{ color:'#094505',fontSize:'20px', fontWeight:'800' }}>Exotic</h2>
                <p className="text-success p-2" style={{ fontSize:'12px' }}>Urban and open-range zoos, safari parks are areas where tourists can drive their own car to see non-native wildlife</p>
                </Col>



              <Col  className="m-4 pt-2 pl-3 " md={3} style={{border:'none', borderRadius:'10px',  height:'250px', backgroundColor:'white' }}>
                <BsSun className="border  rounded-circle p-2 mt-3 "  style={{fontSize:'60px', color:'#1ADB06', backgroundColor:'#E9F0E6'}}/>
                <h2 className="pt-5 pl-2" style={{ color:'#094505',fontSize:'20px', fontWeight:'800' }}>Modern</h2>
                <p className="text-success p-2" style={{ fontSize:'12px' }}>Urban and open-range zoos, safari parks are areas where tourists can drive their own car to see non-native wildlife</p>
                </Col>



                <Col bg="transparent" className="m-4 pt-2 pl-4 " md={3} style={{border:'none', borderRadius:'10px',  height:'250px'  }}>
                <GiDrop className="border  rounded-circle p-2 mt-3 bg-light "  style={{fontSize:'60px', color:'#1ADB06'}}/>
                <h2 className="pt-5 pl-2" style={{ color:'#094505',fontSize:'20px', fontWeight:'800' }}>Popular</h2>
                <p className="text-success p-2" style={{ fontSize:'12px' }}>Urban and open-range zoos, safari parks are areas where tourists can drive their own car to see non-native wildlife</p>
                </Col>
            </Row>  
          </div>
          {/* ------------------------------------------------------------parrot-View--------------------------------------------------------------------------------- */}
          <div className="parrot-view" Style={{maxWidth:'1400px'  }}>
          <Row classname="justify-content-between" style={{marginTop:'100px' }}>
            <Col>
            <img src={require('./images/parrot.jpg').default} alt="panda image" style={{ width:'40rem', height:'35rem', borderRadius:'30%'}}></img>
            </Col>
            <Col className="ml-5 pl-5 mt-5 pt-5"  style={{ }}>
            <h6  className="pt-3" style={{ color:'#1ADB06' }}>zoo features</h6>
            <h1 style={{ color:'#133A04',fontWeight:'800',width:'350px' }}>Natural Habitats of Animals</h1>
            <p className="pt-3" style={{ color:'#094505',width:'350px' }}>
                  Larger than urban and open-range zoos, safari parks are 
                  areas where tourists can drive their own cars.
            </p>
            <p className="text-success pt-2" style={{ fontSize:'12px' }}>< BsCheck className="mr-2"/>Urban and open-range zoos</p>
            <p className="text-success" style={{ fontSize:'12px' }}>< BsCheck className="mr-2"/>Safari parks are areas</p>
            <p className="text-success" style={{ fontSize:'12px' }}>< BsCheck className="mr-2"/>where tourists can</p>
            <p className="text-success" style={{ fontSize:'12px' }}>Want to know more?<a className="ml-2 font-weight-bold" href="#" style={{ color:'#133A04' }} >Learn more.</a></p>
            </Col>
          </Row>
          </div>
          {/* ---------------------------------------------------------------live-------------------------------------------------------------------- */}
          <div className="live-view" Style={{maxWidth:'1400px'  }}>
            <Row classname="" style={{margin:'100px 200px 100px' }}>
              <Col className="text-center">
              <h6  className="pt-3" style={{ color:'#1ADB06' }}>Live Video</h6>
              <h1 style={{ color:'#133A04',fontWeight:'900',fontSize:'50px' }}>Watch Live Cam</h1>
              <p className='pt-3 text-break ' style={{ color:'#094505', fontWeight:'500'}}>
                  Attractions allow the animals more space than the small enclosures of <br/>traditional zoos.
              </p>
              </Col>
            </Row>
            <Row classname="justify-content-between" style={{margin:'0px 200px' }}>
              <Col md={7} >
              <div class="embed-responsive embed-responsive-16by9 bg-success"style={{ borderRadius:'30px',height:'500px'  }}>
                <iframe class="embed-responsive-item p-2" style={{ borderRadius:'30px' }}src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
              </div>
              </Col>
              <Col md={5}className='mt-2'>
                <Row className="p-3 mr-0 mb-5 bg-success border" style={{ borderRadius:'30px', width:'100%' }}>
                  
                  <GiMonkey className="border  rounded-circle p-2 mt-1 "  style={{fontSize:'60px', color:'#1ADB06', backgroundColor:'#E9F0E6'}}/>
                  <div className="pl-2 " style={{ color:'#E9F0E6' }}>
                    <h2 className="m-0">Monkey</h2>
                    <p className='m-0'>Popular zoo animal for kids</p>
                  </div>
              
                </Row>
                <Row className="p-3 mr-0 mb-5 bg-success border bg-white" style={{ borderRadius:'30px', width:'100%' }}>
                  
                  <GiTigerHead className="border  rounded-circle p-2 mt-1 "  style={{fontSize:'60px', color:'#1ADB06', backgroundColor:'#E9F0E6'}}/>
                  <div className="pl-2 "style={{ color:'#133A04' }}>
                    <h2 className="m-0">Tiger</h2>
                    <p className='m-0'>Popular zoo animal for kids</p>
                  </div>
              
                </Row>
                <Row className="p-3 mr-0 mb-5 bg-success border bg-white" style={{ borderRadius:'30px', width:'100%'}}>
                  
                  <GiElephantHead className="border  rounded-circle p-2 mt-1"  style={{fontSize:'60px', color:'#1ADB06', backgroundColor:'#E9F0E6'}}/>
                  <div className="pl-2 "style={{ color:'#133A04' }}>
                    <h2 className="m-0">Elephant</h2>
                    <p className='m-0'>Popular zoo animal for kids</p>
                  </div>
              
                </Row>
                <Row className="p-3 mr-0  bg-success border bg-white " style={{ borderRadius:'30px', width:'100%'}}>
                <IoIosArrowDropdown className=""  style={{fontSize:'20px', marginLeft:'150px'}}/>
                </Row>
              </Col>
            </Row>
          </div>
          {/* -----------------------------------------------------------tiger view------------------------------------------------------- */}
          <div className="tiger-view" Style={{maxWidth:'1400px'  }}>
            <Row classname="justify-content-between" style={{marginTop:'100px' }}>
              
              <Col className="ml-5 pl-5  pt-5"  style={{marginTop:'50px' }}>
                <h6  className="pt-3 mb-2" style={{ color:'#1ADB06' }}>Services</h6>
                <h1 style={{ color:'#133A04',fontWeight:'800',width:'350px' }}>Giving Animals More Space</h1>
                <p className="pt-3 mb-2" style={{ color:'#094505',width:'350px' }}>
                      Larger than urban and open-range zoos, safari parks are 
                      areas where tourists can drive their own cars.
                </p>
                <p className=" border-left border-success pl-3 mr-5 mr-2 mt-5 mb-5 text-success" style={{ fontSize:'12px' }}>Gangetic dolphins are found in the fresh waters of Narayani 
                  and Karnali rivers.<br/>The Himalayan region is also home to the 
                  elusive snow leopard and the red panda.<br/> Red panda, rarely seen
                  because of its shy nature, are found around the Langtang<br/> National
                </p>
                <p className="text-success mt-2" style={{ fontSize:'12px' }}>Want to know more?<a className="ml-2 font-weight-bold" href="#" style={{ color:'#133A04' }} >Learn more.</a></p>
              </Col>
              <Col>
              <img src={require('./images/tiger.jpg').default} alt="Tiger image" style={{ width:'40rem', height:'35rem', borderRadius:'30%'}}></img>
              </Col>
            </Row>
          </div>
          {/* ---------------------------------------------map--------------------------------------------------------------------- */}
          <div className="map-view" Style={{maxWidth:'1400px'  }}>
            <Row classname="" style={{margin:'100px 200px 50px' }}>
              <Col className="text-center">
              <h6  className="pt-3" style={{ color:'#1ADB06' }}>ZOO Map</h6>
              <h1 style={{ color:'#133A04',fontWeight:'900',fontSize:'50px' }}>Explore zoo map</h1>
              <p className='pt-3 text-break ' style={{ color:'#094505', fontWeight:'500'}}>
                  Attractions allow the animals more space than the small enclosures of <br/>traditional zoos.
              </p>
              </Col>
            </Row>
            <Row classname="" style={{margin:'20px 200px 20px' }}>
              <Col>
                <Card className="border border-rounded" style={{ backgroundColor:'#133A04', height:'25rem',borderRadius:'10%' }}>
                <img className="p-2" src={require('./images/map.jpg').default} alt="map image" style={{  height:'25rem', borderRadius:'10%'}}></img>
                </Card>
              </Col>
            </Row>
          </div>
          <Row classname="" style={{margin:'10px 250px 50px' }}>
            <Col>
              <Row className="">
                <Col  className="p-0" md={1}><h1 className="p-0" style={{ color:'#133A04',fontWeight:'800' }}>42</h1></Col>
                <Col className="pl-3" md={11}>
                <h5 className="pt-2" style={{ color:'#133A04',fontWeight:'800' }}>Animals</h5>
                <p className="pt-1 mb-2 text-success" style={{ color:'#094505',width:'350px',fontSize:'15px' }}>
                Larger than urban and open-range zoos, safari <br/>parks are 
                      areas where tourists can drive.
                </p>
                </Col>
              </Row>
            </Col>
            <Col className="pl-4">
              <Row className="">
                <Col  className="p-0" md={1}><h1 className="p-0" style={{ color:'#133A04',fontWeight:'800' }}>72</h1></Col>
                <Col className="pl-3" md={11}>
                <h5 className="pt-2" style={{ color:'#133A04',fontWeight:'800' }}>Successful</h5>
                <p className="pt-1 mb-2 text-success" style={{ color:'#094505',width:'350px',fontSize:'15px' }}>
                      Larger than urban and open-range zoos, safari <br/>parks are 
                      areas where tourists can drive.
                </p>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* ----------------------------------------------------------------------Gallery------------------------------------------ */}
          <div className="Gallery" Style={{maxWidth:'1400px'  }}>
            <Row classname="" style={{margin:'100px 200px 50px' }}>
              <Col className="">
              <h6  className="pt-2" style={{ color:'#1ADB06' }}>Gallery</h6>
              <h1 style={{ color:'#133A04',fontWeight:'800',fontSize:'50px' }}>Our Animals</h1>
              <p className='pt-2 text-break ' style={{ color:'#094505', fontWeight:'500'}}>
                  Attractions allow the animals more space than the small enclosures of <br/>traditional zoos.
              </p>
              </Col>
            </Row>
            <Row className="justify-content-between" style={{ margin:'20px 200px 0px' }}>
                <Col md={6}>
                  <Card style={{backgroundColor:'#133A04', height:'315px', borderRadius:'30px' }} >
                    <img className="p-2" src={require('./images/giraffe.jpg').default} alt="map image" style={{  height:'16rem', borderRadius:'30%'}}></img>
                    <Card.Body className="pl-4 pt-1">
                      <Card.Text>
                      <Row className=" mr-0 bg-transparent ">
                  
                        <GiMonkey className="border  rounded-circle p-2  "  style={{fontSize:'50px', color:'#1ADB06', backgroundColor:'#E9F0E6'}}/>
                        <div className="pl-2 " style={{ color:'#E9F0E6' }}>
                          <h4 className="mt-3">Giraffe</h4> 
                        </div>
                      </Row>
                      </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={3}>
                <Card  className="p-0" style={{backgroundColor:'#133A04', height:'315px', borderRadius:'30px' }} >
                    <img className=" p-2" src={require('./images/deer.jpg').default} alt="map image" style={{  height:'15rem', borderRadius:'30%'}}></img>
                    <Card.Body className="pl-2 pt-1">
                      <Card.Text>
                      <Row className=" m-0 bg-transparent ">
                  
                        <SiJohndeere className="border  rounded-circle p-2  "  style={{fontSize:'50px', color:'#1ADB06', backgroundColor:'#E9F0E6'}}/>
                        <div className="pl-2 " style={{ color:'#E9F0E6' }}>
                          <h4 className="mt-3">Giraffe</h4> 
                        </div>
                      </Row>
                      </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={3}>
                <Card  className="p-0" style={{backgroundColor:'#133A04', height:'315px', borderRadius:'30px' }} >
                    <img className=" p-2" src={require('./images/bengal-tiger.jpg').default} alt="map image" style={{  height:'15rem', borderRadius:'30%'}}></img>
                    <Card.Body className="pl-2 pt-1">
                      <Card.Text>
                      <Row className=" m-0 bg-transparent ">
                  
                        <GiTigerHead className="border  rounded-circle p-2  "  style={{fontSize:'50px', color:'#1ADB06', backgroundColor:'#E9F0E6'}}/>
                        <div className="pl-2 " style={{ color:'#E9F0E6' }}>
                          <h4 className="mt-3">Tiger</h4> 
                        </div>
                      </Row>
                      </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>





            <Row className="justify-content-between" style={{ margin:'20px 200px 0px' }}>
                
                <Col md={3}>
                <Card  className="p-0" style={{backgroundColor:'#133A04', height:'315px' }} >
                    <img className=" p-2" src={require('./images/elephant.jpg').default} alt="map image" style={{  height:'15rem', borderRadius:'30%'}}></img>
                    <Card.Body className="pl-2 pt-1">
                      <Card.Text>
                      <Row className=" m-0 bg-transparent ">
                  
                        <GiElephantHead className="border  rounded-circle p-2  "  style={{fontSize:'50px', color:'#1ADB06', backgroundColor:'#E9F0E6'}}/>
                        <div className="pl-2 " style={{ color:'#E9F0E6' }}>
                          <h4 className="mt-3">Giraffe</h4> 
                        </div>
                      </Row>
                      </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={6}>
                  <Card style={{backgroundColor:'#133A04', height:'315px', borderRadius:'30px' }} >
                    <img className="p-2" src={require('./images/rhino.jpg').default} alt="map image" style={{  height:'16rem', borderRadius:'30%'}}></img>
                    <Card.Body className="pl-4 pt-1">
                      <Card.Text>
                      <Row className=" mr-0 bg-transparent ">
                  
                        <GiRhinocerosHorn className="border  rounded-circle p-2  "  style={{fontSize:'50px', color:'#1ADB06', backgroundColor:'#E9F0E6'}}/>
                        <div className="pl-2 " style={{ color:'#E9F0E6' }}>
                          <h4 className="mt-3">Giraffe</h4> 
                        </div>
                      </Row>
                      </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={3}>
                <Card  className="p-0" style={{backgroundColor:'#133A04', height:'315px', borderRadius:'30px' }} >
                    <img className=" p-2" src={require('./images/monkey.jpg').default} alt="map image" style={{  height:'15rem', borderRadius:'30%'}}></img>
                    <Card.Body className="pl-2 pt-1">
                      <Card.Text>
                      <Row className=" m-0 bg-transparent ">
                  
                        <GiMonkey className="border  rounded-circle p-2  "  style={{fontSize:'50px', color:'#1ADB06', backgroundColor:'#E9F0E6'}}/>
                        <div className="pl-2 " style={{ color:'#E9F0E6' }}>
                          <h4 className="mt-3">Giraffe</h4> 
                        </div>
                      </Row>
                      </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
          </div>
          <div className="text-center">
          <p className="text-success mt-5" style={{ fontSize:'12px' }}>Want to know more?<a className="ml-2 font-weight-bold" href="#" style={{ color:'#133A04' }} >Learn more.</a></p>
          </div>


          {/* -------------------------------------------ticket--------------------------------------------------------- */}
          <div className="Ticket" Style={{maxWidth:'1400px'  }}>
            <Row classname="" style={{ backgroundColor:'#133A04' }}>
              <Col className="text-center">
              <h6  className="pt-2" style={{ color:'#E9F0E6' }}>Buy Ticket</h6>
              <h1 style={{ color:'#E9F0E6',fontWeight:'800',fontSize:'50px' }}>Goto Our Zoo</h1>
              <p className='pt-2 text-break ' style={{ color:'#E9F0E6', fontWeight:'500'}}>
                  Attractions allow the animals more space than the small enclosures of <br/>traditional zoos.
              </p>
              <Row className="justify-content-center align-items-center mb-5">
              <Button  variant="warning" style={{ borderRadius:'30px' }}>Get Ticket</Button>
              <Button className="m-2 bg-transparent border border-white"style={{ borderRadius:'30px' }}>Contact Us</Button>
              </Row>
              </Col>
            </Row>
          </div>
          {/* --------------------------------------------------------------events----------------------------------------------- */}
          <div className="Events" Style={{maxWidth:'1400px'  }}>
            <Row classname="" style={{margin:'100px 200px 00px' }}>
              <Col className="">
              <h6  className="pt-3" style={{ color:'#1ADB06' }}>Events</h6>
              <h1 style={{ color:'#133A04',fontWeight:'900',fontSize:'50px' }}>Events Schedule</h1>
              <p className='pt-3 text-break ' style={{ color:'#094505', fontWeight:'500'}}>
                  Attractions allow the animals more space than the small enclosures of <br/>traditional zoos.
              </p>
              </Col>
            </Row>
            <Row className=" bg-transparent justify-content-between" style={{margin:'10px 200px 00px' }}>
              <Col md={3}><img className="p-2" src={require('./images/dolphin.jpg').default} alt="map image" style={{ borderRadius:'25%', width:'200px'}}></img></Col>
              <Col md={7}><div><h2 style={{ color:'#133A04',fontWeight:'800',fontSize:'35px' }}>Eiusmoid Tempor</h2>
                <p className="text-success" style={{ color:'#094505',width:'350px',fontSize:'15px' }}> Larger than urban and open-range zoos, safari parks are  my name is not so good but it is pleasent
                      areas where tourists can drive.</p></div>      
              </Col>
                      
              <Col className="mt-3"md={2}><div><h1 className="ml-5" style={{ color:'#133A04',fontWeight:'800',fontSize:'35px' }}>24</h1><h4 className="ml-5">April</h4></div></Col>

            </Row>

            <Row className=" bg-white justify-content-between" style={{margin:'10px 200px 00px', borderRadius:'30px' }}>
              <Col md={3}><img className="p-2" src={require('./images/parrots.jpg').default} alt="map image" style={{ borderRadius:'25%', width:'200px'}}></img></Col>
              <Col md={7}><div><h2 style={{ color:'#133A04',fontWeight:'800',fontSize:'35px' }}>Eiusmoid Tempor</h2>
                <p className="text-success" style={{ color:'#094505',width:'350px',fontSize:'15px' }}> Larger than urban and open-range zoos, safari parks are  my name is not so good but it is pleasent
                      areas where tourists can drive.</p></div>      
              </Col>
                      
              <Col className="mt-3" md={2}><div><h1 className="ml-5"style={{ color:'#133A04',fontWeight:'800',fontSize:'35px' }}>12</h1><h4 className="ml-5">april</h4></div></Col>

            </Row>


            <Row className=" bg-transparent justify-content-between" style={{margin:'10px 200px 00px' }}>
              <Col md={3}><img className="p-2" src={require('./images/love.jpg').default} alt="map image" style={{ borderRadius:'25%', width:'200px'}}></img></Col>
              <Col md={7}><div><h2 style={{ color:'#133A04',fontWeight:'800',fontSize:'35px' }}>Eiusmoid Tempor</h2>
                <p className="text-success" style={{ color:'#094505',width:'350px',fontSize:'15px' }}> Larger than urban and open-range zoos, safari parks are  my name is not so good but it is pleasent
                      areas where tourists can drive.</p></div>      
              </Col>
                      
              <Col className="mt-3" md={2}><div><h1 className="ml-5" style={{ color:'#133A04',fontWeight:'800',fontSize:'35px' }}>01</h1><h4 className="ml-5">may</h4></div></Col>

            </Row>
            <div className="text-center">
              <p className="text-success mt-5" style={{ fontSize:'12px' }}>Want to know more?<a className="ml-2 font-weight-bold" href="#" style={{ color:'#133A04' }} >Learn more.</a></p>
            </div> 
          </div>

            {/* ------------------------------------------------------------------tri------------------------------------- */}
            <div className="Gallery" Style={{maxWidth:'1400px'  }}>
              <Row classname="" style={{margin:'100px 200px 50px' }}>
                <Col className="text-center">
                <h6  className="pt-2" style={{ color:'#1ADB06' }}>Testimonials</h6>
                <h1 style={{ color:'#133A04',fontWeight:'800',fontSize:'50px' }}>What people say</h1>
                <p className='pt-2 text-break ' style={{ color:'#094505', fontWeight:'500'}}>
                    Attractions allow the animals more space than the small enclosures of <br/>traditional zoos.
                </p>
                </Col>
              </Row>

            <div className="tri-card" Style={{maxWidth:'1400px'  }}>
              <Row classname="justify-content-between" style={{margin:'20px 200px' }}>
                <Col bg="transparent" className="m-4 p-2 " md={3} style={{border:'none', borderRadius:'10px',  height:'250px'  }}>
                  {/* <FaPaw className="border  rounded-circle p-2 mt-3 bg-light"  style={{fontSize:'60px', color:'#1ADB06'}}/> */}
                  <img className="  rounded-circle  " src={require('./images/1st.jpg').default} alt=" image" style={{ height:'90px',width:'90px',color:'#1ADB06'}}></img>
                  
                  <p className="text-success p-2" style={{ fontSize:'12px' }}>Urban and open-range zoos, safari parks are areas where tourists can drive their own car to see non-native wildlife</p>
                  <h2 className=" pl-2" style={{ color:'#094505',fontSize:'20px', fontWeight:'800' }}>SANTOSH</h2>
                  </Col>



                  <Col  className="m-4 p-2 bg-white" md={3} style={{border:'none', borderRadius:'10px',  height:'250px'  }}>
                  {/* <FaPaw className="border  rounded-circle p-2 mt-3 bg-light"  style={{fontSize:'60px', color:'#1ADB06'}}/> */}
                  <img className="  rounded-circle  " src={require('./images/3rd.jpg').default} alt=" image" style={{ height:'90px',width:'90px',color:'#1ADB06'}}></img>
                  
                  <p className="text-success p-2" style={{ fontSize:'12px' }}>Urban and open-range zoos, safari parks are areas where tourists can drive their own car to see non-native wildlife</p>
                  <h2 className=" pl-2" style={{ color:'#094505',fontSize:'20px', fontWeight:'800' }}>BIBEK</h2>
                  </Col>



                  <Col bg="transparent" className="m-4 p-2 " md={3} style={{border:'none', borderRadius:'10px',  height:'250px'  }}>
                  {/* <FaPaw className="border  rounded-circle p-2 mt-3 bg-light"  style={{fontSize:'60px', color:'#1ADB06'}}/> */}
                  <img className="  rounded-circle  " src={require('./images/2nd.jpg').default} alt=" image" style={{ height:'90px',width:'90px',color:'#1ADB06'}}></img>
                  
                  <p className="text-success p-2" style={{ fontSize:'12px' }}>Urban and open-range zoos, safari parks are areas where tourists can drive their own car to see non-native wildlife</p>
                  <h2 className=" pl-2" style={{ color:'#094505',fontSize:'20px', fontWeight:'800' }}>ARJUN</h2>
                  </Col>
              </Row>  
            </div>
            <div className="text-center">
              <p className="text-success mt-5" style={{ fontSize:'12px' }}>Want to know more?<a className="ml-2 font-weight-bold" href="#" style={{ color:'#133A04' }} >Learn more.</a></p>
            </div>
          </div>
          {/* ---------------------------------------------pricing---------------------------------------------------------- */}
          <div className="pricing-view" Style={{maxWidth:'1400px'  }}>
            <Row classname="justify-content-between" style={{margin:'100px 200px 50px' }}>
              <Col className="ml-5 pl-5 ">
                <div className=" " style={{ borderRadius:'50%', height: '349px',backgroundColor:'#A4DDAA', position:'relative',top:'-9px',left:'-63px' }}></div>
                <div className="bg-white" style={{ position:'absolute', height:'290px', width:'290px', borderRadius:'30px', top:'20px', left:'20px' }} >
                    <h1  className="m-2 p-3"style={{ color:'#133A04',fontWeight:'800',width:'350px' }}>$29</h1>
                    <h5 className="pl-4 pt-0" style={{ color:'#133A04',fontWeight:'800' }}>Successful</h5>
                    <p className="text-success pt-2 pl-2" style={{ fontSize:'12px' }}>< BsCheck className="mr-2"/>Urban and open-range zoos</p>
                    <p className="text-success pl-2" style={{ fontSize:'12px' }}>< BsCheck className="mr-2"/>Safari parks are areas</p>
                    <p className="text-success pl-2" style={{ fontSize:'12px' }}>< BsCheck className="mr-2"/>where tourists can</p>
                    <Row className="justify-content-center align-items-center mb-5">
                      <Button variant="success pl-5 pr-5" style={{ borderRadius:'30px' }}>BUY NOW</Button>
                    </Row>
                </div>
               </Col> 
              <Col className="ml-5 pl-5 "  style={{ }}>
              <h6  className="" style={{ color:'#1ADB06' }}>Pricing</h6>
              <h1 style={{ color:'#133A04',fontWeight:'800',width:'350px' }}>Buy Tickets Right Now</h1>
              <p className="pt-3" style={{ color:'#094505',width:'350px' }}>
                    Larger than urban and open-range zoos, safari parks are 
                    areas where tourists can drive their own cars.
              </p>
              <div className="">
                <p className="text-success mt-5" style={{ fontSize:'12px' }}>Want to know more?<a className="ml-2 font-weight-bold" href="#" style={{ color:'#133A04' }} >Learn more.</a></p>
              </div> 
              </Col>
            </Row>
            
          </div>
          {/* -------------------------------------------------------instagram--------------------------------------------------------------- */}
          <div className="instagram" Style={{maxWidth:'1400px'  }}>
              <Row classname="justify-content-between" style={{margin:'100px 200px 50px' }}>
                <Col md={4} className="">
                <h6  className="pt-2" style={{ color:'#1ADB06' }}>Instagram</h6>
                <p className="text-success" style={{ color:'#094505',fontSize:'15px' }}> Larger than urban and open-range zoos, safari parks are  my name is not so good but it is .
                </p>
                <div className="">
                <p className="text-success mt-2" style={{ fontSize:'12px' }}>Want to know more?<a className="ml-2 font-weight-bold" href="#" style={{ color:'#133A04' }} >Learn more.</a></p>
                </div>
                </Col>
                <Col className="" md={2}> <img className="p-0" src={require('./images/insta1.jpg').default} alt=" image" style={{ height:'140px', width:'100%' , borderRadius:'20px'}}></img></Col>
                <Col className="" md={2}> <img className="p-0" src={require('./images/insta2.jpg').default} alt=" image" style={{ height:'140px', width:'100%' , borderRadius:'20px'}}></img></Col>
                <Col className="" md={2}> <img className="p-0" src={require('./images/insta3.jpg').default} alt=" image" style={{ height:'140px', width:'100%' , borderRadius:'20px'}}></img></Col>
                <Col className="" md={2}> <img className="p-0" src={require('./images/insta4.jpg').default} alt=" image" style={{ height:'140px', width:'100%' , borderRadius:'20px'}}></img></Col>
              </Row>
          </div>
          {/* ------------------------------------------------------footer--------------------------------------------------- */}
          <div className="Gallery" Style={{maxWidth:'1400px'  }}>
              <Row classname="" style={{margin:'100px 200px 50px' }}>
                <Col md={3}className="">
                <h1 style={{ color:'#133A04',fontWeight:'800',fontSize:'30px' }}>ZOO</h1>
                </Col>
                <Col md={3}>
                    <h5 className="title " style={{ color:'#133A04' }}>Menu</h5>
                    <ul className="p-0">
                      <li className="list-unstyled">
                        <a style={{color:'#133A04'}}href="#!">About</a>
                      </li>
                      <li className="list-unstyled">
                        <a style={{color:'#133A04'}}href="#!">Ticket</a>
                      </li>
                      <li className="list-unstyled">
                        <a style={{color:'#133A04'}}href="#!">Blog</a>
                      </li>
                      <li className="list-unstyled">
                        <a style={{color:'#133A04'}}href="#!">Contact</a>
                      </li>
                    </ul>
                </Col>
                <Col md={3}>
                    <h5 className="title " style={{ color:'#133A04' }}>Animal</h5>
                    <ul className="p-0">
                      <li className="list-unstyled">
                        <a style={{color:'#133A04'}}href="#!">Giraffe</a>
                      </li>
                      <li className="list-unstyled">
                        <a style={{color:'#133A04'}}href="#!">Monkey</a>
                      </li>
                      <li className="list-unstyled">
                        <a style={{color:'#133A04'}}href="#!">Lion</a>
                      </li>
                      <li className="list-unstyled">
                        <a style={{color:'#133A04'}}href="#!">See All</a>
                      </li>
                    </ul>
                </Col>
                <Col md={3}>
                  <Row className="align-items-right ml-auto">
                  <a className="ml-auto" href=""><IoLogoFacebook style={{color:'#133A04', fontSize:'40px'}}/></a>
                  <a href=""><AiFillTwitterCircle style={{color:'#133A04', fontSize:'40px'}}/></a>
                  <a href=""><AiFillInstagram style={{color:'#133A04', fontSize:'40px'}}/></a>
                  </Row>
                </Col>
              </Row>
          </div>
        </Container>

      
          
        
      
      

    )
  }
}
