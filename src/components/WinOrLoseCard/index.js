import './index.css'

const WinOrLoseCard = props => {
  const {score, playGameAgain} = props
  const headText = score === 12 ? 'You Won' : 'You Lose'
  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onPlayGameAgain = () => {
    playGameAgain()
  }
  return (
    <div className="result-container">
      <div className="text-result">
        <h1 className="heading">{headText}</h1>
        <p className="para">{score === 12 ? 'Best Score' : 'Score'}</p>
        <p className="result-value">{score}/12</p>
        <button type="button" className="button" onClick={onPlayGameAgain}>
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="win-lose" />
    </div>
  )
}
export default WinOrLoseCard
