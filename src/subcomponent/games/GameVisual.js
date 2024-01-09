import './styles/alea.css'

const GameVisual=()=>{
  return (
    <div id='gamevisual'>

      <div className="gameframe">
            <div className='backboard'>
              <div className="dive">Die 1</div>
              <div className="dive">Die 2</div>
            </div>

            <div className="floorboard"> </div>
            <div className="wall"> </div>
            
            <div className="cube spin"> 
                <img className="side one" alt='a die'
                    src="/img/game/die1.png"/>
                <img className="side two" alt='a die'
                    src="/img/game/die2.png"/>
                <img className="side three" alt='a die'
                    src="/img/game/die3.png"/> 
                <img className="side four" alt='a die'
                    src="/img/game/die4.png"/> 
                <img className="side five" alt='a die'
                    src="/img/game/die5.png"/> 
                <img className="side six" alt='a die'
                    src="/img/game/die6.png"/> 
            </div>

            <div className="cubeTwo twill">
                <img className="side one" alt='a die'
                    src="/img/game/die1.png"/>
                <img className="side two" alt='a die'
                    src="/img/game/die2.png"/> 
                <img className="side three" alt='a die'
                    src="/img/game/die3.png"/> 
                <img className="side four" alt='a die'
                    src="/img/game/die4.png"/> 
                <img className="side five" alt='a die'
                    src="/img/game/die5.png"/> 
                <img className="side six" alt='a die'
                    src="/img/game/die6.png"/> 
            </div>
      </div>

      <button className="pitch"> 
        <i><strong>throw!</strong></i>
      </button>

      <button className="res">
        <strong>Reset</strong>
      </button>
    </div>
  )
}

export default GameVisual