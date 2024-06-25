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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="18"
              viewBox="0 0 128 18"
              fill="none"
            >
              <path
                d="M39.0364 17.8483L35.7272 13.1061C35.5216 13.1318 35.3095 13.1318 35.1039 13.1318H31.4477V17.8483H28.4404V1.65552H35.1039C39.3577 1.65552 41.9987 3.82741 41.9987 7.41295C41.9987 9.86757 40.7521 11.6668 38.5545 12.5214L42.275 17.8419H39.0364V17.8483ZM34.9625 4.2001H31.4477V10.6515H34.9625C37.5971 10.6515 38.9657 9.4499 38.9657 7.41295C38.9657 5.376 37.6035 4.2001 34.9625 4.2001Z"
                fill="#231F20"
              />
              <path
                d="M56.6431 12.5987H46.9531C47.3001 14.4043 48.8037 15.561 50.9563 15.561C52.3443 15.561 53.4302 15.124 54.3105 14.218L55.8591 15.9979C54.7475 17.3152 53.0125 18.0091 50.8856 18.0091C46.7475 18.0091 44.0615 15.3489 44.0615 11.6734C44.0615 7.9979 46.7667 5.35693 50.4487 5.35693C54.1306 5.35693 56.6945 7.87581 56.6945 11.7377C56.6945 11.969 56.6688 12.316 56.6495 12.5923L56.6431 12.5987ZM46.9274 10.6774H53.9378C53.7065 8.8975 52.3443 7.67019 50.4422 7.67019C48.5402 7.67019 47.2037 8.87179 46.9274 10.6774Z"
                fill="#231F20"
              />
              <path
                d="M59.0718 1.72615C59.0718 0.75587 59.8557 -0.00878906 60.9224 -0.00878906C61.989 -0.00878906 62.773 0.71089 62.773 1.65547C62.773 2.67073 62.0083 3.46109 60.9224 3.46109C59.8364 3.46109 59.0718 2.69643 59.0718 1.72615ZM59.4637 5.49804H62.3553V17.8482H59.4637V5.49804Z"
                fill="#231F20"
              />
              <path
                d="M86.805 10.7671V17.8418H83.9135V11.1333C83.9135 8.93573 82.8982 7.86906 81.1376 7.86906C79.242 7.86906 77.9247 9.11565 77.9247 11.5703V17.8353H75.0332V11.1269C75.0332 8.9293 74.0179 7.86264 72.2573 7.86264C70.336 7.86264 69.0444 9.10922 69.0444 11.5638V17.8289H66.1528V5.49798H68.903V7.07227C69.8283 5.96063 71.2613 5.36304 72.9512 5.36304C74.7569 5.36304 76.2605 6.03131 77.1151 7.41926C78.1111 6.14697 79.7753 5.36304 81.7416 5.36304C84.7231 5.36304 86.805 7.053 86.805 10.7735V10.7671Z"
                fill="#231F20"
              />
              <path
                d="M103.621 11.6733C103.621 15.5158 100.961 18.009 97.3561 18.009C95.6661 18.009 94.2332 17.4307 93.2629 16.2484V17.8419H90.5127V0.685303H93.4043V7.00177C94.4002 5.89012 95.7882 5.35679 97.3625 5.35679C100.974 5.35679 103.628 7.83068 103.628 11.6733H103.621ZM100.685 11.6733C100.685 9.31502 99.1103 7.81141 97.0284 7.81141C94.9464 7.81141 93.3529 9.31502 93.3529 11.6733C93.3529 14.0315 94.9464 15.5351 97.0284 15.5351C99.1103 15.5351 100.685 14.0315 100.685 11.6733Z"
                fill="#231F20"
              />
              <path
                d="M113.523 5.35693V8.10713C113.266 8.06215 113.061 8.03645 112.855 8.03645C110.657 8.03645 109.269 9.33444 109.269 11.8533V17.8421H106.378V5.4983H109.128V7.30392C109.963 6.00593 111.467 5.36336 113.523 5.36336V5.35693Z"
                fill="#231F20"
              />
              <path
                d="M114.84 11.6734C114.84 7.97219 117.616 5.35693 121.407 5.35693C125.199 5.35693 128 7.97219 128 11.6734C128 15.3746 125.25 18.0091 121.407 18.0091C117.565 18.0091 114.84 15.3746 114.84 11.6734ZM125.089 11.6734C125.089 9.31517 123.515 7.81155 121.414 7.81155C119.313 7.81155 117.758 9.31517 117.758 11.6734C117.758 14.0316 119.332 15.5352 121.414 15.5352C123.496 15.5352 125.089 14.0316 125.089 11.6734Z"
                fill="#231F20"
              />
              <path
                d="M17.2916 8.97459C17.2916 4.18744 13.4104 0.312744 8.62972 0.312744H0V18.0091H9.84418L8.01285 14.038C5.2241 14.038 2.95582 11.7762 2.95582 8.98102C2.95582 6.18584 5.21767 3.92399 8.01285 3.92399C10.808 3.92399 13.0699 6.18584 13.0699 8.98102C13.0699 10.8252 12.0803 12.438 10.6024 13.3184L12.7679 18.0091H16.5462L15.0618 14.7899C16.4498 13.2541 17.298 11.2172 17.298 8.98102L17.2916 8.97459Z"
                fill="#1C58CF"
              />
              <path
                d="M8.04489 11.5768C9.46442 11.5768 10.6152 10.4261 10.6152 9.00656C10.6152 7.58703 9.46442 6.43628 8.04489 6.43628C6.62536 6.43628 5.47461 7.58703 5.47461 9.00656C5.47461 10.4261 6.62536 11.5768 8.04489 11.5768Z"
                fill="#1C58CF"
              />
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
