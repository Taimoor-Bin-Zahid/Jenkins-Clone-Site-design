import React from 'react'
import iconOne from '../src/Assets/iconOne.png'
import iconTwo from '../src/Assets/iconTwo.png'
import iconThree from '../src/Assets/iconThree.png'
import iconFour from '../src/Assets/iconFour.png'
import iconFive from '../src/Assets/iconFive.png'
import iconSix from '../src/Assets/iconSix.png'
const Test = () => {
  return (
    <div className='container-fluid'>
    <div className='row'>

    <div id='cards' className='col-4'>
      <div className="card mb-3 border-0"  style={{maxWidth:"540px"}}>
<div className="row g-0">
  <div className="col-md-2">
    <img src={iconOne} id="icons" className="img-fluid rounded-start" alt="img"></img>
  </div>
  <div className="col-md-10">
    <div className="card-body">
      <h5 className="card-title">Continuous Integration and Continuous Delivery</h5>
      <p className="card-text">As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.</p>
    </div>
  </div>
</div>
</div>
      </div>

    <div id='cards' className='col-3'>
      <div className="card mb-3 border-0" style={{maxWidth:"540px"}}>
<div className="row g-0">
  <div className="col-md-2">
    <img src={iconTwo} id="icons" className="img-fluid rounded-start" alt="img"></img>
  </div>
  <div className="col-md-10">
    <div className="card-body">
      <h5 className="card-title">Easy installation</h5>
      <p className="card-text">Jenkins is a self-contained Java-based program, ready to run out-of-the-box, with packages for Windows, Linux, and other operating systems.</p>
    </div>
  </div>
</div>
</div>
      </div>

      <div id='cards' className='col-3'>
      <div className="card mb-3 border-0" style={{maxWidth:"540px"}}>
<div className="row g-0">
  <div className="col-md-2">
    <img src={iconThree} id="icons" className="img-fluid rounded-start" alt="img"></img>
  </div>
  <div className="col-md-10">
    <div className="card-body">
      <h5 className="card-title">Easy configuration</h5>
      <p className="card-text">Jenkins can be easily set up and configured via its web interface, which includes on-the-fly error checks and built-in help that is always available.</p>
    </div>
  </div>
</div>
</div>
      </div>

    </div>

                                           {/* Row No 2 */}
    <div className='row'>

    <div id='cardsTwo' className='col-4'>
      <div className="card mb-3 border-0" style={{maxWidth:"540px"}}>
<div className="row g-0">
  <div className="col-md-2">
    <img src={iconFour} id="icons" className="img-fluid rounded-start" alt="img"></img>
  </div>
  <div className="col-md-10">
    <div className="card-body">
      <h5 className="card-title">Plugins</h5>
      <p className="card-text">With hundreds of plugins in the Update Center, Jenkins integrates with practically every tool in the continuous integration and continuous delivery toolchain.</p>
    </div>
  </div>
</div>
</div>
      </div>

    <div id='cardsTwo' className='col-3'>
      <div className="card mb-3 border-0" style={{maxWidth:"540px"}}>
<div className="row g-0">
  <div className="col-md-2">
    <img src={iconFive} id="icons" className="img-fluid rounded-start" alt="img"></img>
  </div>
  <div className="col-md-10">
    <div className="card-body">
      <h5 className="card-title">Extensible</h5>
      <p className="card-text">Jenkins can be extended via its plugin architecture, providing nearly infinite possibilities for what Jenkins can do.</p>
    </div>
  </div>
</div>
</div>
      </div>

      <div id='cardsTwo' className='col-3'>
      <div className="card mb-3 border-0" style={{maxWidth:"540px"}}>
<div className="row g-0">
  <div className="col-md-2">
    <img src={iconSix} id="icons" className="img-fluid rounded-start" alt="img"></img>
  </div>
  <div className="col-md-10">
    <div className="card-body">
      <h5 className="card-title">Distributed</h5>
      <p className="card-text">Jenkins can easily distribute work across multiple machines, helping drive builds, tests and deployments across multiple platforms faster.</p>
    </div>
  </div>
</div>
</div>
      </div>

    </div>


  </div>
  )
}

export default Test