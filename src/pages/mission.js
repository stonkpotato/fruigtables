import React from "react";
import NavBar from "./navbar.js";
import Footer from './footer.js'
import Fader from './fadein.js'
import {BarChart, CartesianGrid, XAxis, YAxis, Bar, Cell, ResponsiveContainer} from 'recharts';
import './aboutstyle.css';
import Carousel from './carousel'
import Card from './card.js'
import HeaderMobile from './navbarmobile'
import FooterMobile from './mobilefooter.js'
import Apple from '../assets/apple.png'
import Tomato from '../assets/tomato.png'
import Banana from '../assets/banana.png'
import Carrot from '../assets/carrot.png'
import Potato from '../assets/potato.png'
import CarouselBasic from 'nuka-carousel';
import Right from '../assets/right.png'
import Left from '../assets/left.png'

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../assets/missioncaro', false, /\.(png|jpe?g|svg)$/));
console.log(images)

class Mission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardslist: [{name: 'Apples', p: 33, fill: '#ff0800', image: Apple}, {name: 'Tomatoes', p: 31, fill: '#C7372F', image: Tomato}, {name: 'Bananas', p: 35, fill: '#ffe135', image: Banana}, {name: 'Carrots', p: 25, fill: '#F88017', image: Carrot}, {name: 'Potatoes', p: 50, fill: '#b79268', image: Potato}],
      focused: null,
      mouse: true
    };
  }

  hextorgb(hex) {
    hex.splice(0, 1);
    var aRgbHex = hex.match(/.{1,2}/g);
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
  }

  render() {
    return (
      <Fader>
        <NavBar bold={[false, true, false, false]} />
        <div className="abouttopbit" style = {{ backgroundColor: '#547048'}}>
          <div className="center">
            <div className="truecenter">
              <div className="aboutfruit">
                <div style={{ fontSize: '48px' }}>Our mission is to help reduce the amount of produce waste in today's world.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="abouttextcontainer">
          <div className="aboutsecondbit">
            <div className="aboutsecondtext">
              <div className="aboutsecondtitle">
                The Problem
              </div>
              <div className='whyyyyy'>
                <div className='aboutseconddivider'></div>
              </div>
              <div className='chartcontainer'>
                <div className="padded">
                  <ResponsiveContainer width='99%' aspect={1.5}>
                    <BarChart
                      margin={{bottom: 10, left: 5}}
                      data={this.state.cardslist}
                      className='nofade'
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" label={{ value: 'Various Food Items', offset: -10, position: 'insideBottom', style: {fill: '#547048'} }} height={40} style={{fill: '#547048'}}/>
                      <YAxis label={{ value: 'Percent Wasted', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#547048' }}} style={{fill: '#547048'}}/>
                      <Bar dataKey="p">
                        {this.state.cardslist.map(entry => (
                          <Cell
                            fill={entry.fill}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>  
                </div>
                <div className='chartdivpad' style={{ height: '50%', width: 45 }}>
                  <div className="chartdivider" style={{ height: '100%', width: 5 }} />
                </div>
                <div className='otherpadded'>
                  <div className="aboutsecondinformation">
                    There is a lot of waste in the world.
                  </div>
                  <div className="aboutsecondinformationsmall">
                    As you can see from the diagram at the right, almost a third of all produce is wasted in households themselves; this is a lot of unnecessary waste, which could be reformed to food for many more people.
                  </div>
                </div>
              </div>
              <div style={{ paddingBottom: "80px" }}></div>
              {/* <div className='chartcontainer'>
                <div className='otherpadded'>
                  <div className="aboutsecondinformation">
                    There is a lot of waste in the world.
                  </div>
                  <div className="aboutsecondinformationsmall">
                    As you can see from the diagram at the right, almost a third of all produce is wasted in households themselves; this is a lot of unnecessary waste, which could be reformed to food for many more people.
                  </div>
                </div>
                <div className='chartdivpad'>
                  <div className="chartdivider" />
                </div>
                <div className="padded">
                  <ResponsiveContainer width='99%' aspect={1.5}>
                    <BarChart
                      margin={{bottom: 10, left: 5}}
                      data={this.state.cardslist}
                      className='nofade'
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" label={{ value: 'Various Food Items', offset: -10, position: 'insideBottom', style: {fill: '#547048'} }} height={40} style={{fill: '#547048'}}/>
                      <YAxis label={{ value: 'Percent Wasted', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#547048' }}} style={{fill: '#547048'}}/>
                      <Bar dataKey="p">
                        {this.state.cardslist.map((entry, index) => (
                          <Cell
                            fill={entry.fill}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>  
                </div>
              </div>       */}
            </div>
          </div>
          <div className='aboutthirdbit'>
            <div className="thirdtext">
              <div className="thirdtitle">
                Our Solution
              </div>
              <div className='thirddivider'></div>
              <div className="thirdlargetext">
                <div className="thirdfirstbit">Our mission is to reduce this waste by using the power of our communities, coming together to save fruits and vegetables that otherwise would be wasted.</div>
                <div style={{ padding: "30px"}}>
                  <Carousel images={images}/>
                </div>
                <div className="thirdsecondbit">Why trash our environment even more when we can use what is available to use for the better? Join us in our effort to reduce hunger, help the community, and save our world!</div>
              </div>
            </div>
          </div>
        </div>
        <hr style={{
          margin: 0,
          backgroundColor: '#CAE2BC',
          border: '1px dashed #547048'
        }}></hr>
        <Footer active={[true, false, true, true]} />
      </Fader>
    );
  }
}

const CardCarousel = (props) => {
  const slides = props.cardslist.map((thing, index) => (
    <Card image={thing['image']} heightp={100-thing['p']} percent={thing['p']} fruit={thing['name']} key={index} />
  ))
  return (
    <CarouselBasic 
      wrapAround={true}
      renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
        <button onClick={previousSlide} disabled={previousDisabled} style={{ border: 'none', background: 'transparent' }}>
          <img src={Left} style={{ width: 60, height: 30, paddingLeft: 30 }} />
        </button>
      )}
      renderCenterRightControls={({ nextDisabled, nextSlide }) => (
        <button onClick={nextSlide} disabled={nextDisabled} style={{ border: 'none', background: 'transparent' }}>
          <img src={Right} style={{ width: 60, height: 30, paddingRight: 30 }} />
        </button>
      )}
    >
      {slides}
    </CarouselBasic>
  );
}

class MissionMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardslist: [{name: 'Apples', p: 33, fill: '#ff0800', image: Apple}, {name: 'Tomatoes', p: 31, fill: '#C7372F', image: Tomato}, {name: 'Bananas', p: 35, fill: '#ffe135', image: Banana}, {name: 'Carrots', p: 25, fill: '#F88017', image: Carrot}, {name: 'Potatoes', p: 50, fill: '#b79268', image: Potato}],
      focused: null,
      mouse: true
    };
  }

  hextorgb(hex) {
    hex.splice(0, 1);
    var aRgbHex = hex.match(/.{1,2}/g);
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
  }

  render() {
    return (
      <Fader>
        <HeaderMobile bold={[false, true, false, false]} />
        <div className="abouttopbit" style = {{ backgroundColor: '#547048'}}>
          <div className="center">
            <div className="truecenter" style={{ padding: 30 }}>
              <div className="aboutfruit" style={{ width: '100%' }}>
                <div style={{ fontSize: '40px' }}>Our mission is to help reduce the amount of produce waste in today's world.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="abouttextcontainer">
          <div className="aboutsecondbit" style={{ width: '100%' }}>
            <div className="aboutsecondtext">
              <div className="aboutsecondtitle" style={{ textAlign: 'center', fontSize: '40px', paddingBottom: 30 }}>
                The Problem
              </div>
              <div className='whyyyyy'>
                <div className='aboutseconddivider' style={{ width: '50%' }}></div>
              </div>
              <div className='chartcontainer' style={{ flexDirection: 'column' }}>
                <div style={{ width: '120%' }}>
                  <CardCarousel cardslist={this.state.cardslist} />
                </div>
                <div className='chartdivpad' style={{ paddingLeft: 0, paddingRight: 0, width: '30%', paddingTop: 30, paddingBottom: 30 }}>
                  <div className="chartdivider" style={{ height: 5, width: '100%' }}/>
                </div>
                <div className='otherpadded'>
                  <div className="aboutsecondinformation">
                    There is a lot of waste in the world.
                  </div>
                  <div className="aboutsecondinformationsmall">
                    As you can see from the information above, almost a third of all produce is wasted in households themselves; this is a lot of unnecessary waste, which could be reformed to food for many more people.
                  </div>
                </div>
              </div>
              {/* <div className='chartcontainer'>
                <div className='otherpadded'>
                  <div className="aboutsecondinformation">
                    There is a lot of waste in the world.
                  </div>
                  <div className="aboutsecondinformationsmall">
                    As you can see from the diagram at the right, almost a third of all produce is wasted in households themselves; this is a lot of unnecessary waste, which could be reformed to food for many more people.
                  </div>
                </div>
                <div className='chartdivpad'>
                  <div className="chartdivider" />
                </div>
                <div className="padded">
                  <ResponsiveContainer width='99%' aspect={1.5}>
                    <BarChart
                      margin={{bottom: 10, left: 5}}
                      data={this.state.cardslist}
                      className='nofade'
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" label={{ value: 'Various Food Items', offset: -10, position: 'insideBottom', style: {fill: '#547048'} }} height={40} style={{fill: '#547048'}}/>
                      <YAxis label={{ value: 'Percent Wasted', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#547048' }}} style={{fill: '#547048'}}/>
                      <Bar dataKey="p">
                        {this.state.cardslist.map((entry, index) => (
                          <Cell
                            fill={entry.fill}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>  
                </div>
              </div>       */}
            </div>
          </div>
          <div className='aboutthirdbit'>
            <div className="thirdtext">
              <div className="thirdtitle" style={{ textAlign: 'center' }}>
                Our Solution
              </div>
              <div className='thirddivider' style={{ width: '20%' }}></div>
              <div className="thirdlargetext" style={{ justifyContent: 'center' }}>
                <div className="thirdfirstbit" style={{ justifyContent: 'center', width: '110%' }}>Our mission is to reduce this waste by using the power of our communities, coming together to save fruits and vegetables that otherwise would be wasted.</div>
                <div className="thirdsecondbit" style={{ justifyContent: 'center', width: '100%' }}>Why trash our environment even more when we can use what is available to use for the better? Join us in our effort to reduce hunger, help the community, and save our world!</div>
                <div style={{ paddingTop: 30, paddingBottom: 30, width: '150%'}}>
                  <Carousel images={images}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style={{
          margin: 0,
          backgroundColor: '#CAE2BC',
          border: '1px dashed #547048'
        }}></hr>
        <FooterMobile active={[true, false, true, true]} />
      </Fader>
    );
  }
}

export { Mission, MissionMobile };