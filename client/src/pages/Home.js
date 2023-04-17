import React from 'react'
import UserComponent from '../components/UserComponent'
import TimeLineComponent from '../components/TimeLineComponent'
import DayDComponent from '../components/DayDComponent'

const Home = () => {
  return (
    <div className='wrapper'>
      <div className='userCon'>
        <UserComponent />
      </div>
      <div className='cirIcon'></div>
      <p>Admin / Employees / Tech Inject </p>
      <div className='Container'>
        <div className='timeContainer'>
          <TimeLineComponent />
        </div>
        <div className='dayContainer'>
          <DayDComponent />
        </div>
      </div>
    </div>
  )
}

export default Home
