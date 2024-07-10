import { Menu, Select } from "@mui/material";
import { HeaderRow } from "@table-library/react-table-library";
import styled from "styled-components";

export const StyledHeaderRow = styled(HeaderRow)`
  background: #E0EEFF;
`;

export const StyledDiv = styled.div`
  display: inline-block;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    right: 3%;
    transform: translateY(-50%);
    z-index: 9;
    width: 16px;
    height: 16px;

    &.icon_filter{
    left: 5%;
    }
  }
`;
export const StyledLabelInput = styled.input`
  display: flex;  
  width: 421px;
  padding: 12px 16px;
  align-items: center;
  border-radius: 6px;
  border: 1.5px solid ${({theme}) => theme.colors.lightGrey};
  background:  ${({theme}) => theme.colors.white};
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  & img {
    &.icon_setting {
    margin-left: auto;
    }
  }
`;

export const StyledSelect = styled(Select)`
  display: flex;
  position: relative;
  align-items: center;
  width: 421px;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1.5px solid ${({theme}) => theme.colors.lightGrey};
  background:  ${({theme}) => theme.colors.white};
`;

export const StyledTableWrapper = styled.div`
  min-height: 300px;
  margin-top: 20px;
`;