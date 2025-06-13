import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Home as HomeIcon,
  PersonOutline as StudentIcon,
  ExitToApp as LogoutIcon,
  AccountCircle as ProfileIcon,
  Announcement as NoticeIcon,
  Class as ClassIcon,
  SupervisorAccount as TeacherIcon,
  Report as ComplaintIcon,
  Assignment as SubjectIcon
} from '@mui/icons-material';
import { Box } from '@mui/material';
import styled from 'styled-components';

const menuItems = [
  { name: 'Dashboard', path: '/', icon: <HomeIcon /> },
  { name: 'Classes', path: '/Admin/classes', icon: <ClassIcon /> },
  { name: 'Subjects', path: '/Admin/subjects', icon: <SubjectIcon /> },
  { name: 'Teachers', path: '/Admin/teachers', icon: <TeacherIcon /> },
  { name: 'Students', path: '/Admin/students', icon: <StudentIcon /> },
  { name: 'Notices', path: '/Admin/notices', icon: <NoticeIcon /> },
  { name: 'Complaints', path: '/Admin/complains', icon: <ComplaintIcon /> },
  { name: 'Profile', path: '/Admin/profile', icon: <ProfileIcon /> },
  { name: 'Logout', path: '/logout', icon: <LogoutIcon /> }
];

const SideBar = () => {
  const location = useLocation();

  return (
    <SidebarContainer>
      {menuItems.map((item) => (
        <SidebarLink
          key={item.name}
          to={item.path}
          className={location.pathname === item.path ? 'active' : ''}
        >
          <div className="icon">{item.icon}</div>
          <div className="label">{item.name}</div>
        </SidebarLink>
      ))}
    </SidebarContainer>
  );
};

export default SideBar;

// Styled components
const SidebarContainer = styled(Box)`
  background: #060b1a;
  color: #ffffff;
  width: 220px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0.75rem;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.5);
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.65rem 1rem;
  margin: 0.25rem 0;
  text-decoration: none;
  border-radius: 10px;
  font-family: 'Segoe UI', sans-serif;
  color: #a0b4ff;
  transition: all 0.3s ease-in-out;

  .icon {
    font-size: 1.4rem;
  }

  .label {
    font-size: 0.95rem;
  }

  &:hover {
    background: rgba(30, 60, 120, 0.25);
    color: #4aa8ff;
    transform: translateX(5px);
  }

  &.active {
    background: rgba(74, 168, 255, 0.15);
    color: #4aa8ff;
    font-weight: 600;
    box-shadow: 0 0 8px rgba(74, 168, 255, 0.5);
  }
`;
