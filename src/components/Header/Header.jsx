import React from "react";
import {
  StyledContainer,
  StyledHeader,
  StyledImg,
  StyledLeftContainer,
  StyledLink,
  StyledMenuItem,
  StyledRightContainer,
  StyledSelector,
  StyledUl,
} from "./styled";
import { StyledButton } from "../Button/styled";
import { StyledDiv } from "../SectionTable/styled";
import { signOut } from "aws-amplify/auth";

const Header = () => {
  const [region, setRegion] = React.useState("");

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLeftContainer>
          <StyledLink href="#" className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="128" height="18" viewBox="0 0 128 18" fill="none">
            <path d="M39.0362 17.8483L35.7269 13.1061C35.5213 13.1318 35.3093 13.1318 35.1036 13.1318H31.4474V17.8483H28.4402V1.65552H35.1036C39.3575 1.65552 41.9984 3.82741 41.9984 7.41295C41.9984 9.86757 40.7518 11.6668 38.5542 12.5214L42.2747 17.8419H39.0362V17.8483ZM34.9623 4.2001H31.4474V10.6515H34.9623C37.5968 10.6515 38.9655 9.4499 38.9655 7.41295C38.9655 5.376 37.6032 4.2001 34.9623 4.2001Z" fill="#231F20"/>
            <path d="M56.6426 12.5987H46.9526C47.2996 14.4043 48.8032 15.561 50.9558 15.561C52.3438 15.561 53.4297 15.124 54.31 14.218L55.8586 15.9979C54.747 17.3152 53.012 18.0091 50.8851 18.0091C46.747 18.0091 44.061 15.3489 44.061 11.6734C44.061 7.9979 46.7663 5.35693 50.4482 5.35693C54.1301 5.35693 56.694 7.87581 56.694 11.7377C56.694 11.969 56.6683 12.316 56.649 12.5923L56.6426 12.5987ZM46.9269 10.6774H53.9373C53.706 8.8975 52.3438 7.67019 50.4418 7.67019C48.5398 7.67019 47.2032 8.87179 46.9269 10.6774Z" fill="#231F20"/>
            <path d="M59.0715 1.72615C59.0715 0.75587 59.8555 -0.00878906 60.9221 -0.00878906C61.9888 -0.00878906 62.7727 0.71089 62.7727 1.65547C62.7727 2.67073 62.0081 3.46109 60.9221 3.46109C59.8362 3.46109 59.0715 2.69643 59.0715 1.72615ZM59.4635 5.49804H62.3551V17.8482H59.4635V5.49804Z" fill="#231F20"/>
            <path d="M86.8048 10.7671V17.8418H83.9132V11.1333C83.9132 8.93573 82.898 7.86906 81.1373 7.86906C79.2417 7.86906 77.9245 9.11565 77.9245 11.5703V17.8353H75.0329V11.1269C75.0329 8.9293 74.0176 7.86264 72.257 7.86264C70.3357 7.86264 69.0442 9.10922 69.0442 11.5638V17.8289H66.1526V5.49798H68.9028V7.07227C69.8281 5.96063 71.261 5.36304 72.951 5.36304C74.7566 5.36304 76.2602 6.03131 77.1148 7.41926C78.1108 6.14697 79.7751 5.36304 81.7413 5.36304C84.7229 5.36304 86.8048 7.053 86.8048 10.7735V10.7671Z" fill="#231F20"/>
            <path d="M103.621 11.6733C103.621 15.5158 100.961 18.009 97.3558 18.009C95.6659 18.009 94.2329 17.4307 93.2627 16.2484V17.8419H90.5125V0.685303H93.404V7.00177C94.4 5.89012 95.788 5.35679 97.3623 5.35679C100.973 5.35679 103.627 7.83068 103.627 11.6733H103.621ZM100.684 11.6733C100.684 9.31502 99.11 7.81141 97.0281 7.81141C94.9462 7.81141 93.3526 9.31502 93.3526 11.6733C93.3526 14.0315 94.9462 15.5351 97.0281 15.5351C99.11 15.5351 100.684 14.0315 100.684 11.6733Z" fill="#231F20"/>
            <path d="M113.523 5.35693V8.10713C113.266 8.06215 113.06 8.03645 112.855 8.03645C110.657 8.03645 109.269 9.33444 109.269 11.8533V17.8421H106.378V5.4983H109.128V7.30392C109.963 6.00593 111.467 5.36336 113.523 5.36336V5.35693Z" fill="#231F20"/>
            <path d="M114.84 11.6734C114.84 7.97219 117.616 5.35693 121.407 5.35693C125.198 5.35693 128 7.97219 128 11.6734C128 15.3746 125.25 18.0091 121.407 18.0091C117.565 18.0091 114.84 15.3746 114.84 11.6734ZM125.089 11.6734C125.089 9.31517 123.515 7.81155 121.414 7.81155C119.312 7.81155 117.757 9.31517 117.757 11.6734C117.757 14.0316 119.332 15.5352 121.414 15.5352C123.496 15.5352 125.089 14.0316 125.089 11.6734Z" fill="#231F20"/>
            <path d="M17.2916 8.97459C17.2916 4.18744 13.4104 0.312744 8.62972 0.312744H0V18.0091H9.84418L8.01285 14.038C5.2241 14.038 2.95582 11.7762 2.95582 8.98102C2.95582 6.18584 5.21767 3.92399 8.01285 3.92399C10.808 3.92399 13.0699 6.18584 13.0699 8.98102C13.0699 10.8252 12.0803 12.438 10.6024 13.3184L12.7679 18.0091H16.5462L15.0618 14.7899C16.4498 13.2541 17.298 11.2172 17.298 8.98102L17.2916 8.97459Z" fill="#3DC2A2"/>
            <path d="M8.04501 11.5768C9.46454 11.5768 10.6153 10.4261 10.6153 9.00656C10.6153 7.58703 9.46454 6.43628 8.04501 6.43628C6.62549 6.43628 5.47473 7.58703 5.47473 9.00656C5.47473 10.4261 6.62549 11.5768 8.04501 11.5768Z" fill="#3DC2A2"/>
          </svg>
          </StyledLink>
          {/* <nav>
            <StyledUl>
              <li>
                <StyledLink className="nav_link" href="#">
                  Our services
                </StyledLink>
              </li>
              <li>
                <StyledLink className="nav_link" href="#">
                  Our approach
                </StyledLink>
              </li>
              <li>
                <StyledLink className="nav_link" href="#">
                  Our advantage
                </StyledLink>
              </li>
              <li>
                <StyledLink className="nav_link" href="#">
                  FAQs
                </StyledLink>
              </li>
            </StyledUl>
          </nav> */}
        </StyledLeftContainer>

        <StyledRightContainer>
          <StyledButton className="select_country">
            <StyledDiv className="box_icon_country">
              <img src="./static/images/flag.png" alt="icon country" />
            </StyledDiv>
            <StyledSelector
              sx={{
                width: "108px",
                padding: "0",
                zIndex: "2000",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                  padding: "0",
                },
                "& .MuiSelect-select": {
                  paddingRight: "0 !important",
                  padding: 0,
                  display: "flex",
                  gap: "16px",
                },
                "& .MuiSvgIcon-root": {
                  color: "#1C58CF",
                  paddingRight: 0,
                  right: "-7px",
                },
                "& .MuiMenu-paper": {
                  zIndex: "3000",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                },
              }}
              className="select"
              value={region}
              displayEmpty
              onChange={handleChange}
            >
              <StyledMenuItem value="">
                <em>Reimb.ro CA</em>
              </StyledMenuItem>
              <StyledMenuItem className="select_li" value={1}>
                Reimb.ro CA
              </StyledMenuItem>
              <StyledMenuItem className="select_li" value={2}>
                Reimb.ro CA
              </StyledMenuItem>
              <StyledMenuItem className="select_li" value={3}>
                Reimb.ro CA
              </StyledMenuItem>
            </StyledSelector>
          </StyledButton>
          <StyledDiv className="bell">
            <StyledImg
              src="./static/images/icons/notifications.svg"
              alt="icon notifications"
            />
          </StyledDiv>
          <StyledButton className="avatar">
            <a href="#">DB</a>
          </StyledButton>
          <StyledButton className="bt_sign_out">
            <a href="#" onClick={signOut}>
              Sign Out
            </a>
          </StyledButton>
        </StyledRightContainer>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
