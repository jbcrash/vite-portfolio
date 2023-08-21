import React from 'react'
import Nav from '../components/navigation/Nav.tsx'

const PablosPharmacy: React.FunctionComponent = () => {
    return (
        <body>
            <Nav />
        <div style={{display: 'grid', placeContent: 'center' }}>
            <h1>Pablo's Pharmacy</h1>
        </div>
        </body>
    )
}

export default PablosPharmacy