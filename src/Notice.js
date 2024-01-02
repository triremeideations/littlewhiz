import './styles/notice.css';

const Notice = () => {
  return (
    <div className='notice'>
        <h2>
            CAUTION
        </h2>
        <br/>
        <p>
            Our platform contains animated content and vibrant visuals
            that include flashing images and patterns.
            Be advised that this could affect children prone to photosensitive seizures.<br/><br/>
            If your child has a history of such seizures, consult a healthcare 
            professional before proceeding. Please stop use immediately if any
            adverse effects are observed.     
        </p>
        <br/>
        <button>
            I understand. Continue.
        </button>
    </div>
  )
}

export default Notice;