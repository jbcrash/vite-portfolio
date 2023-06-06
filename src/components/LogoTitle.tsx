import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    position: absolute;
    top: 20px;
    left: 20px;

`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 10px;
`;

const LogoTitle: React.FC = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Container>
        <img src='src\assets\jblogo.svg' />
        <Title>Josh Bellingham</Title>
      </Container>
    </Link>
  );
};

export default LogoTitle;
