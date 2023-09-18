import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import ChoiceItem from '../ChoiceItem'

import {
  MainContainer,
  ResponsiveContainer,
  ScoreContainer,
  ChoiceElement,
  ScoreBox,
  ScoreText,
  ScoreElement,
  ChoicesImagesContainer,
  RulesButton,
  PopUpContainer,
  RulesContainer,
  RulesImage,
  IconButton,
  ResultsView,
  ResultsOptionContainer,
  HeadingStyle,
  GameResult,
  ImageStyle,
  PlayAgainButton,
} from './styledComponents'

class Game extends Component {
  state = {
    score: 0,
    userOptionUrl: '',
    OpponentUrl: '',
    resultDisplay: false,
    gameCondition: '',
  }

  playAgain = () => {
    this.setState({resultDisplay: false})
  }

  selectChoice = (id, imageUrl) => {
    const {choicesList} = this.props
    const randomId = Math.floor(Math.random() * 3)
    const opponentOption = choicesList[randomId]

    if (id === 'SCISSORS') {
      if (opponentOption.id === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'WON',
        }))
      } else if (opponentOption.id === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'LOSE',
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'IT IS DRAW',
        }))
      }
    } else if (id === 'PAPER') {
      if (opponentOption.id === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'WON',
        }))
      } else if (opponentOption.id === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'LOSE',
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'IT IS DRAW',
        }))
      }
    } else if (id === 'ROCK') {
      if (opponentOption.id === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'WON',
        }))
      } else if (opponentOption.id === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'LOSE',
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score,
          userOptionUrl: imageUrl,
          OpponentUrl: opponentOption.imageUrl,
          resultDisplay: true,
          gameCondition: 'IT IS DRAW',
        }))
      }
    }
  }

  render() {
    const {choicesList} = this.props
    const {
      score,
      userOptionUrl,
      resultDisplay,
      OpponentUrl,
      gameCondition,
    } = this.state
    return (
      <MainContainer>
        <ResponsiveContainer>
          <ScoreContainer>
            <ChoiceElement>
              Rock <br /> Paper <br /> Scissors
            </ChoiceElement>

            <ScoreBox as="div">
              <ScoreText as="p">Score</ScoreText>
              <ScoreElement as="p">{score}</ScoreElement>
            </ScoreBox>
          </ScoreContainer>

          {!resultDisplay && (
            <ChoicesImagesContainer>
              {choicesList.map(eachElement => (
                <ChoiceItem
                  key={eachElement.id}
                  choiceDetails={eachElement}
                  selectChoice={this.selectChoice}
                />
              ))}
            </ChoicesImagesContainer>
          )}

          {resultDisplay && (
            <ResultsView>
              <ResultsOptionContainer>
                <HeadingStyle>YOU</HeadingStyle>
                <ImageStyle alt="your choice" src={userOptionUrl} />
              </ResultsOptionContainer>
              <ResultsOptionContainer>
                <HeadingStyle>OPPONENT</HeadingStyle>
                <ImageStyle alt="opponent choice" src={OpponentUrl} />
              </ResultsOptionContainer>
              <ResultsOptionContainer>
                {gameCondition === 'IT IS DRAW' ? (
                  <GameResult>IT IS DRAW</GameResult>
                ) : (
                  <GameResult>YOU {gameCondition}</GameResult>
                )}
                <PlayAgainButton onClick={this.playAgain}>
                  PLAY AGAIN
                </PlayAgainButton>
              </ResultsOptionContainer>
            </ResultsView>
          )}

          <PopUpContainer>
            <Popup
              modal
              trigger={<RulesButton type="button">Rules</RulesButton>}
            >
              {close => (
                <RulesContainer>
                  <IconButton type="button" onClick={close}>
                    <RiCloseLine />
                  </IconButton>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </RulesContainer>
              )}
            </Popup>
          </PopUpContainer>
        </ResponsiveContainer>
      </MainContainer>
    )
  }
}

export default Game
