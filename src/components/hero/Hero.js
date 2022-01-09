import React from "react"
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="content">
                <h1>Welcome to our Chalk and Talk World  </h1>
                <div className="section">
                    We are here to help you to overcome your speech,hearing and learning disablities
                </div>
                <div className="allservices">
                    Our services includes 
                    <div className="services" >
                        <h3>speech therapy</h3>
                        <ul className="Speech">
                            <li><a href='#'>S1</a></li>
                            <li><a href='#'>S2</a></li>
                            <li><a href='#'>S3</a></li>
                            <li><a href='#'>S3</a></li>
                        </ul>
                        <h3>Hearing treatments</h3>
                        <ul className="Hearing">
                            <li><a href='#'>H1</a></li>
                            <li><a href='#'>H2</a></li>
                            <li><a href='#'>H3</a></li>
                            <li><a href='#'>H4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Hero