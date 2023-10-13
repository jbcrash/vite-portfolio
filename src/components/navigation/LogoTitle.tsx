import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css'
import styled from 'styled-components';
import ThemeContext from '../../ThemeContext';
import JBLogoWhite from 'src/assets/jblogo-white.svg';
import JBLogoBlack from 'src/assets/jblogo-black.svg';

const Container = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    position: fixed;
    top: 0.5rem;
    left: 1rem;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-left: 0.25rem;
`;

const LogoTitle: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const logoSrc = themeContext.theme === 'dark' ? JBLogoWhite : JBLogoBlack;

  return (
    <div>
    <Link to="/" className='no-hover' style={{ textDecoration: 'none' }}>
      <Container>
        <img src={logoSrc} alt="JB Logo" />
        <Title className='responsive-hide'>Josh Bellingham</Title>
      </Container>
    </Link>
    </div>
  );
};

export default LogoTitle;
