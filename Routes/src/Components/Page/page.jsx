import {useState} from "react"
import './page.css'

import {routeFinder} from '../routeFinder/routeFinder'

import Countries from './images/countries.png'
import CHRobinson from './images/C.H. Robinson.png'

function HomePage() {

    const[route, setRoute] = useState([]);
    const[destination, setDestination] = useState("")

    //holds options for dropdown meni
    const countries = [
        ["Canada", "CAN"],
        ["MEX", "MEX"],
        ["BLZ", "BLZ"],
        ["GTM", "GTM"],
        ["SLV", "SLV"],
        ["HND", "HND"],
        ["NIC", "NIC"],
        ["CRI", "CRI"],
        ["PAN", "PAN"]
    ]
    const options = [];
    for(const[value, label] of countries) {
        options.push(
            <option key={value} value={value}>
                {label}
            </option>
        )
    }

    return (
        <>
           {/* Header of page with title/name/logo*/}
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
            {/*Contains main content of page including image, input, and output to our algorithm*/}
            <main>
                <div className="content">
                    <img src={Countries} alt="image of North American Countries" />
                    <div className="input">
                        <p>Source: United States</p>
                        <select
                            value={destination}
                            //calls routeFinder from routeFinder.js to compute BFS algorithm to determine fastest route 
                            onChange={(event) => {
                                const selectedDestination = event.target.value
                                setRoute(routeFinder(selectedDestination))
                                setDestination(selectedDestination)
                            }}
                        >
                            {/*Dropdown menu to select destination country from USA*/}
                            <option value="" disabled>Select a Destination</option>
                            {options}
                        </select>
                        {destination && (
                            <h4>Path from USA to {destination}</h4>
                        )}
                        {/*Displays the route from USA to selected country from the dropdown menu*/}
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
