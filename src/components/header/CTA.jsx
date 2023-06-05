import React from 'react'
import CV from'../../assets//Mon_CV.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download my CV</a>
        <a href='#contact' className='btn btn-primary'>Hey, let's talk</a>
    </div>
  )
}

export default CTA