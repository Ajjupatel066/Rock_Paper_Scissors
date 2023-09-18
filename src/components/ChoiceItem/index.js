import {ChoiceImage, ChoiceButton} from './styledComponents'

const ChoiceItem = props => {
  const {choiceDetails, selectChoice} = props
  const {id, imageUrl} = choiceDetails

  const onClickChoice = () => {
    selectChoice(id, imageUrl)
  }

  return (
    <ChoiceButton
      data-testid={`${id.toLowerCase()}Button`}
      type="button"
      onClick={onClickChoice}
    >
      <ChoiceImage src={imageUrl} alt={id} />
    </ChoiceButton>
  )
}

export default ChoiceItem
