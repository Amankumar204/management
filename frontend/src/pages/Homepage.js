import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/student.jpg";
import SchoolIcon from '@mui/icons-material/School';

const Homepage = () => {
  return (
    <Background>
      <GlassCard container spacing={3}>
        <Grid item xs={12} md={6}>
          <ImageWrapper>
            <StyledImage src={Students} alt="students illustration" />
          </ImageWrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Content>
            <SchoolIcon fontSize="large" sx={{ color: '#7f56da' }} />
            <Heading>EduSync Portal</Heading>
            <Description>
              Your modern hub for seamless school management. Effortlessly organize classes, monitor performance, track attendance, and collaborate in real-time.
            </Description>
            <ButtonGroup>
              <StyledLink to="/choose">
                <StyledPrimaryButton variant="contained" fullWidth>
                  Login
                </StyledPrimaryButton>
              </StyledLink>
              <StyledLink to="/chooseasguest">
                <StyledOutlinedButton variant="outlined" fullWidth>
                  Login as Guest
                </StyledOutlinedButton>
              </StyledLink>
              <SubText>
                Don't have an account? <Link to="/Adminregister" style={{ color: '#7f56da' }}>Sign up</Link>
              </SubText>
            </ButtonGroup>
          </Content>
        </Grid>
      </GlassCard>
    </Background>
  );
};

export default Homepage;


const Background = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #e0ecff);
  padding: 2rem;
`;

const GlassCard = styled(Grid)`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(15px);
  border-radius: 24px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
`;

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

const Heading = styled.h1`
  font-size: 2.8rem;
  margin-top: 1rem;
  color: #252525;
  font-weight: bold;
`;

const Description = styled.p`
  margin: 1rem 0 2rem;
  text-align: center;
  font-size: 1rem;
  color: #444;
`;

const ButtonGroup = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`;

const StyledPrimaryButton = styled(Button)`
  && {
    background-color: #7f56da;
    color: white;
    font-weight: 600;
    border-radius: 12px;
    padding: 12px;
    text-transform: none;
    &:hover {
      background-color: #6931c4;
    }
  }
`;

const StyledOutlinedButton = styled(Button)`
  && {
    color: #7f56da;
    border-color: #7f56da;
    font-weight: 600;
    border-radius: 12px;
    padding: 12px;
    text-transform: none;
    &:hover {
      background-color: rgba(127, 86, 218, 0.1);
    }
  }
`;

const SubText = styled.p`
  font-size: 0.9rem;
  color: #444;
  margin-top: 1rem;
`;
