import { Select } from "@mui/material";
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

  &.status_request {
    display: flex;    
    padding: 2px 16px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
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

export const StyledPaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 50%;
  background-color: #3DC2A2;
  color: #231F20;
  border: none;
  margin-right: 4px;
  transition: transform 0.3s ease-in-out;
    
  &:hover {
    transform: scale(1.2);
  }

  &&.str {
    background-color: #fff;
    border-radius: 100px;
    padding: 0;
`;
