import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import Request from '../Request'

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowId='1' title='UpComing' fetchURL={Request.requestUpcoming}/>
      <Row rowId='2' title='Popular' fetchURL={Request.requestPopular}/>
      <Row rowId='3' title='Trending' fetchURL={Request.requestTrending}/>
      <Row rowId='4' title='Top Rated' fetchURL={Request.requestTopRated}/>
      <Row rowId='5' title='Horror' fetchURL={Request.requestHorror}/>
    </div>
  )
}

export default Home
