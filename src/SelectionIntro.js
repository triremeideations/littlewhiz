/* eslint-disable no-useless-concat*/

import './glide.css'
import './intro.css'

const SelectionIntro = ({ categoryList, handleSingleSelect,
    presentStart}) => {
        return (
            <div className="categoryBox cbxIntro">
                <h2> Click Pictures for info! </h2>
                <div className="break"></div>
                {
                categoryList.map((categ)=>{
                    return(
                        <div className='category'
                        id={`${categ.category}`+`_desc`}
                        key={categ.id}>
                        <input
                        name='categ_radio'
                        type='radio'
                        onChange={
                            ()=>{
                                handleSingleSelect(categ.category);
                            }
                        }>
                        </input>
                    </div>
                    )
                })
                }
                <div className='quibbleBox'>
                    <div className='quibbleMove'></div>
                    <div className='quibbleSpeak'>
                        <div className="qSay describe"></div>
                        <div className="qNext"
                        onClick={()=>{
                        presentStart();
                        }}
                        >
                            <p>Got it!</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default SelectionIntro