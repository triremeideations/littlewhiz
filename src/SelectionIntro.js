const SelectionIntro = ({ categoryList, handleSingleSelect,
    presentStart}) => {
        return (
            <div className="categoryBox cbxIntro">
                <p> Click for info! </p>
                <div className="break"></div>
                {
                categoryList.map((categ)=>{
                    return(
                    <div className='category' key={categ.id}>
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