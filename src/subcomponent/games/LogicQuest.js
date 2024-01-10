import React from 'react'

const LogicQuest = () => {
  return (
    <div className='questDiv'>
      <div className='questDiv'>
      <div className='questNote'>
        <p>
          Look at the number on the upward face of the both of them.
          The die on the left is greater than the die on the right.
        </p>
      </div>
      <div className='questChoose'>
        <div>
          <button>
            True
          </button>
        </div>
        <div>
          <button>
            False
          </button>
        </div>
        <div>
          <button>
            It depends
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

export default LogicQuest