import React from "react"
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="content">
                <h1>Welcome to our Chalk and Talk World  </h1>
                <div className="section">
                  We work closely to assess hearing and speech problems, diagnosing and recommending a plan to tackle them.
                  Qualified and skilled speech-language therapists and audiologists who evaluate and treat patients suffering from language, speech and fluency problems.
                  We can diagnose, test and treat people suffering from speech pathology problems. 
                  If there are any underlying medical problems to speech and pathology issues that would also be identified and corresponding treatment started along with speech and hearing therapy. 
                  Oral motor, cognitive-linguistic, swallowing, hearing, speech, and even language disorders might actually be the result of neurological events which would be identified and and treatment suggested. 
                  Speech therapists would conduct standard language tests coupled with cognitive-linguistic tests to provide accurate treatment to the patients. 
                  
                </div>
                <div className="allservices">
                    Our services includes 
                    <div className="services" >
                        <h3>speech therapy</h3>
                        <ul className="Speech">
                            <li>S1</li>
                            <li>S2</li>
                            <li>S3</li>
                            <li>S4</li>
                        </ul>
                        <h3>Hearing treatments</h3>
                        <ul className="Hearing">
                            <li>H1</li>
                            <li>H2</li>
                            <li>H3</li>
                            <li>H4</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Hero