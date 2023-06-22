import React from 'react'

const Backend = () => {
  return (
    <>
    <div className='skills__content'>
        <h3 className='skills__title'>
            <i className='uil uil-server-connection'></i> Backend Development</h3>

        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3  className='skills__name'>NodeJS</h3>
                        <span  className='skills__level'>Intermediate</span>
                    </div>
                </div>

                <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3  className='skills__name'>MongoDB</h3>
                            <span  className='skills__level'>Intermediate</span>
                        </div>
                </div>
                <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3  className='skills__name'>Postman</h3>
                            <span  className='skills__level'>Intermediate</span>
                        </div>
                </div>       
            </div>
        </div>
    </div>
    <div className='skills__content'>
        <h3 className='skills__title'>
        <i className='uil uil-desktop-alt'></i> Data Structures and Algorithms</h3>

        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3  className='skills__name'>C++</h3>
                        <span  className='skills__level'>Basic</span>
                    </div>
                </div>      
            </div>
        </div>
    </div>
    </>
  )
}

export default Backend