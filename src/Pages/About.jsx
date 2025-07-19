import '../stylecss/about.css'
import about from '../assets/about.png'
import Footer from '../Components/Footer'
const About = () => {
  return (
    <div>
      <div className='about'>
        <h>About Us</h>
      </div>
      <div className='ab'>
        <img src={about} alt='' />
        <p className='combined'>
  Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
  <br/><br/>
  Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
  <br/><br/>
  <strong>Our Mission:</strong> Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
</p>
      </div>
      <div className='wh'>
      <h2>why choose us____</h2></div>
      <div className='choose'>
        <div className='choose-box'>
        <p><strong>Quality Assurance:</strong><br/>
We meticulously select and vet <br/>each product to ensure it meets <br/>our stringent quality standards.</p>
</div>
<div className='choose-box'>
  <p><strong>Convenience:</strong>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
</div>
<div className='choose-box'>
  <p><strong>Exceptional Customer Service:</strong>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
</div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
