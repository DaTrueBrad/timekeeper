import React from 'react'

function User() {

  //* This function will take in two dates from the database, and find out the hours clocked in. May need to add a decimal cutoff so it doesn't ramble off forever.
  function dateTime(clockInDate, clockOutDate) {
    clockInDate = Date.parse(clockInDate)
    clockOutDate = Date.parse(clockOutDate)
    let difference = clockOutDate - clockInDate
    const time = (difference / (1000 * 60 * 60))
    console.log('Hours:', time)
  }

  function getData() {
    // TODO This willl query the database for all clock-ins under this user. Then we will display all of the info in a table
  }

  function DisplayData() {
    // TODO This will take the data from getData and map through it, creating table rows for each clock in period
  }

  return (
    <div className="page-container">
      <h1>Hi, {localStorage.getItem('name')}!</h1>
      <div className="big-number-container">
        <p className="red-text">Current Hours</p>
        <p className="big-number">64.4</p>
        
      </div>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Project</th>
            <th>Hours</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default User
