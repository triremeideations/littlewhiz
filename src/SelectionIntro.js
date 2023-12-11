const SelectionIntro = ({ categoryList, handleSingleSelect,
    presentStart}) => {
        return (
            <div className="categoryBox cbxIntro">
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
                    <div className="qSay"></div>
                    <div className="qNext"
                    onClick={()=>{
                    presentStart();
                    }}
                    >Got it!</div>
                </div>
                </div>
            </div>
  )
}

export default SelectionIntro