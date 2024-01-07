/* eslint-disable no-useless-concat*/

import '../styles/glide.css'
import { goes } from '../utils/description'

const SelectionOutro = ({choices, handleMultiSelect, proceed}) => {
  return (
    <div className="categoryBox cbxOutro">
        <h2>Choose your Categories</h2>
        <div className="break"></div>

        {
          choices.map((categ)=>{
            return(
              <div className='category' id={`${categ.category}`+`_sel`}
                key={categ.id}>

                <input
                  name='categ_check'
                  type='checkbox'
                  checked={categ.active}
                  onChange={
                    (e)=>{
                      handleMultiSelect(categ.id, e);
                      goes(e);
                    }
                  }>
                </input>

              </div>
            )
          })
        }
        {/* <div className="quibbleBox"> */}
        <div className='quibbleSpeak speakTwo'>
          <div className="qSay commend"></div>
          <div className="qNext proc"
            onClick={()=>{
              proceed();
            }}
            >
              <p>Let's Go, Champ!</p>
          </div>
        </div>
        {/* </div> */}
    </div>
  )
}

export default SelectionOutro