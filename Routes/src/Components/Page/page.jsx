import {useState} from "react"
import './page.css'

import {routeFinder} from '../routeFinder/routeFinder'

import countries from './images/countries.png'
import CHRobinson from './images/C.H. Robinson.png'

function HomePage() {

    const[route, setRoute] = useState([]);
    const[destination, setDestination] = useState("")

    return (
        <>
            <header className="header">
                <a href="https://www.chrobinson.com/en-us/" target="_blank" rel="noopener noreferrer">
                    <img src={CHRobinson} alt="C.H. Robinson Logo" />
                </a>
                <div>
                    <h3>C.H. Robinson Take Home Project</h3>
                    <h4>- By Alexander Dobek</h4> 
                </div>
            </header>
            <hr />
            <main>
                <div className="content">
                    <img src={countries} alt="image of North American Countries" />
                    <div className="input">
                        <p>Source: United States</p>
                        <select
                            onChange={(event) => {
                                const selectedDestination = event.target.value
                                setRoute(routeFinder(selectedDestination))
                                setDestination(event.target.value)
                            }}
                        >
                            <option value="" disabled>Select a Destination</option>
                            <option value="CAN">CAN</option>
                            <option value="MEX">MEX</option>
                            <option value="BLZ">BLZ</option>
                            <option value="GTM">GTM</option>
                            <option value="SLV">SLV</option>
                            <option value="HND">HND</option>
                            <option value="NIC">NIC</option>
                            <option value="CRI">CRI</option>
                            <option value="PAN">PAN</option>
                        </select>
                        {destination && (
                            <h4>Path from USA to {destination}</h4>
                        )}
                        <div className="countries">
                            <ul>
                                {route.map((country) => (
                                    <li key={country}>{country}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage
