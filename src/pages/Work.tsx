import React from 'react'
import '../styles.css';
import Nav from '../components/navigation/Nav.tsx'
import Card from '../components/Card.tsx'
import kalsMockup from '../assets/kalsMockup.png'
import sizzlyKMockup from '../assets/sizzlyKMockup.png'
import petersMockup from '../assets/petersMockup.png'
import legitThumbnail from '../assets/IsItLegitThumbnail.png'

const Work: React.FunctionComponent = () => {
  return (
    <div style={{position: 'relative', top: '20vw'}}>
      <h1 style={{top: '-4em', position: 'relative'}}>Digital Instruction</h1>
      <Card 
        imageUrl={legitThumbnail}
        title='Is It Legit? Ad Campaign'
        description='Education is the best form of scam prevention.'
        link='/is-it-legit' />
      <h1 style={{top: '-4em', position: 'relative'}}>UX Design</h1>
      <Card 
        imageUrl={kalsMockup}
        title='Kneehill Adult Learning Mobile Redesign'
        description='Redesigning for a responsive mobile experience.'
        link='/kals' />
      <Card 
        imageUrl={sizzlyKMockup}
        title='Sizzly K BBQ Mobile App Example'
        description='Making mobile ordering effortless.'
        link='/sizzly-k' />
      <Card 
        imageUrl={petersMockup}
        title="Peter's Pharmacy Website"
        description='A more accessible pharmacy experience'
        link='/peters-pharmacy' />
    <Nav />
    </div> 
  )
}

export default Work