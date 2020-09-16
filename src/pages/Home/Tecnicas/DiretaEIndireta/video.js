import React from 'react'

function Main({ video, finish }) {
  return (
    <>
      <iframe title="video" width="748" height="421" src={video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </>
  )
}

export default Main
