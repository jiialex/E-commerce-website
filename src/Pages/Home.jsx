import '../stylecss/Home.css';

const Home = () => {
  const handleClick = () =>{
    alert('get ready to elevate your style!')
  }
  return (
    <div className='home'>
      <div className='text'>
        <h1>ELEVATE Your Style!</h1>
        <button onClick={handleClick}>SHOP NOW</button>
      </div>
    </div>
  );
};

export default Home;
