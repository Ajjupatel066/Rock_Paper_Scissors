import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #223a5f;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  @media screen and (min-width: 768px) {
    width: 70vw;
  }
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid #ffffff;
  padding: 20px;
  background-color: transparent;
  border-radius: 15px;
  width: 100%;
`

export const ChoiceElement = styled.h1`
  font-size: 20px;
  font-family: 'Bree Serif';
  color: #fff;
`

export const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100px;
  border-radius: 10px;
`

export const ScoreText = styled(ChoiceElement)`
  color: #223a5f;
  margin: 0px;
  font-family: 'Roboto';
`
export const ScoreElement = styled(ChoiceElement)`
  color: #223a5f;
  font-size: 40px;
  font-family: 'Roboto';
  font-weight: 600;
  margin: 0px;
`

export const ChoicesImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const RulesButton = styled.button`
  background-color: #fff;
  border-radius: 10px;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 20px;
  padding: 8px 20px;
  cursor: pointer;
`
export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`

export const RulesContainer = styled.div`
  background-color: #fff;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 30px;
`
export const RulesImage = styled.img`
  width: 100%;
  height: 100%;
  text-align: flex-end;
`
export const IconButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #fff2f4;
  border: 0px;
  margin: 10px;
  font-size: 20px;
  cursor: pointer;
`

export const ResultsView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
  width: 100%;
`
export const ResultsOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`
export const PlayAgainButton = styled.button`
  background-color: white;
  color: #223a5f;
  padding: 10px 15px 10px 15px;
  border: none;
  border-radius: 8px;
  font-family: Bree serif;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 15px;
`
export const GameResult = styled.p`
  color: white;
  align-self: center;
  font-size: 24px;
  font-weight: bold;
`
export const HeadingStyle = styled.h1`
  margin-bottom: 5px;
  margin-top: 5px;
  color: white;
`
export const ImageStyle = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 200px;
    margin: 40px;
  }
`
