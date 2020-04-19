import React from 'react';
import '../components/App/App.css';
import Masthead from '../components/MastHead/MastHead.js';
import '@patternfly/react-core/dist/styles/base.css';
import {
  Text
} from '@patternfly/react-core';
import Footer from "../components/Footer/footer.js"
import ClubInfo from "../components/ClubInfo/ClubInfo.js"

class clubInfoPage extends React.Component {
  render() {
    const header = {
      height:"60px",
      width: "302px",
    }
    console.log(this.props)
    
    return (
      <div>
        <Masthead></Masthead>
        <ClubInfo props={this.props}></ClubInfo>
        <Footer></Footer>
      </div>
    );
  }
}

export default clubInfoPage;

