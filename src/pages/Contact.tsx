import React from 'react'
import styled from 'styled-components'

const ContactText = styled.div`
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

const Contact: React.FunctionComponent = () => {
    return (
        <ContactText>Contact</ContactText>
    )
}

export default Contact