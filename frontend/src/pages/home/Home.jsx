import Banner from './Banner'
import News from './News'
import Recommended from './Recommended'
import TopSallers from './TopSallers'

const Home = () => {
  return (
    <>
      <Banner />
      <TopSallers />
      <Recommended />
      <News />
    </>
  )
}

export default Home