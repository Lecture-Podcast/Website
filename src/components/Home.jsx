// import { testimonial } from "../data/data";

import logo from "../img/LP Logo.png";
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
import slideImg from "../img/Frame 20.png";
import mail from "../img/mail.png";
import Phone from "../img/Phone.png";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram.png";
import tabler from "../img/tabler_mail.png";

import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";

import "./css/home.css";

function Home() {

  const personStars = Array.from({ length: 4 }, (v, i) => i);

  const stars = personStars.map((s, i) => {
    return <img src={star} alt="" key={i} />;
  });

  return (
    <div className="home-con">
      <div className="nav-con">
        <nav>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Tutorial</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
          <div>
            <button>Get Started</button>
          </div>
        </nav>
      </div>

      <main className="home-main">
        <div className="learn-p-btn-pic">
          <div className="learn-p-btn">
            <div>
              <img src={Improve} alt="" />
            </div>
            <div>
              <p>
                Embark on a journey of discovery, with engaging content,
                interactive learning, and endless possibilities with audio and
                video learning.
              </p>
            </div>
            <div>
              <button>Get Started</button>
              <button>Learn More</button>
            </div>
          </div>
          <div>
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
            <p>15Years</p>
            <p>Average Mentor Experience</p>
          </div>
        </div>

        <div className="why-amplify-elevate-empower">
          <div className="why-choose-us">
            <div className="p-img">
              <div>
                <h2>Why Choose Us?</h2>
                <p>
                  Discover the reasons why Lecture Podcast stands out. From
                  seamless content organization to a diverse range of courses,
                  we are committed to providing an enriching and accessible
                  learning experience for both educators and students. Join us
                  in shaping the future of education
                </p>
              </div>
              <div>
                <img src={Rectangle} alt="" />
              </div>
            </div>
            <div className="p-icons">
              <div className="experience-edu">
                <div>
                  <img src={Experienced} alt="" />
                </div>
                <h3>Experienced Educators</h3>
                <p>
                  Learn from seasoned mentors for a rich educational experience.
                </p>
              </div>

              <div className="person-inter">
                <div>
                  <img src={Personalized} alt="" />
                </div>
                <h3>Personalised interface</h3>
                <p>
                  Our interface adapts to your preferences, making every
                  interaction uniquely yours.
                </p>
              </div>

              <div className="flex-learn">
                <div>
                  <img src={Flexible} alt="" />
                </div>
                <h3>Flexible Learning</h3>
                <p>
                  Our flexible learning ensures a personalized and convenient
                  educational journey.
                </p>
              </div>

              <div className="access">
                <div>
                  <img src={Accessibility} alt="" />
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
            <div>
              <h3>
                Amplify your Reach as a <span>Content Creator</span>
              </h3>
              <p>
                Unlock the potential of your content. Join our platform to share
                your expertise with a global audience. Gain exposure, build your
                brand, and inspire learners worldwide.
              </p>
              <button>Get Started</button>
            </div>
            <div>
              <img src={creator} alt="" />
            </div>
          </div>

          <div className="elevate">
            <div>
              <img src={Learning} alt="" />
            </div>
            <div>
              <h3>
                Elevate Your <span>Learning</span> Journey
              </h3>
              <p>
                Embark on a personalized learning adventure. Access a diverse
                range of courses, engage with experienced mentors, and tailor
                your education to match your unique interests and career goals.
              </p>
              <button>Start Learning Today</button>
            </div>
          </div>

          <div className="empower">
            <div>
              <h3>
                Empower Your <span>Teaching</span> Impact
              </h3>
              <p>
                Take your teaching to new heights. Easily upload and organize
                your educational content, connect with a broader audience, and
                make a lasting impact on the global learning community.
              </p>
              <button>Get Started</button>
            </div>
            <div>
              <img src={Teaching} alt="" />
            </div>
          </div>

          <div className="getting">
            <div className="text-con">
              <div className="text">
                <div className="h4-p">
                  <h4>Getting Started With Us Is Easy</h4>
                  <p>
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

        <div className="testimonial-session">
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
                  <img src={Ellipse} alt="" />
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
                  <img src={Ellipse} alt="" />
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
                  <img src={Ellipse} alt="" />
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
                  <img src={Ellipse} alt="" />
                </div>
                <div className="name-uni">
                  <p>Precious</p>
                  <p>Content writer</p>
                </div>
                <div className="person-star">{stars}</div>
              </div>
            </div>
          </div>

          <div className="below-slides">
            <img src={slideImg} alt="" />
          </div>
        </div>

        <div className="get-in-touch">
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
                  <div>
                    <img src={Phone} alt="" />
                  </div>
                  <div>
                    <p>Phone Number</p>
                    <p>+2340803344535</p>
                  </div>
                </div>
                <div className="img-p line">
                  <div>
                    <img src={mail} alt="" />
                  </div>
                  <div>
                    <p>Email Address</p>
                    <p>lecturepodcast1@gmail.com</p>
                  </div>
                </div>

                <div className="img-p line">
                  <div>
                    <img src={instagram} alt="" />
                  </div>
                  <div>
                    <p>Instagram</p>
                    <p>@lecturepodcast</p>
                  </div>
                </div>

                <div className="img-p">
                  <div>
                    <img src={twitter} alt="" />
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
                <div className="message">
                  <img src={tabler} alt="" />
                </div>
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
