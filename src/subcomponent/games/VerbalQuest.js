const VerbalQuest = () => {
  return (
    <div className='questDiv'>
      <div className='questNote'>
        <p>
          A single one of these red cubes with dots on them is called a 'die'.
          Do you know what two of them together are called?
        </p>
      </div>
      <div className='questChoose'>
        <div>
          <button>
            Dies
          </button>
        </div>
        <div>
          <button>
            Dice
          </button>
        </div>
        <div>
          <button>
            Dais
          </button>
        </div>
        <div>
          <button>
            Dyes
          </button>
        </div>
      </div>
    </div>
  )
}

export default VerbalQuest