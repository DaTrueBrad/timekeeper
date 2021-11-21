import React from 'react'

function User() {
  return (
    <div className="page-container">
      <h1>Hi, Miguel!</h1>
      <div className="big-number-container">
        <p className="red-text">Current Take:</p>
        <p className="big-number">$1,126</p>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Money</th>
          </tr>
          <tr>
            <td>12/21/21</td>
            <td>8:36am<br></br>5:25pm</td>
            <td>$167</td>
          </tr>
          <tr>
            <td>12/21/21</td>
            <td>8:36am<br></br>5:25pm</td>
            <td>$167</td>
          </tr>
          <tr>
            <td>12/21/21</td>
            <td>8:36am<br></br>5:25pm</td>
            <td>$167</td>
          </tr>
          <tr>
            <td>12/21/21</td>
            <td>8:36am<br></br>5:25pm</td>
            <td>$167</td>
          </tr>
    
        </tbody>
      </table>
    </div>
  )
}

export default User
