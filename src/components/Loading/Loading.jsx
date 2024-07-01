"use client";

import React, { useEffect, useState } from "react";
import { useAuthStore } from "../../store/authStore";
import Logo from "../Logo/Logo";
import NameLogo from "../Logo/NameLogo";
import {
  StyledLoader,
  StyledContainer,
  StyledNameLogoDiv,
  StyledLogoDiv,
} from "./styled";

const Loading = () => {
  const [isBg, setIsBg] = useState(true);
  const [isShow, setIsShow] = useState(true);
  const isLoadingPage = useAuthStore((state) => state.isLoadingPage);

  useEffect(() => {
    if (isLoadingPage) {
      const bgTimeout = setTimeout(() => {
        setIsBg(false);
      }, 2000);
      const showTimeout = setTimeout(() => {
        setIsShow(false);
      }, 3000);

      return () => {
        clearTimeout(bgTimeout);
        clearTimeout(showTimeout);
      };
    }
  }, [isLoadingPage]);

  return (
    <StyledLoader $isBg={isBg} $isShow={isShow}>
      <StyledContainer>
        <StyledLogoDiv $isBg={isBg}>
          <Logo type="square" widthSmall={80} heightSmall={80} />
        </StyledLogoDiv>
        <StyledNameLogoDiv $isBg={isBg}>
          <NameLogo />
        </StyledNameLogoDiv>
      </StyledContainer>
    </StyledLoader>
  );
};

export default Loading;
