import React, { useState }from "react";
import Navbar from "./Navbar";
/*import Thanks from './Thanks';*/
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import "./Intervention.css";
import GetIntervention from "../images/GetIntervention.svg";
import overlay from "../images/overlay.png";
import header from "../images/header.png";

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};


const StyledButton = styled("button")(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-height: calc(1.5em + 30px);
    min-width: 95%;
    @media screen and (min-width: 390px) and (max-width: 767px) {
      min-width: 81%;
      margin-right: 10px;
      margin-top: 13px;
    }
    background: linear-gradient(180deg, #2a7d6c 0%, rgba(62, 105, 96, 0.62) 100%);
    border: 1px solid linear-gradient(180deg, #2a7d6c 0%, rgba(62, 105, 96, 0.62) 100%);
    border-radius: 0.5em;
    margin-left: 15px;
    padding: 10px;
    text-align: left;
    line-height: 1.5;
    color: linear-gradient(180deg, #2a7d6c 0%, rgba(62, 105, 96, 0.62) 100%);
  
    &:hover {
      background: ${theme.palette.mode === "dark" ? "" : grey[100]};
      border-color: ${theme.palette.mode === "dark" ? grey[300] : grey[400]};
    }
  
    &.${selectUnstyledClasses.focusVisible} {
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[200] : blue[100]
      };
    }
  
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '▴';
      }
    }
  
    &::after {
      content: '▾';
      float: right;
    }
    `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 5px;
    margin: 10px 0;
    min-width: 450px;
    background: linear-gradient(180deg, #2a7d6c 0%, rgba(62, 105, 96, 0.62) 100%);
    border: 1px solid linear-gradient(180deg, #2a7d6c 0%, rgba(62, 105, 96, 0.62) 100%);
    border-radius: 0.5em;
    color: linear-gradient(180deg, #2a7d6c 0%, rgba(62, 105, 96, 0.62) 100%);
    overflow: auto;
    outline: 0px;
    `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${
        theme.palette.mode === "dark" ? blue[900] : blue[100]
      };
      color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${
        theme.palette.mode === "dark" ? grey[800] : grey[100]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${
        theme.palette.mode === "dark" ? blue[900] : blue[100]
      };
      color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: linear-gradient(180deg, #2a7d6c 0%, rgba(62, 105, 96, 0.62) 100%);
      color: linear-gradient(180deg, #2a7d6c 0%, rgba(62, 105, 96, 0.62) 100%);
    }
    `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});


const Intervention = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className="header__overlay">
        <img src={overlay} alt="header-overlay" className="header__lay" />
        <div className="header__container">
          <div className="header__content">
            <div className="header__img">
              <img src={header} alt="header-img" className="header__int" />
            </div>
            <Navbar />
          </div>
          <div>
            <p className="header__call_p">
              CALL NOW FOR A CONSULT
              <span className="header__x"> XXX.XXX.XXXX </span>
            </p>
          </div>

          <div className="header__main">
            <div className="header__text">
              <p className="header__get">
                <img
                  src={GetIntervention}
                  alt="intervention__svg"
                  className="header__intervention"
                />
              </p>
              <p className="header__lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br></br>
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                <br></br>
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>

            <div className="header__us">
              <div className="header__form">
                <p className="form__text">Contact Us</p>
                <div className="">
                <form >
                  <Box
                    className="header__box"
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1 /*width: "25ch"*/ },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div className="text__field_1">
                      <TextField
                        className="header__first"
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        
                      />
                      <div className="header__third">
                        <TextField
                          className="header__first"
                          id="outlined-basic"
                          label="Last Name"
                          variant="outlined"
                        />
                      </div>
                    </div>

                    <div className="text__field_2">
                      <TextField
                        className="header__second"
                        id="outlined-basic"
                        label="Business Email"
                        variant="outlined"
                        
                      />
                      <div className="header__third">
                        <TextField
                          className="header__second"
                          id="outlined-basic"
                          label="Company"
                          variant="outlined"
                          
                        />
                      </div>
                    </div>
                  </Box>
                  <CustomSelect
                    defaultValue="country"
                    className="header__select"
                  >
                    <StyledOption value="London">London</StyledOption>
                    <StyledOption value="Italy">Italy</StyledOption>
                    <StyledOption value="Belgium">Belgium</StyledOption>
                    <StyledOption value="France">France</StyledOption>
                    <StyledOption value="USA">USA</StyledOption>
                    <StyledOption value="Canada">Canada</StyledOption>
                    <StyledOption value="UK">UK</StyledOption>
                    <StyledOption value="Germany">Germany</StyledOption>
                    <StyledOption value="Poland">Poland</StyledOption>
                    <StyledOption value="Netherlands">Netherlands</StyledOption>
                  </CustomSelect>

                  <Stack direction="row" spacing={3}>
                    <Button
                      /*variant="contained"*/
                      startIcon={<SendIcon className="send__icon" />}
                      id="header__button"
                      onClick={handleOpen}
                    >
                      Submit
                    </Button>
                  </Stack>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intervention;
