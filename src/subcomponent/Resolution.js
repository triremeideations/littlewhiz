import '../styles/res.css'
import { ideal } from '../data/populateData'

const ResolutionPrompt =()=> {
    return (
        <div className="best_screen">
            <div className='ideal'>
                <p>{`${ideal[0]}`}</p>
                <p>{`${ideal[1]}`}</p>
                <p>{`${ideal[2]}`}</p>
            </div>
        </div>
    )
}

export default ResolutionPrompt