import './App.css';
import { useState } from 'react';

function App() {
  const quibblePos = [
    {
      quibbleAt: 1,
      left: '10%',
      topic: 'verbal',
    },
    {
      quibbleAt: 2,
      left: '30%',
      topic: 'numerical',
    },
    {
      quibbleAt: 3,
      left: '55%',
      topic: 'logical',
    },
    {
      quibbleAt: 4,
      left: '80%',
      topic: 'abstract',
    }
  ]

  const categoryList = [
    {
      id: 1,
      category: 'verbal',
      active: false,
    },
    {
      id: 2,
      category: 'numerical',
      active: false,
    },
    {
      id: 3,
      category: 'logical',
      active: false,
    },
    {
      id: 4,
      category: 'abstract',
      active: false,
    }
  ]

  const [qPos, setQPos] = useState(1);
  const [choices, setChoices] = useState(categoryList);
  
  const handleQuibble=(qbr)=>{
    // console.log(`quibble receive: ${qbr}`);
    let theQuib = document.getElementsByClassName('quibbleMove')[0];
    theQuib.style.left = qbr.left;

    function flight_mechanics(){
      console.log(`flying in from ${qPos}`);
      console.log(`flying out to ${qbr.quibbleAt}`);
    }
    flight_mechanics();
  }

  const handleSingleSelect=(s)=>{
    let pick = quibblePos.filter((f)=> f.topic === s);
    pick = pick[0];
    setQPos(pick.quibbleAt);
    handleQuibble(pick);
  }

  const handleMultiSelect=(x)=>{
    console.log(`choices: ${x}`);
    const chooseCategs = choices.map(
      (y)=> y.id === x
      ? {...y, active: !y.active}
      : y
    );
    setChoices(chooseCategs);
  }



  return (
    <div className='frame'>
      <div className="categoryBox">
        {
          choices.map((categ)=>{
            return(
              <div className='category' key={categ.id}>
                <input name='categ_check' type='checkbox' checked={categ.active}
                      onChange={()=>handleMultiSelect(categ.id)}
                >
                </input>

              </div>
            )
          })
        }
      </div>
      <div className="categoryBox">
        {
          categoryList.map((categ)=>{
            return(
              <div className='category' key={categ.id}>
                <input name='categ_radio' type='radio'
                      onChange={()=>{
                        handleSingleSelect(categ.category);
                      }}
                >
                </input>
              </div>
            )
          })
        }
        <div className='quibbleBox'>
          <div className='quibbleMove'></div>
          <div className='quibbleSpeak'></div>
        </div>
      </div>

    </div>
  );
}

export default App;
