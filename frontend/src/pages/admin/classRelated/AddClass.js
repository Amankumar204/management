import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addStuff } from '../../../redux/userRelated/userHandle';
import { underControl } from '../../../redux/userRelated/userSlice';
import { BlueButton } from "../../../components/buttonStyles";
import Popup from "../../../components/Popup";
import Classroom from "../../../assets/classroom.png";
import styled from "styled-components";

const AddClass = () => {
  const [sclassName, setSclassName] = useState("");
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, currentUser, response, error, tempDetails } = useSelector(state => state.user);

  const adminID = currentUser._id;
  const address = "Sclass";

  const fields = { sclassName, adminID };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoader(true);
    dispatch(addStuff(fields, address));
  };

  useEffect(() => {
    if (status === 'added' && tempDetails) {
      navigate("/Admin/classes/class/" + tempDetails._id);
      dispatch(underControl());
      setLoader(false);
    } else if (status === 'failed') {
      setMessage(response);
      setShowPopup(true);
      setLoader(false);
    } else if (status === 'error') {
      setMessage("Network Error");
      setShowPopup(true);
      setLoader(false);
    }
  }, [status, navigate, error, response, dispatch, tempDetails]);

  return (
    <>
      <StyledContainer>
        <Card>
          <Stack spacing={2} alignItems="center">
            <img src={Classroom} alt="classroom" style={{ width: '70%' }} />
            <Typography variant="h5" fontWeight={600}>Create New Class</Typography>
          </Stack>

          <StyledForm onSubmit={submitHandler}>
            <TextField
              label="Class Name"
              variant="outlined"
              fullWidth
              value={sclassName}
              onChange={(e) => setSclassName(e.target.value)}
              required
            />
            <BlueButton
              fullWidth
              size="large"
              sx={{ mt: 2 }}
              variant="contained"
              type="submit"
              disabled={loader}
            >
              {loader ? <CircularProgress size={24} color="inherit" /> : "Create"}
            </BlueButton>
            <Button
              variant="text"
              onClick={() => navigate(-1)}
              sx={{ mt: 1, color: "#555" }}
            >
              Go Back
            </Button>
          </StyledForm>
        </Card>
      </StyledContainer>
      <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
    </>
  );
};

export default AddClass;

// -------------------- Styled Components --------------------

const StyledContainer = styled(Box)`
  flex: 1 1 auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #f8f9fc, #eef1f5);
`;

const Card = styled(Box)`
  width: 100%;
  max-width: 500px;
  padding: 3rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
`;

const StyledForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
