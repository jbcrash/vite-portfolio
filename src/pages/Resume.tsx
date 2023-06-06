import React from 'react'
import styled from 'styled-components'

const ResumeText = styled.div`
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

const Resume: React.FunctionComponent = () => {
    return (
        <ResumeText>Resume</ResumeText>
    )
}

export default Resume