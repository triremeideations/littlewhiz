import VerbalQuest from './VerbalQuest';
import NumQuest from './NumQuest';
import LogicQuest from './LogicQuest';
import AbsQuest from './AbsQuest';
import QuestInstruction from './QuestInstruction';

const GameInteraction = ({ activeQuest, questSelect }) => {

const throwOutcome=()=>{
    const dieOne = sessionStorage.getItem('dieNumberOne');
    const dieTwo = sessionStorage.getItem('dieNumberTwo');
    console.log(`die one: ${dieOne}. die two: ${dieTwo}`);
}

    return (
        <div id='gameinteraction'>
            <div id='questionBox'>
                { activeQuest === 0 && <QuestInstruction/> }
                { activeQuest === 1 && <VerbalQuest/> }
                { activeQuest === 2 && <NumQuest/> }
                { activeQuest === 3 && <LogicQuest/> }
                { activeQuest === 4 && <AbsQuest/> }
            </div>
            <div id='buttonBox'>
                <button id='thisVerbal' onClick={()=>{
                    questSelect(1)
                    throwOutcome();
                }}>
                    Verbal
                </button>
                <button id='thisNumeric' onClick={()=>{
                    questSelect(2)
                }}>
                    Numeric
                </button>
                <button id='thisLogic' onClick={()=>{
                    questSelect(3)
                }}>
                    Logic
                </button>
                <button id='thisAbstract' onClick={()=>{
                    questSelect(4)
                }}>
                    Abstract
                </button>
            </div>
        </div>
    )
}

export default GameInteraction;