import VerbalQuest from './VerbalQuest';
import NumQuest from './NumQuest';
import LogicQuest from './LogicQuest';
import AbsQuest from './AbsQuest';

const GameInteraction = ({ activeQuest, questSelect }) => {

    return (
        <div>
            <div>
                { activeQuest === 1 && <VerbalQuest/> }
                { activeQuest === 2 && <NumQuest/> }
                { activeQuest === 3 && <LogicQuest/> }
                { activeQuest === 4 && <AbsQuest/> }
            </div>
            <div>
                <button id='thisVerbal' onClick={()=>{
                    questSelect(1)
                }}>
                    Verbal
                </button>
                <button id='thisNumeric' onClick={()=>{
                    questSelect(2)
                }}>
                    Numeric
                </button>
                <button id='thisLogic' onClick={()=>{
                    questSelect(2)
                }}>
                    Logic
                </button>
                <button id='thisAbstract' onClick={()=>{
                    questSelect(2)
                }}>
                    Abstract
                </button>
            </div>
        </div>
    )
}

export default GameInteraction;