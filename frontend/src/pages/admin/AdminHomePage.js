import { Container, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import { FaUserGraduate, FaChalkboardTeacher, FaMoneyCheckAlt, FaSchool } from 'react-icons/fa';

import { getAllSclasses } from '../../redux/sclassRelated/sclassHandle';
import { getAllStudents } from '../../redux/studentRelated/studentHandle';
import { getAllTeachers } from '../../redux/teacherRelated/teacherHandle';
import SeeNotice from '../../components/SeeNotice';

const AdminHomePage = () => {
  const dispatch = useDispatch();
  const { studentsList } = useSelector((state) => state.student);
  const { sclassesList } = useSelector((state) => state.sclass);
  const { teachersList } = useSelector((state) => state.teacher);
  const { currentUser } = useSelector((state) => state.user);

  const adminID = currentUser._id;

  useEffect(() => {
    dispatch(getAllStudents(adminID));
    dispatch(getAllSclasses(adminID, 'Sclass'));
    dispatch(getAllTeachers(adminID));
  }, [adminID, dispatch]);

  const metrics = [
    { title: 'Enrolled', value: studentsList?.length || 0, icon: <FaUserGraduate size={40} /> },
    { title: 'Classes', value: sclassesList?.length || 0, icon: <FaSchool size={40} /> },
    { title: 'Faculty', value: teachersList?.length || 0, icon: <FaChalkboardTeacher size={40} /> },
    { title: 'Revenue', value: 23000, prefix: "$", icon: <FaMoneyCheckAlt size={40} /> },
  ];

  return (
    <Wrapper>
      <Grid>
        {metrics.map((item, i) => (
          <GlassCard key={i}>
            <IconWrapper>{item.icon}</IconWrapper>
            <Label>{item.title}</Label>
            <Number>
              <CountUp start={0} end={item.value} duration={2.5} prefix={item.prefix || ''} />
            </Number>
          </GlassCard>
        ))}
      </Grid>

      <NoticeSection elevation={3}>
        <NoticeTitle>📢 Announcements</NoticeTitle>
        <SeeNotice />
      </NoticeSection>
    </Wrapper>
  );
};

export default AdminHomePage;

// Styled Components
const Wrapper = styled(Container)`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const GlassCard = styled(Paper)`
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 1.8rem;
  color: #fff;
  text-align: center;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
`;

const IconWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`;

const Number = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

const NoticeSection = styled(Paper)`
  background: #f4f6fb;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
`;

const NoticeTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

