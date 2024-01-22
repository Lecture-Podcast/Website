import logo from "../img/LP Logo.png";
import Rectangle from "../img/Rectangle 18.png";
import Experienced from "../img/Experienced Educators.png";
import Flexible from "../img/Flexible learning.png";
import Personalized from "../img/Personalized interface.png";
import Accessibility from "../img/Accessibility.png";
import Group from "../img/Group 59.png";
import Improve from "../img/Improve Better Softw.png";

function Home() {
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

          <div>hihgfjh</div>
          <div>hihgfjh</div>
          <div>hihgfjh</div>
          <div>hihgfjh</div>
          <div>hihgfjh</div>
          <div>hihgfjh</div>
        </div>
      </main>
    </div>
  );
}

export default Home;
