import exchange from '../assets/exchange.png'
import customer from '../assets/customer.png'
import policy from  '../assets/policy.png'
import '../stylecss/policy.css'

function OurPolicy() {
  return (
    <div className="policy-section">
      <div className="policy-box">
        <img src={exchange} alt="Exchange Icon" />
        <p>Easy Exchange Policy</p>
        <p>We offer hassle free exchange policy</p>
      </div>
      <div className="policy-box">
        <img src={policy} alt="Return Icon" />
        <p>7 Days Return Policy</p>
        <p>We provide 7 days free return policy</p>
      </div>
      <div className="policy-box">
        <img src={customer} alt="Support Icon" />
        <p>Best customer support</p>
        <p>We provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy
