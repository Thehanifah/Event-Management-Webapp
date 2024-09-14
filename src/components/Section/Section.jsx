import React from 'react'
import './Section.css'


function Section() {
  return (
   <>
      <div className='First-section-div'>
         <img src="/Rectangle 17.png"alt="image" className='image-section' /> 

         <h2 style={{ marginTop: '50px', paddingTop: '', marginTop: '0' }}>
            Maximize Your Impact <br></br>with Peak Planner
         </h2>
      </div>

    

      <div className='section-container-'>
           <div className='row'>
                <div className='Section-container'style={{ backgroundColor: '#5DFFC3',border:'none', }}>
                  <h5>Drive attendee engagement</h5>
                  <p>Encourage interaction and build a thrive event community.</p>
               </div>
    
              <div className='Section-container'style={{ border:'2px solid #5DFFC3', }} >
                 <h5>Focus on what matters</h5>
                 <p>Spend less time on logistics and more time creating unforgetable experience.</p>
               </div>
           </div>
           <div className='row'>
                <div className='Section-container' style={{ border:'2px solid #0873c0', }}>
                    <h5>Manage hybrid and digital experience</h5>
                    <p>Deliver an exceptional event experience no matter the format.</p>
                </div>
                <div className='Section-container' style={{ backgroundColor: '#5DFFC3',border:'none', }}>
                     <h5>Gain Valuable insight</h5>
                      <p>Measure success, gather insight and refine your approach for future events.</p>
                 </div>
             </div>    
      </div>
    
    
    
    </>
  )
}

export default Section
