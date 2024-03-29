import React, { useEffect, useState } from 'react'

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = useState({
    title: '',
    content: [],
    imageUrl: '',
  })

  useEffect(() => {
    fetch('/about-us')
      .then(res => res.json())
      .then(data => {
        setAboutUsData(data)
      })
      .catch(error => console.error('Error fetching About Us data:', error))
  }, [])

  return (
    <div>
      <h1>{aboutUsData.title}</h1>
      <img
        src={aboutUsData.imageUrl}
        alt="About Us"
        style={{ maxWidth: '25%' }}
      />
      {aboutUsData.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  )
}

export default AboutUs
