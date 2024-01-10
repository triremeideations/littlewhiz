import React from 'react'

const NumQuest = () => {
  return (
    <div className='questDiv'>
      <div className='questDiv'>
      <div className='questNote'>
        <p>
          A side of a die is called a face.
          What is the sum of the number of faces of die 1 and die 2? 
        </p>
      </div>
      <div className='questChoose'>
        <div>
          <button>
            Four
          </button>
        </div>
        <div>
          <button>
            Six
          </button>
        </div>
        <div>
          <button>
            Eight
          </button>
        </div>
        <div>
          <button>
            Twelve
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NumQuest