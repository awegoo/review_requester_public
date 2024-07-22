import React, { useEffect, useState } from "react";
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
  const [initials, setInitials] = useState('');

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  useEffect(() => {
    const localStorageKey = 'CognitoIdentityServiceProvider...';
    const data = localStorage.getItem(localStorageKey);

    if (data) {
      try {
        const parsedData = JSON.parse(data);
        const loginId = parsedData.loginId;
        if (loginId && loginId.length >= 2) {
          const initials = loginId.substring(0, 2).toUpperCase();
          setInitials(initials);
        }
      } catch (e) {
        console.error('Error parsing localStorage data', e);
      }
    }
  }, []);

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLeftContainer>
          <StyledLink href="#" className="logo">          
            <img src="/logo/RateQuest_icon.png" alt="logo" style={{marginRight: "8px", width: "33px"}}/>
            <img src="/logo/RateQuest_text.png" alt="logo name"/>

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
                <em>RateQuest CA</em>
              </StyledMenuItem>
              <StyledMenuItem className="select_li" value={1}>
                RateQuest CA
              </StyledMenuItem>
              <StyledMenuItem className="select_li" value={2}>
                RateQuest CA
              </StyledMenuItem>
              <StyledMenuItem className="select_li" value={3}>
                RateQuest CA
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
            <a href="#">{"RQ"}</a>
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
