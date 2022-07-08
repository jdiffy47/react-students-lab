const Score = (props) => {
  return ( 
    <>
      <h4>Date: {props.scoreData.date}</h4>
      <h4>Score: {props.scoreData.score}</h4>
    </>
  )
}

export default Score;