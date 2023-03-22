import './index.css'

const EmojiCard = props => {
  const {emojiDetails, changeEmoji} = props
  const {emojiUrl, emojiName, id} = emojiDetails

  const onClickEmoji = () => {
    changeEmoji(id)
  }
  return (
    <li className="emoji-item">
      <button type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
