import Subscribe from '../Components/Subscribe';
import '../stylecss/Home.css';
import Footer from '../Components/Footer';

const Home = () => {
  const handleClick = () =>{
    alert('get ready to elevate your style!')
  }
  return (
    <div>
    <div className='home'>
      <div className='text'>
        <h1>ELEVATE Your Style!</h1>
        <button onClick={handleClick}>SHOP NOW</button>
      </div>
    </div>
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default Home;
