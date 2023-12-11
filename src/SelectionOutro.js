const SelectionOutro = ({choices, handleMultiSelect}) => {
  return (
    <div className="categoryBox cbxOutro">
        {
          choices.map((categ)=>{
            return(
              <div className='category' key={categ.id}>

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
      </div>
  )
}

export default SelectionOutro