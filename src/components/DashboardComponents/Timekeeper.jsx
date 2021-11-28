import axios from 'axios'
import React, {useEffect, useState} from 'react'
import timestamp from 'time-stamp'

function Timekeeper() {
  const [data, setData] = useState()
  const [clock, setClock] = useState(false)
  const [punch, setPunch] = useState()
  const [project, setProject] = useState()

  function handleChange(e) {
    setProject(e.target.value)
  }
  // TODO NEED TO CREATE A CLOCKOUT BUTTON
  // TODO FIND A WAY TO HIDE THE SELECT INPUT AFTER THEY CLOCK IN
  const buttonClick = async () => {
    if(clock) {
      let timePunch = timestamp(`YYYY/MM/DD HH:mm:ss`)
      setClock(!clock)
      console.log(timePunch)
      setPunch(timePunch)
      let userId = localStorage.getItem('user')
      let id = localStorage.getItem('currentProject')
      let bodyObj = {
        punch: timePunch,
        project: project,
        user: userId,
        id: id
      }
      await axios.post('/clockOut', bodyObj)
      .then((res) => {
        localStorage.removeItem('currentProject')
      })
    } else {
      let timePunch = timestamp(`YYYY/MM/DD HH:mm:ss`)
      setClock(!clock)
      console.log(timePunch)
      setPunch(timePunch)
      let id = localStorage.getItem('user')
      let bodyObj = {
        punch: timePunch,
        project: project,
        user: id,
      }
      await axios.post('/clockIn', bodyObj)
      .then((res) => localStorage.setItem("currentProject", res.data[0][0].id))
    }
    
  };

  const getData = () => {
    axios.get('/projects')
    .then((res) => {
      setData(res.data[0])
      console.log("State:", data)
    })
  }
  const DisplayData = () => {
    return (
      <select value={project} onChange={(e) => handleChange(e)}>
        <option value="">Pick a Project</option>
        {data.map((element, index) => <option value={element.id}>{element.id}</option>)}
      </select>
      )
    }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="page-container">
      <h1>{clock ? `Clocked into ${project}` : 'Ready to Clock In!'}</h1>
      <h2>{clock ? `at ${punch}` : ''}</h2>
      {data ? <DisplayData /> : <p></p>}
      <button onClick={buttonClick}>Clock In</button>
    </div>
  )
}

export default Timekeeper
