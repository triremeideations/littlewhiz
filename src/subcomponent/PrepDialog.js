import '../styles/prepDialog.css'
import { Link } from 'react-router-dom';

const PrepDialogBox = () => {
  return (
    <div>
      <div className="prepDiag"></div>
      <Link to={"/ready"}>
        <div className="initiateQuiz"> Begin! </div>
      </Link>
    </div>
  )
}

export default PrepDialogBox