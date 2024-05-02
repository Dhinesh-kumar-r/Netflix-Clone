import React from 'react'

function Land4() {
  return (
    <>
    <div className='section'>
        <div className='container-4 medium-container'>
            <div  className='container-4-part-1 medium-part-1'>
                <span className='heading head'>Watch everywhere</span>
                <span className='para'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</span>
            </div>
            <div className='videos-part-3 medium-part-2'>
            <div className='container-4-part-2'>
                <div className='video-2'>
                    <video autoPlay loop width={"320px"}>
                        <source src='./tv-video-2.mp4' type='video/mp4'></source>
                    </video>
                </div>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt='tv-pic' width={"500px"} className='tv-2'></img>
            </div>
            </div>
        </div>
    </div>
    <div className="bottom"></div>
    </>
  )
}

export default Land4