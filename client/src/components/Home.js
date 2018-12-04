import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Icon, Segment } from 'semantic-ui-react';
import '../assets/css/main.css'
import ApplicationForm from './ApplicationForm';
import pic01 from '../assets/css/images/pic01.jpg'
import pic02 from '../assets/css/images/pic02.jpg'
import pic03 from '../assets/css/images/pic03.jpg'
import pic04 from '../assets/css/images/pic04.jpg'
import pic05 from '../assets/css/images/pic05.jpg'
import pic06 from '../assets/css/images/pic06.jpg'
import pic07 from '../assets/css/images/pic07.jpg'
import pic08 from '../assets/css/images/pic08.jpg'
import pic09 from '../assets/css/images/pic09.jpg'

class Home extends Component {
  render() {
    return (
      <div>
			<section id="banner">
          <div className="inner">
            <div className="content">
              <h2>Diversified Financial Services</h2>
              <p>The way home buying should be.</p>
            </div>
            <ul className="actions stacked">
              <li><ApplicationForm /></li>
              <li><a href="#three" className="button major">Learn More About Us</a></li>
            </ul>
          </div>
        </section>

			{/* // <section id="one" className="wrapper style1 split">
      //     <div className="inner">
      //       <div className="content">
      //         <h2>Diversified Financial Services</h2>
      //         <p>Offering the MOST COMPETITIVE  and INNOVATIVE home mortgage loans for home purchase and refinance.   “Experience you can count on...”</p>
      //       </div>
      //       <div className="image-circles">
      //         <div className="images">
      //           <span className="image"><img src={pic01} alt="" /></span>
      //           <span className="image"><img src={pic02} alt="" /></span>
      //         </div>
      //         <div className="images">
      //           <span className="image"><img src={pic03} alt="" /></span>
      //           <span className="image"><img src={pic04} alt="" /></span>
      //         </div>
      //       </div>
      //     </div>
      //   </section> */}
        <section id="three" className="wrapper style1">
          <div className="inner">
            <div className="spotlights">
              <section>
                <span className="image"><img src={pic05} alt="" /></span>
                <div className="content">
                  <Segment basic textAlign='center'>
                    <h2>Our Story</h2>
                    <p>Offering the MOST COMPETITIVE  and INNOVATIVE home mortgage loans for home purchase and refinance.   “Experience you can count on...”</p>
                  </Segment>
                </div>
              </section>
              <section>
                <span className="image"><img src={pic06} alt="" /></span>
                <div className="content">
                  <Segment basic textAlign='center'>
                    <h2>About Scott Millich</h2>
                    <p>Donec elementum odio ut suscipit congue. Fusce magna mattis vel fermentum, ultricies et velit. Suspendisse viverra, ante in eleifend vulputate, lacus lorem pretium ligula, tincidunt posuere sapien neque a augue. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
                  </Segment>
                </div>
              </section>
              <section>
                <span className="image imagesmall"><img src={pic07} alt="" /></span>
                <div className="content">
                  <Segment basic textAlign='center'>
                    <h2>Awards and Mentions</h2>
                    <p>Donec elementum odio ut suscipit congue. Fusce magna mattis vel fermentum, ultricies et velit. Suspendisse viverra, ante in eleifend vulputate, lacus lorem pretium ligula, tincidunt posuere sapien neque a augue. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
                  </Segment>
                </div>
              </section>
            </div>
          </div>
        </section>

			<section id="two" className="wrapper style2">
          <div className="inner">
            <header className="major">
              <h2>Reviews and Social Media</h2>
              <p>Join our community and hear what others have to say.</p>
            </header>
            <div className="features">
              <section>
                {/* <span><Icon name='edit outline' size='large' /></span> */}
                  <div className="fb-post" data-href="https://www.facebook.com/tuffersowell/posts/10211626520609570" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/tuffersowell/posts/10211626520609570" className="fb-xfbml-parse-ignore"><p>Scott was truly amazing to work with; from looking for a home for over a year to signing all the closing documents and...</p>Posted by <a href="https://www.facebook.com/tuffersowell">Chris Tuffer Sowell</a> on&nbsp;<a href="https://www.facebook.com/tuffersowell/posts/10211626520609570">Thursday, September 20, 2018</a></blockquote></div>
              </section>
              <section>
                {/* <span><Icon name='edit outline' size='large' /></span> */}
                <div className="fb-post" data-href="https://www.facebook.com/jordan.riley.7545/posts/10160399687610567:0" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/jordan.riley.7545/posts/10160399687610567:0" className="fb-xfbml-parse-ignore"><p>Been living in our home for over six months, and we often think how great it was to work with Scott.  He saved us...</p>Posted by <a href="#" role="button">Jordan Riley</a> on&nbsp;<a href="https://www.facebook.com/jordan.riley.7545/posts/10160399687610567:0">Tuesday, June 26, 2018</a></blockquote></div>
              </section>
              <section>
                {/* <span><Icon name='edit outline' size='large' /></span> */}
                <div className="fb-post" data-href="https://www.facebook.com/gotyourbackgary/posts/10212635744395101" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/gotyourbackgary/posts/10212635744395101" className="fb-xfbml-parse-ignore"><p>Scott is as good as he is honest! Great choice for a lending consultant. GMac,</p>Posted by <a href="#" role="button">Gary McDonald</a> on&nbsp;<a href="https://www.facebook.com/gotyourbackgary/posts/10212635744395101">Saturday, August 11, 2018</a></blockquote></div>
              </section>
            </div>
            <footer className="major">
              <ul className="actions special">
                <li><a href="https://www.facebook.com/sjmhomeloans/" className="button FButton"><Icon name='facebook' />Facebook</a></li>
              </ul>
            </footer>
          </div>
        </section>

			<section id="four" className="wrapper style2 special">
          <div className="inner">
            <header>
              <h2>Fill Out An Application Today</h2>
              {/* <p>Scott will contact you after reviewing your information.</p> */}
            </header>
            <ul className="actions special">
              <li><ApplicationForm /></li>
            </ul>
          </div>
        </section>

			<footer id="footer">
          <div className="inner">
            <ul className="icons">
              <li><a href="https://www.facebook.com/sjmhomeloans/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="https://www.linkedin.com/in/scott-millich-312a6019/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="contact">
              <li>11639 South 700 East #200</li>
              <li>Draper, UT 84020</li>
              <li>(801) 995-9047</li>
            </ul>
            <ul className="links">
              <li><Link to='/leads'>Manage</Link></li>
            </ul>
            <p className="copyright">&copy; Diversified Financial Services, Inc. © 2018 All Rights Reserved</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(Home);
