import React from 'react'
import imgtwo from '../src/Assets/imgtwo.jpg'
import imgThree from '../src/Assets/imgThree.png'
function Elections() {
  return (


            <div className='container-fluid bg'>
              <div className='row'>
                <div className='col-1'></div>
                <div className='col-4'>
                <p id='TopLeft'>Jenkins Elections 2022</p>
                <p id='TopLeftPara'>The 2022 Jenkins election results are in! There was one nominee for each role, meaning those nominated have been elected!</p>
                <button id='MoreInfoBtn'type="button" className="btn btn-danger">More Info</button>
                </div>
                <div className='col-1'></div>
                <div className='col-5'>
                  <img id="ElectionsImgTwo" src={imgThree} className="img-fluid" alt="Responsive image"></img>
                </div>
                <div className='col-1'></div>
              </div>
            </div>
  )
}

export default Elections;