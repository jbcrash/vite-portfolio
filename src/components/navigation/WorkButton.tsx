import React from 'react';
import './WorkButton.css';
import { Link } from 'react-router-dom'

const WorkButton: React.FC = () =>
    <div>
        <Link to='/work'><button className='workbutton'>See My Work</button></ Link>
    </div>

export default WorkButton