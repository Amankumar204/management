import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { FaSchool, FaEnvelope, FaUser } from 'react-icons/fa';

const AdminProfile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Wrapper>
      <FrostCard elevation={4}>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            bgcolor: '#5e17eb',
            mb: 2,
            fontSize: '2rem',
            fontWeight: 700,
          }}
        >
          {currentUser?.name?.charAt(0).toUpperCase() || 'U'}
        </Avatar>

        <Typography variant="h5" sx={{ fontFamily: 'monospace', mb: 2 }}>
          Admin Profile
        </Typography>

        <Detail>
          <FaUser style={{ marginRight: 8 }} />
          <span>{currentUser.name}</span>
        </Detail>
        <Detail>
          <FaEnvelope style={{ marginRight: 8 }} />
          <span>{currentUser.email}</span>
        </Detail>
        <Detail>
          <FaSchool style={{ marginRight: 8 }} />
          <span>{currentUser.schoolName}</span>
        </Detail>
      </FrostCard>
    </Wrapper>
  );
};

export default AdminProfile;

// Styled components
const Wrapper = styled(Box)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #100f1f, #261b3b);
`;

const FrostCard = styled(Paper)`
  padding: 2.5rem;
  text-align: center;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  color: #ffffff;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  width: 340px;
`;

const Detail = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0;
  font-family: monospace;
  font-size: 1rem;
`;

