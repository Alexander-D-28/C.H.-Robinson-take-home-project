import {useState} from "react"
import './page.css'
import countries from './images/countries.png'
import {routeFinder} from '../routeFinder/routeFinder'

function HomePage() {
    const[route, setRoute] = useState([]);
    return (
        <>
            <header className="header">
                <h3>C.H. Robinson Take Home Project</h3>
                <h4>- By Alexander Dobek</h4>
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
                            }}
                        >
                            <option value="" disabled>Select a Destination</option>
                            <option value="Canada">Canada</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Belize">Belize</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Panama">Panama</option>
                        </select>
                        <p>Route: {route.join(' -> ')}</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage
