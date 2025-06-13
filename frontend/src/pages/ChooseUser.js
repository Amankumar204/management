import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Backdrop,
  Box,
} from '@mui/material';
import { AccountCircle, School, Group } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';
import styled from 'styled-components';

const ChooseUser = ({ visitor }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const password = "zxc";

  const { status, currentUser, currentRole } = useSelector(state => state.user);

  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = (role) => {
    setLoader(true);
    if (visitor === "guest") {
      let fields;
      if (role === "Admin") {
        fields = { email: "yogendra@12", password };
      } else if (role === "Student") {
        fields = { rollNum: "1", studentName: "Dipesh Awasthi", password };
      } else if (role === "Teacher") {
        fields = { email: "tony@12", password };
      }
      dispatch(loginUser(fields, role));
    } else {
      navigate(`/${role}login`);
    }
  };

  useEffect(() => {
    if (status === 'success' || currentUser) {
      navigate(`/${currentRole}/dashboard`);
    } else if (status === 'error') {
      setLoader(false);
      setMessage("Login failed. Please try again.");
      setShowPopup(true);
    }
  }, [status, currentUser, currentRole, navigate]);

  return (
    <PageWrapper>
      <Container maxWidth="lg">
        <Title>Choose Your Role</Title>
        <Grid container spacing={4} justifyContent="center">
          {roles.map(({ label, icon, roleKey }) => (
            <Grid item xs={12} sm={6} md={4} key={roleKey}>
              <StyledCard onClick={() => handleClick(roleKey)}>
                <CardContent>
                  <IconWrapper>{icon}</IconWrapper>
                  <Typography variant="h5" component="div">{label}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {descriptions[roleKey]}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Backdrop open={loader} sx={{ color: '#fff', zIndex: 9999 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
    </PageWrapper>
  );
};

export default ChooseUser;

// Role Details
const roles = [
  {
    label: "Admin",
    icon: <AccountCircle sx={{ fontSize: 50 }} />,
    roleKey: "Admin"
  },
  {
    label: "Student",
    icon: <School sx={{ fontSize: 50 }} />,
    roleKey: "Student"
  },
  {
    label: "Teacher",
    icon: <Group sx={{ fontSize: 50 }} />,
    roleKey: "Teacher"
  }
];

const descriptions = {
  Admin: "Manage users, courses and settings.",
  Student: "Access lessons, materials, and submit work.",
  Teacher: "Create content, manage classes and review students."
};

// Styled Components
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #ffffff;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

const StyledCard = styled(Card)`
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const IconWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

  