import Head from 'next/head'
import Slider from "react-slick";
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
const Splashscreens = () => (
  <div className="splashscreens" >
    <div className="sliders">
        <Slider {...settings}>
            <div className="slider-item">
             <div className="inner-wrap">
                <div className="slider-icon">
                    <img src="/splashscreen-icon-1.png" alt="" />
                </div>
                <h3>Welcome to Singaland!</h3>
                <p>You'll guide your character through life in this new world by gaining skills through work and education.</p>
             </div>
            </div>
            <div className="slider-item">
             <div className="inner-wrap">
                <div className="slider-icon">
                    <img src="/splashscreen-icon-2.png" alt="" />
                </div>
                <h3>Action Points</h3>
                <p>In life, we only have 24 hours a day, 7 days a week. Here, you'll get Action Points to spend per round. Choose wisely!</p>
             </div>
            </div>
            <div className="slider-item">
             <div className="inner-wrap">
                <div className="slider-icon">
                    <img src="/splashscreen-icon-3.png" alt="" />
                </div>
                <h3>Bank Account</h3>
                <p>Like in real life, you can earn and spend money too. Watch your bank account grow as you work, and spend it wherever you choose!</p>
             </div>
            </div>
            <div className="slider-item">
             <div className="inner-wrap">
                <div className="slider-icon">
                    <img src="/splashscreen-icon-4.png" alt="" />
                </div>
                <h3>Life Card and Living Expences</h3>
                <p>Like in real life, you can earn and spend money too. Watch your bank account grow as you work, and spend it wherever you choose! At the start of each round, you'll get a Life Card - events that could happen to you in life. You will also have compulsory living expenses to pay for. </p>
             </div>
            </div>
            <div className="slider-item">
             <div className="inner-wrap">
                <div className="slider-icon">
                    <img src="/splashscreen-icon-5.png" alt="" />
                </div>
                <h3>Satisfaction Level</h3>
                <p>As you work, your Satisfaction Level is affected by how the company aligns with your Career Anchors and Values.</p>
             </div>
            </div>
            <div className="slider-item">
             <div className="inner-wrap">
                <div className="slider-icon">
                    <img src="/splashscreen-icon-6.png" alt="" />
                </div>
                <h3>Сareer Center</h3>
                <p>All you need to know about jobs and careers in Singaland is in the Career Center. </p>
             </div>
            </div>
        </Slider>
    </div>
  </div>
)

export default Splashscreens
