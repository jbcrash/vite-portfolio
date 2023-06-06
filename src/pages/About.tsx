import React from 'react'
import styled from 'styled-components'

const AboutText = styled.div`
display: flex;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
align-items: center;
justify-content: center;
font-size: 50px;
height: 70vh;
`

const About: React.FunctionComponent = () => {
    return (
        <AboutText>About</AboutText>
    )
}

export default About