import React from 'react'

const AbsQuest = () => {
  return (
    <div className='questDiv'>
      <div className='questDiv'>
      <div className='questNote'>
        <p>
          Which of the options below should complete this?
          <br/><br/>
          Triangle, Square, Cone, ...
        </p>
      </div>
      <div className='questChoose'>
        <div>
          <button>
            Die
          </button>
        </div>
        <div>
          <button>
            Cube
          </button>
        </div>
        <div>
          <button>
            Rectangle
          </button>
        </div>
        <div>
          <button>
            None of the above
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AbsQuest;