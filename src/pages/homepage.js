import React from "react";
import NavBar from "./navbar.js";
import NavBarMobile from './navbarmobile'
import Footer from './footer.js'
import FooterMobile from './mobilefooter.js'
import Link from "./truelink.js"
import Fruits from "../assets/fruits.jpeg"
import Fader from './fadein.js'
import './stylin.css'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <Fader>
        <NavBar bold={[true, false, false, false]} />
        <div className="topbit" style = {{ backgroundImage: `url(${Fruits})`}}>
          <div className="center">
            <div className="truecenter">
              <div className="fruit">
                <div>Saving the world,</div>
                <div>one fruit at a time!</div>
              </div>
              <Link className="roundedbutton" href="/giving_back">Become a Volunteer!</Link>
            </div>
          </div>
        </div>
        <div className="textcontainer">
          <Link className="grow secondbit" href='/about'>
            <div className="secondtext">
              <div className="secondtitle">
                The Problem
              </div>
              <div className='seconddivider'></div>
              <div className="secondlargetext">
                <div className="secondfirstbit">Every single year in the US, millions and millions of pounds of fruits and vegetables are wasted due to customer's overpurchasing.</div>
                <div className="secondsecondbit">Factors such as over purchasing, inaccurate portion sizes, and even restaurants all contribute to the major loss in food. Not only does it affect us humans, but the environmental impact from this enormous waste of food is devastating.</div>
              </div>
            </div>
          </Link>
          <Link className='grow thirdbit' href='/giving_back'>
            <div className="thirdtext">
              <div className="thirdtitle">
                Our Solution
              </div>
              <div className='thirddivider'></div>
              <div className="thirdlargetext">
                <div className="thirdfirstbit">Our mission is to reduce this waste by using the power of our communities, coming together to save fruits and vegetables that otherwise would be wasted.</div>
                <div className="thirdsecondbit">Why trash our environment even more when we can use what is available to use for the better? Join us in our effort to reduce hunger, help the community, and save our world!</div>
              </div>
            </div>
          </Link>
        </div>
        <hr style={{
          margin: 0,
          backgroundColor: '#CAE2BC',
          border: '1px dashed #547048'
        }}></hr>
        <Footer active={[false, true, true, true]} />
      </Fader>
    );
  }
}

class HomeMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <Fader>
        <NavBarMobile bold={[true, false, false, false]} />
        <div className="topbit" style = {{ backgroundImage: `url(${Fruits})`}}>
          <div className="center">
            <div className="truecenter">
              <div className="fruit">
                <div style={{ textAlign: 'center', fontSize: '48px' }}>Saving the world,</div>
                <div style={{ textAlign: 'center', fontSize: '48px' }}>one fruit at a time!</div>
              </div>
              <Link className="roundedbuttonmobile" href="/giving_back">
                <div style={{ fontSize: '24px', paddingTop: "10px", paddingBottom: '10px' }}>Become a Volunteer!</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="textcontainer">
          <Link className="secondbit" href='/about'>
            <div className="secondtext">
              <div className="secondtitle">
                The Problem
              </div>
              <div className='seconddividermobile'></div>
              <div className="secondfirstbitmobile">Every single year in the US, millions and millions of pounds of fruits and vegetables are wasted due to customer's overpurchasing.</div>
              <div className="secondsecondbitmobile">Factors such as over purchasing, inaccurate portion sizes, and even restaurants all contribute to the major loss in food. Not only does it affect us humans, but the environmental impact from this enormous waste of food is devastating.</div>
            </div>
          </Link>
          <Link className="secondbit" href='/giving_back'>
            <div className="secondtext" style={{ color: '#547048', backgroundColor: '#E3E5DC'}}>
              <div className="secondtitle">
                Our Solution
              </div>
              <div className='seconddividermobile' style={{ backgroundColor: '#547048'}}></div>
              <div className="secondfirstbitmobile">Our mission is to reduce this waste by using the power of our communities, coming together to save fruits and vegetables that otherwise would be wasted.</div>
              <div className="secondsecondbitmobile">Why trash our environment even more when we can use what is available to use for the better? Join us in our effort to reduce hunger, help the community, and save our world!</div>
            </div>
          </Link>
        </div>
        <hr style={{
          margin: 0,
          backgroundColor: '#CAE2BC',
          border: '1px dashed #547048'
        }}></hr>
        <FooterMobile active={[false, true, true, true]} />
      </Fader>
    );
  }
}


export {Home, HomeMobile}