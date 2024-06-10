import { Authenticator } from "@aws-amplify/ui-react";
import styled from "styled-components";

export const StyledAuthenticator = styled(Authenticator)`
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;