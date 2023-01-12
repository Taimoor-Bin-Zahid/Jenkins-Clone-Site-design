import React from 'react'
import img from '../src/Assets/img.svg'
function About() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-2'></div>
            <div id='AboutImage' className='col-md-4'>
            <img id='imageOne' src={img} className="img-fluid" alt="Responsive image"></img>
            </div>
            <div id='about' className='col-md-4'>
                <span id='aboutHeading'>Jenkins</span>
                <p id='LineOne'>Build great things at any scale</p>
                <p className='LineTwo'>The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project.</p>
                <p className='LineTwo'> We stand with the people of Ukraine. Please assist humanitarian efforts for the Ukrainian people and those affected by the military invasion of Ukraine by supporting international aid organizations, including the International Committee of the Red Cross</p>
                <button type="button" className="btn btn-secondary">Documentation</button>
                <button id='secondBtn'type="button" className="btn btn-danger">Download</button>
            </div>
            <div className='col-md-2'></div>
        </div>

    </div>
  )
}

export default About;