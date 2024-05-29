import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import Table from "../Table/Table";
import { StyledDiv } from "./styled";

const SectionTable = () => {
  const [row, setRow] = React.useState("");

  const handleChange = (event) => {
    setRow(event.target.value);
  };
  return (
    <>
      <StyledDiv className="search_filter">
        <div className="search">
          <TextField
            id="outlined-basic"
            label="Search all"
            placeholder="Search"
          ></TextField>
          <img src="./static/images/icons/search.svg" alt="" />
        </div>
        <div className="filter">
        <img src="./static/images/icons/Filter.svg" alt="" />
          <FormControl>
            <Select
              style={{ width: "200px"}}
              labelId="demo-select-small-label"              
              id="demo-select-small"
              value={row}
              displayEmpty
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Filter by</em>
              </MenuItem>
              <MenuItem value={1}>Order ID</MenuItem>
              <MenuItem value={2}>Review Request Status</MenuItem>
              <MenuItem value={3}>Product</MenuItem>
            </Select>
          </FormControl>
        </div>
      </StyledDiv>
      <StyledDiv className="settingsTable">
        <FormControlLabel
          className="selectAll"
          control={<Checkbox onChange={handleChange} name="selectAll" />}
          label="Select All"
        />
        <Divider orientation="vertical" flexItem />
        <img src="./static/images/icons/settings.svg" alt="icon setting" />
      </StyledDiv>
      <Table />
    </>
  );
};

export default SectionTable;
