import './glide.css'

const SelectionOutro = ({choices, handleMultiSelect, proceed}) => {
  return (
    <div className="categoryBox cbxOutro">
        <p>Choose your Categories</p>
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
                    ()=>handleMultiSelect(categ.id)
                  }>
                </input>

              </div>
            )
          })
        }
        {/* <div className="quibbleBox"> */}
        <div className='quibbleSpeak speakTwo'>
          <div className="qSay commend"></div>
          <div className="qNext"
            onClick={()=>{
              proceed();
            }}
            >
              <p>Let's Go Champ!</p>
          </div>
        </div>
        {/* </div> */}
    </div>
  )
}

export default SelectionOutro