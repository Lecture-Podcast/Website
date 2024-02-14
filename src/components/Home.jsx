// import { testimonial } from "../data/data";

import logo from "../img/lplogo.png";
import Rectangle from "../img/Rectangle 18.png";
import Experienced from "../img/Experienced Educators.png";
import Flexible from "../img/Flexible learning.png";
import Personalized from "../img/Personalized interface.png";
import Accessibility from "../img/Accessibility.png";
import Group from "../img/Group 59.png";
import Improve from "../img/Improve Better Softw.png";
import creator from "../img/Content creator img.png";
import Learning from "../img/Learning img.png";
import Teaching from "../img/Teaching img.png";
import check from "../img/check-circle.png";
import vid from "../img/Video.png";
import quote from "../img/bxs_quote-left.png";
import star from "../img/ic_round-star.png";
import Ellipse from "../img/Ellipse 1 (1).png";
import person1 from "../assets/batel.jpg";
import person2 from "../assets/prince.jpg"
import person3 from "../assets/ransford.jpg"
import person4 from "../assets/jurica.jpg"
import slideImg from "../img/Frame 20.png";
import mail from "../img/mail.png";
import Phone from "../img/Phone.png";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram.png";
import tabler from "../img/tabler_mail.png";
import { FaBars, FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";

import "./css/home.css";
import { useState , useRef} from "react";
import Modal from "./Modal";

function Home() {
  const [show, setshow] = useState(false)
  const [active, setactive] = useState(1)
  const [modal, setmodal] = useState(false)
  const about = useRef(null)
  const testimonial = useRef(null)
  const tutorial = useRef(null)
  const contact = useRef(null)
  const home = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const handlemodal = () =>{
    setmodal(!modal)
  }

  const handleShow = ()=>{
    setshow(!show)
  }
  const personStars = Array.from({ length: 4 }, (v, i) => i);

  const stars = personStars.map((s, i) => {
    return <img src={star} alt="" key={i} />;
  });

  return (
    <div className="home-con">
      {modal && (<Modal handlemodal={handlemodal}/>)}
      <div className="nav-con">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <nav className="nav-desktop"> 
            <ul>
              <li onClick={()=>{scrollToSection(home); setactive(1)}} className={active===1 && "active"}>Home</li>
              <li onClick={()=>{setactive(2); scrollToSection(about)}} className={active===2 && "active"}>About Us</li>
              <li onClick={()=>{scrollToSection(tutorial); setactive(5)}} className={active===5 && "active"}>Tutorial</li>
              <li onClick={()=>{scrollToSection(testimonial); setactive(3)}} className={active===3 && "active"}>Testimonials</li>
              <li onClick={()=>{scrollToSection(contact); setactive(4)}} className={active===4 && "active"}>Contact Us</li>
            </ul>
            <div >
              <button className="nav-button" onClick={handlemodal}>Join Waitlist</button>
            </div>
          </nav>
          <div className="nav-hambuger" onClick={handleShow}>
            <FaBars/>
          </div>
          {show && (
            <nav className="nav-mobile"> 
              <div className="nav-times" onClick={handleShow}>
                <FaTimes/>
              </div>
              <ul>
                <li onClick={()=>{handleShow(); scrollToSection(home)}}>Home</li>
                <li onClick={()=>{handleShow(); scrollToSection(about)}}>About Us</li>
                <li onClick={()=>{scrollToSection(tutorial); handleShow();}}>Tutorial</li>
                <li onClick={()=>{handleShow(); scrollToSection(testimonial)}}>Testimonials</li>
                <li onClick={()=>{handleShow(); scrollToSection(contact)}}>Contact Us</li>
              </ul>
              <div >
                <button className="nav-button nav-button-mobile" onClick={handlemodal}>Join Waitlist</button>
              </div>
            </nav>
          )}
      </div>

      <main className="home-main">
        <div ref={home} className="learn-p-btn-pic">
          <div className="learn-p-btn">
            <div>
              <h1 className="intro-header">Learn <span className="anytime">Anytime</span>, <span className="anywhere">Anywhere</span> with Lecture Podcast</h1>
              <p className="intro-text">
                Embark on a journey of discovery, with engaging content,
                interactive learning, and endless possibilities with audio and
                video learning.
              </p>
            </div>
            <div className="button-container">
              <button className="get-started-btn" onClick={handlemodal}>Join Waitlist</button>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
          <div className="intro-image-con">
            <img src={Group} alt="" />
          </div>
        </div>

        <div className="accumulator">
          <div>
            <p>1000+</p>
            <p>Courses Available</p>
          </div>
          <div>
            <p>50&#44;000+</p>
            <p>Active Users</p>
          </div>
          <div>
            <p>85%</p>
            <p>Completion rate</p>
          </div>
          <div>
            <p>15 Years</p>
            <p>Average Mentor Experience</p>
          </div>
        </div>

        <div ref={about} className="why-amplify-elevate-empower">
          <div className="why-choose-us">
            <div className="p-img">
              <div>
                <h2 className="why-choose-header">Why Choose Us?</h2>
                <p className="why-choose-text">
                  Discover the reasons why Lecture Podcast stands out. From
                  seamless content organization to a diverse range of courses,
                  we are committed to providing an enriching and accessible
                  learning experience for both educators and students. Join us
                  in shaping the future of education
                </p>
              </div>
              <div className="why-img-con">
                <img src={Rectangle} alt="" />
              </div>
            </div>
            <div className="p-icons">
              <div className="choose-grid experience-edu">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                    <path d="M32.0627 27.5676C32.9025 27.5676 33.708 27.234 34.3018 26.6401C34.8957 26.0463 35.2293 25.2408 35.2293 24.401V6.98429C35.2293 6.14444 34.8957 5.33899 34.3018 4.74512C33.708 4.15126 32.9025 3.81763 32.0627 3.81763H15.3743C15.9285 4.78346 16.2293 5.87596 16.2293 6.98429H32.0627V24.401H17.8127V27.5676M24.146 11.7343V14.901H14.646V35.4843H11.4793V25.9843H8.31266V35.4843H5.146V22.8176H2.771V14.901C2.771 14.0611 3.10463 13.2557 3.69849 12.6618C4.29236 12.0679 5.09781 11.7343 5.93766 11.7343H24.146ZM13.0627 6.98429C13.0627 7.82415 12.729 8.6296 12.1352 9.22346C11.5413 9.81733 10.7358 10.151 9.896 10.151C9.05614 10.151 8.25069 9.81733 7.65682 9.22346C7.06296 8.6296 6.72933 7.82415 6.72933 6.98429C6.72933 6.14444 7.06296 5.33899 7.65682 4.74512C8.25069 4.15126 9.05614 3.81763 9.896 3.81763C10.7358 3.81763 11.5413 4.15126 12.1352 4.74512C12.729 5.33899 13.0627 6.14444 13.0627 6.98429Z" fill="white"/>
                  </svg>
                </div>
                <h3>Experienced Educators</h3>
                <p>
                  Learn from seasoned mentors for a rich educational experience.
                </p>
              </div>

              <div className="choose-grid person-inter">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                    <path d="M21.5648 14.4009V4.90088H34.2314V14.4009H21.5648ZM5.73145 20.7342V4.90088H18.3981V20.7342H5.73145ZM21.5648 33.4009V17.5675H34.2314V33.4009H21.5648ZM5.73145 33.4009V23.9009H18.3981V33.4009H5.73145Z" fill="white"/>
                  </svg>
                </div>
                <h3>Personalised interface</h3>
                <p>
                  Our interface adapts to your preferences, making every
                  interaction uniquely yours.
                </p>
              </div>

              <div className="choose-grid flex-learn">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
                    <path d="M18.9998 3.66675C16.9206 3.66675 14.8617 4.07629 12.9407 4.87199C11.0197 5.66769 9.27424 6.83396 7.80398 8.30422C4.83465 11.2735 3.1665 15.3008 3.1665 19.5001C3.1665 23.6993 4.83465 27.7266 7.80398 30.6959C9.27424 32.1662 11.0197 33.3325 12.9407 34.1282C14.8617 34.9239 16.9206 35.3334 18.9998 35.3334C23.1991 35.3334 27.2264 33.6653 30.1957 30.6959C33.165 27.7266 34.8332 23.6993 34.8332 19.5001C34.8332 17.4208 34.4236 15.3619 33.6279 13.4409C32.8322 11.5199 31.666 9.77448 30.1957 8.30422C28.7254 6.83396 26.98 5.66769 25.059 4.87199C23.138 4.07629 21.0791 3.66675 18.9998 3.66675ZM25.6498 26.1501L17.4165 21.0834V11.5834H19.7915V19.8167L26.9165 24.0917L25.6498 26.1501Z" fill="white"/>
                  </svg>
                </div>
                <h3>Flexible Learning</h3>
                <p>
                  Our flexible learning ensures a personalized and convenient
                  educational journey.
                </p>
              </div>

              <div className="choose-grid access">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="30" viewBox="0 0 37 30" fill="none">
                    <path d="M31.45 13.125C29.4092 13.125 27.75 11.4434 27.75 9.375C27.75 7.30664 29.4092 5.625 31.45 5.625C33.4908 5.625 35.15 7.30664 35.15 9.375C35.15 11.4434 33.4908 13.125 31.45 13.125ZM5.55 13.125C3.50922 13.125 1.85 11.4434 1.85 9.375C1.85 7.30664 3.50922 5.625 5.55 5.625C7.59078 5.625 9.25 7.30664 9.25 9.375C9.25 11.4434 7.59078 13.125 5.55 13.125ZM3.7 15H7.4C8.4175 15 9.33672 15.416 10.0073 16.0898C7.6775 17.3848 6.02406 19.7227 5.66562 22.5H1.85C0.826717 22.5 0 21.6621 0 20.625V18.75C0 16.6816 1.65922 15 3.7 15ZM18.5 15C14.9214 15 12.025 12.0645 12.025 8.4375C12.025 4.81055 14.9214 1.875 18.5 1.875C22.0786 1.875 24.975 4.81055 24.975 8.4375C24.975 12.0645 22.0786 15 18.5 15ZM14.06 16.875H14.5398C15.7423 17.4609 17.0778 17.8125 18.5 17.8125C19.9222 17.8125 21.2519 17.4609 22.4602 16.875H22.94C26.6169 16.875 29.6 19.8984 29.6 23.625V25.3125C29.6 26.8652 28.357 28.125 26.825 28.125H10.175C8.64297 28.125 7.4 26.8652 7.4 25.3125V23.625C7.4 19.8984 10.3831 16.875 14.06 16.875ZM26.9927 16.0898C27.6633 15.416 28.5825 15 29.6 15H33.3C35.3408 15 37 16.6816 37 18.75V20.625C37 21.6621 36.1733 22.5 35.15 22.5H31.3402C30.9759 19.7227 29.3225 17.3848 26.9927 16.0898Z" fill="white"/>
                  </svg>
                </div>
                <h3>Accessibility </h3>
                <p>
                  At Lecture Podcast, we&apos;re dedicated to accessible
                  education for everyone
                </p>
              </div>
            </div>
          </div>

          <div className="amplify">
            <div className="amplify-body">
              <h3 className="amplify-header">
                Amplify your Reach as a <br></br><span>Content Creator</span>
              </h3>
              <p className="amplify-text">
                Unlock the potential of your content. Join our platform to share
                your expertise with a global audience. Gain exposure, build your
                brand, and inspire learners worldwide.
              </p>
              <div className="button-container">
              <button className="amplify-button" onClick={handlemodal}>Join Waitlist</button>
              </div>
              
            </div>
            <div className="amplify-image image-1">
              <img src={creator} alt="" />
            </div>
          </div>

          <div className="elevate">
            <div className="amplify-image image-2">
              <img src={Learning} alt="" />
            </div>
            <div className="amplify-body">
              <h3 className="amplify-header">
                Elevate Your <span>Learning</span> Journey
              </h3>
              <p className="amplify-text">
                Embark on a personalized learning adventure. Access a diverse
                range of courses, engage with experienced mentors, and tailor
                your education to match your unique interests and career goals.
              </p>
              <div className="button-container">
                <button onClick={handlemodal}>Join Waitlist</button>
              </div>  
            </div>
          </div>

          <div className="empower">
            <div className="amplify-body">
              <h3 className="amplify-header">
                Empower Your <span>Teaching</span> Impact
              </h3>
              <p className="amplify-text">
                Take your teaching to new heights. Easily upload and organize
                your educational content, connect with a broader audience, and
                make a lasting impact on the global learning community.
              </p>
              <div className="button-container">
                <button onClick={handlemodal}>Join Waitlist</button>
              </div>
              
            </div>
            <div className="amplify-image">
              <img src={Teaching} alt="" />
            </div>
          </div>

          <div ref={tutorial} className="getting">
            <div className="text-con">
              <div className="text">
                <div className="h4-p">
                  <h4 className="getting-header">Getting Started With Us Is Easy</h4>
                  <p className="getting-body">
                    Follow these simple steps below to create your account and
                    get started. You can also watch the step - by - step
                    tutorial video for further instructions
                  </p>
                </div>
                <div>
                  <div>
                    <div>
                      <img src={check} alt="" />
                    </div>
                    <p>
                      Sign up by using your Email address, Full name, Phone
                      number, Password. <span>Or sign up using google.</span>
                    </p>
                  </div>
                  <div>
                    <div>
                      <img src={check} alt="" />
                    </div>
                    <p>
                      Check your mail inbox for a verification mail, once you
                      click the link on the mail you will be redirected to page.
                    </p>
                  </div>
                  <div>
                    <div>
                      <img src={check} alt="" />
                    </div>
                    <p>
                      On this new page, you&#39;ll be asked to select your
                      preferred role either as a Lecturer, Student or content
                      creator.
                    </p>
                  </div>
                  <div>
                    <div>
                      <img src={check} alt="" />
                    </div>
                    <p>
                      Once you have done so, you will receive a pop-up to inform
                      you that your account has been created successfully.
                    </p>
                  </div>
                </div>
              </div>
              <div className="vid-con">
                {/* <div> */}
                <img src={vid} alt="" />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        <div ref={testimonial} className="testimonial-session">
          <div className="h5-p">
            <h5>What our clients are saying</h5>
            <p>
              Here are our reviews we&#39;ve gotten from our clients, students,
              professors and other individuals
            </p>
          </div>

          <div className="card-con">
            <div className="card">
              <div className="quote-img">
                <img src={quote} alt="" />
              </div>
              <p className="speech">
                “There was a time I was having issues understanding symbolic
                interactionism. Connecting with Lecture Podcast gave me the
                avenue to get podcast sessions. I got the lessons from another
                professor with detailed explanation and it started connecting.”
              </p>
              <div className="person-details">
                <div className="person-img">
                  <img src={person1} alt="" />
                </div>
                <div className="name-uni">
                  <p>Ikechukwu Amadi</p>
                  <p>100 Level, University of Nigeria.</p>
                </div>
                <div className="person-star">{stars}</div>
              </div>
            </div>
            <div className="card">
              <div className="quote-img">
                <img src={quote} alt="" />
              </div>
              <p className="speech">
                “Lecture Podcast is an initiative that benefits both the
                students and the lecturer, it is an amazing idea.”
              </p>
              <div className="person-details">
                <div className="person-img">
                  <img src={person2} alt="" />
                </div>
                <div className="name-uni">
                  <p>Prof. Kadiri Simon</p>
                  <p>University of Abuja.</p>
                </div>
                <div className="person-star">{stars}</div>
              </div>
            </div>
            <div className="card">
              <div className="quote-img">
                <img src={quote} alt="" />
              </div>
              <p className="speech">
                “Discovering Lecture Podcast has been a game-changer for my
                social media management skills. The concise and insightful
                content on this plattform has significantly improved my approach
                to social media strategy.”
              </p>
              <div className="person-details">
                <div className="person-img">
                  <img src={person3} alt="" />
                </div>
                <div className="name-uni">
                  <p>Emmanuel Daniels</p>
                  <p>Social media manager</p>
                </div>
                <div className="person-star">{stars}</div>
              </div>
            </div>
            <div className="card">
              <div className="quote-img">
                <img src={quote} alt="" />
              </div>
              <p className="speech">
                “Before joining Lecture Podcast, I had ideas of copywriting and
                other forms of writing but Lecture Podcast gave me an avenue to
                prove myself. With Lecture Podcast, there is now an avenue for
                me to practically showcase what I know I can do.”
              </p>
              <div className="person-details">
                <div className="person-img">
                  <img src={person4} alt="" />
                </div>
                <div className="name-uni">
                  <p>Precious</p>
                  <p>Content writer</p>
                </div>
                <div className="person-star">{stars}</div>
              </div>
            </div>
          </div>

          {/* <div className="below-slides">
            <img src={slideImg} alt="" />
          </div> */}
        </div>

        <div ref={contact} className="get-in-touch">
          <div className="layer">
            <div className="get-in-touch-social">
              <div className="e-message">
                <div className="p-inputs">
                  <h5>Get in Touch with Us</h5>
                  <p>
                    Have questions, feedback, or just want to say hello? We&#39;
                    re here to help! Feel free to reach out to us, and we&#39; ll
                    get back to you as soon as possible. Your thoughts matter to
                    us!
                  </p>
                  <div className="name-add-num-sub">
                    <div>
                      <label htmlFor="name"></label>
                      <input id="name" type="text" placeholder="Your name" />

                      <label htmlFor="number"></label>
                      <input
                        id="number"
                        type="number"
                        placeholder="Phone Number name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email"></label>
                      <input id="email" type="text" placeholder="Email Address" />

                      <label htmlFor="Subject"></label>
                      <input id="subject" type="text" placeholder="Subject" />
                    </div>
                  </div>

                  <label htmlFor="message"></label>
                  <textarea id="message" name="story" rows="5" cols="33">
                    Message
                  </textarea>
                  <button type="submit">Send Message</button>
                </div>
              </div>

              <div className="social-media-con">
                {/* <div> */}
                <div className="social-media">
                  <div className="img-p line">
                    <div className="social-svg">
                      <FaPhone />
                    </div>
                    <div>
                      <p>Phone Number</p>
                      <p>+2340803344535</p>
                    </div>
                  </div>
                  <div className="img-p line">
                    <div className="social-svg">
                      <MdMail/>
                    </div>
                    <div>
                      <p>Email Address</p>
                      <p>lecturepodcast1@gmail.com</p>
                    </div>
                  </div>

                  <div className="img-p line">
                    <div className="social-svg">
                      <RiInstagramFill/>
                    </div>
                    <div>
                      <p>Instagram</p>
                      <p>@lecturepodcast</p>
                    </div>
                  </div>

                  <div className="img-p">
                    <div className="social-svg">
                      <FaSquareXTwitter/>
                    </div>
                    <div>
                      <p>X (Twitter)</p>
                      <p>@lecturepodcast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="footer">
            <div>
              <div>
                <img src={logo} alt="" />
              </div>
              <div>
                <p className="para">
                  LP Creators is a platform tailored for content creators such
                  as university professors, educational instructors and expert
                </p>
              </div>
              <div className="social-icons">
                <div>
                  <TiSocialFacebook />
                </div>
                <div>
                  <FaLinkedinIn />
                </div>
                <div>
                  <SlSocialTwitter />
                </div>
                <div>
                  <SlSocialInstagram />
                </div>
              </div>
            </div>

            <div className="middle-div">
              <h6>Links</h6>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Featured Courses</li>
                <li>Contact Us</li>
                <li>Testimonials</li>
              </ul>
            </div>

            <div className="last-div">
              <h6>Newsletter</h6>
              <p>
                Subscribe to our Newsletter and receive updates on new courses
                and the best offers{" "}
              </p>
              <div className="input-img">
                <input type="text" placeholder="Enter your email address" />
              </div>
              <button>Subscribe</button>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; Copyright 2023 Lecture Podcast All Rights Reserved</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Home;
