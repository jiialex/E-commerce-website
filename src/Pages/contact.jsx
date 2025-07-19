import '../stylecss/contact.css'
import contact from '../assets/contact.png'
import Subscribe from '../Components/Subscribe';
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <div>
      <div className='contact'>
        <h2>contact us</h2>
          </div>
        <div className='contact-image'>
          <img src={contact} alt=''/>
          <p><strong>Our Store</strong><br/><br/>
         medhaniyalem,Addis Ababa <br/><br/>Tel:(0951743245)<br/>Email:jiialex1222@gmail.com<br/><br/>
           <h3>Careers at forever</h3>
           learn more about our team and job openings<br/><br/>
           <button className='explore'>Explore Jobs</button></p>
        </div>
    <Subscribe/>
    <Footer/>
    </div>
  );
}

export default Contact;
