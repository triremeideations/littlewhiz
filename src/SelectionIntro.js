/* eslint-disable no-useless-concat*/

import './styles/glide.css'
import './styles/intro.css'
import { speaks } from './description';


const SelectionIntro = ({ categoryList, handleSingleSelect,
    presentStart}) => {
        return (
            <div className="categoryBox cbxIntro">
                <h2> Click Pictures for info! </h2>
                <div className="break"></div>
                {
                categoryList.map((categ)=>{
                    return(
                        <div className='category sKnob'
                        id={`${categ.category}`+`_desc`}
                        key={categ.id}>
                        <input
                        name='categ_radio'
                        type='radio'
                        onChange={
                            (e)=>{
                                handleSingleSelect(categ.category, e);
                                speaks(e);
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
                        <div className="qNext void"
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