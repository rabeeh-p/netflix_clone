import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import Request from '../Request'

const Home = () => {
  return (
    <div>
      <Main />
      <Row title='UpComing' fetchURL={Request.requestUpcoming}/>
      <Row title='Popular' fetchURL={Request.requestPopular}/>
      <Row title='Trending' fetchURL={Request.requestTrending}/>
      <Row title='Top Rated' fetchURL={Request.requestTopRated}/>
      <Row title='Horror' fetchURL={Request.requestHorror}/>
    </div>
  )
}

export default Home
