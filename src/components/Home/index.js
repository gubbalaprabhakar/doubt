import './index.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: []}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    console.log(updatedData)
    this.setState({teamsList: updatedData})
  }

  render() {
    const {teamsList} = this.state
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <ul className="list-items">
          {teamsList.map(each => (
            <TeamCard key={each.id} item={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
