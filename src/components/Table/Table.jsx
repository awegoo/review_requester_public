import React, { useEffect, useState, useCallback } from "react";
import { useSort } from "@table-library/react-table-library/sort";
import { useRowSelect } from "@table-library/react-table-library/select";
import {
  Checkbox,
  Divider,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import {
  StyledDiv,
  StyledLabel,
  StyledLabelInput,
  StyledPaginationButton,
  StyledTableWrapper,
} from "./styled";
import { CompactTable } from "@table-library/react-table-library/compact";
import { fetchRequestsWithStatusesAll } from "../../utils/fetchData";
import { format, parseISO } from "date-fns";
import { themeTable } from "../../styles/theme";
import { columns, MenuProps } from "../../components/constants/constants";
import { usePagination } from "@table-library/react-table-library/pagination";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { CustomStyleForSelector } from "../../styles/theme";
import {testDataTable} from './testTableData';

const TableComponent = () => {
  const [search, setSearch] = useState("");
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [requestData, setRequestData] = useState([]);
  const LIMIT = 5;
  const statusColor = {
    sent: "#C7FFCD",
    error: "#FEC8C8",
    pending: "#FEF1AE",
  };

  const transformData = (data) => {
    return data.map((item) => ({
      ...item,
      id: item.amazon_order_id,
    }));
  };

  const doGet = useCallback(async (params) => {
    try {
      // const response = await fetchRequestsWithStatusesAll(params);
      // const transformedData = transformData(testDataTable);
      setRequestData(testDataTable);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    doGet({ offset: 0, limit: LIMIT });
  }, [doGet]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = {
    nodes: requestData.filter((item) => {
      const matchesSearch =
        item.product_name.toLowerCase().includes(search.toLowerCase()) ||
        item.amazon_order_id.toLowerCase().includes(search.toLowerCase());

      return matchesSearch;
    }),
  };

  const onSelectChange = (action, state) => {
    console.log(action, state);
  };

  const select = useRowSelect(filteredData, {
    onChange: onSelectChange,
  });

  const onSortChange = (action, state) => {
    console.log(action, state);
  };

  const sort = useSort(
    filteredData,
    {
      onChange: onSortChange,
    },
    {
      sortIcon: {
        size: "10px",
      },
      sortFns: {
        UNITS: (array) => array.sort((a, b) => a.quantity - b.quantity),
        PURCHASE_DATE: (array) =>
          array.sort((a, b) => {
            const dateA = new Date(a.purchase_date);
            const dateB = new Date(b.purchase_date);
            return dateB - dateA;
          }),
      },
    },
  );

  const toggleColumn = (column) => {
    if (hiddenColumns.includes(column)) {
      setHiddenColumns(hiddenColumns.filter((v) => v !== column));
    } else {
      setHiddenColumns(hiddenColumns.concat(column));
    }
  };

  const pagination = usePagination(filteredData, {
    state: {
      page: 0,
      size: LIMIT,
    },
    onChange: onPaginationChange,
  });

  function onPaginationChange(action, state) {
    doGet({
      offset: state.page * LIMIT,
      limit: LIMIT,
    });
  }

  const COLUMNS = [
    {
      label: "Order ID",
      renderCell: (item) => item.amazon_order_id,
      hide: hiddenColumns.includes("Order ID"),
      width: "2fr",
      resize: true,
    },
    {
      label: "Review Request Status",
      renderCell: (item) => {
        if (item.amazon_order_status === "Sent") {
          return (
            <StyledDiv
              className="status_request"
              style={{ background: statusColor.sent }}
            >
              {item.amazon_order_status}
            </StyledDiv>
          );
        } else if (item.amazon_order_status === "Error") {
          return (
            <StyledDiv
              className="status_request"
              style={{ background: statusColor.error }}
            >
              {item.amazon_order_status}
            </StyledDiv>
          );
        }
        return (
          <StyledDiv
            className="status_request"
            style={{ background: statusColor.pending }}
          >
            {item.amazon_order_status}
          </StyledDiv>
        );
      },
      hide: hiddenColumns.includes("Review Request Status"),
      width: "2fr",
      resize: true,
    },
    {
      label: "Product Name",
      renderCell: (item) => item.product_name,
      hide: hiddenColumns.includes("Product Name"),
      width: "4fr",
      resize: true,
    },
    {
      label: "Units",
      renderCell: (item) => item.quantity,
      sort: { sortKey: "UNITS" },
      hide: hiddenColumns.includes("UNITS"),
      width: "1fr",
      resize: true,
    },
    {
      label: "Purchase Date",
      renderCell: (item) => {
        const date = item.purchase_date;
        const parsedDate = parseISO(date);
        const formattedDate = format(parsedDate, "MMM dd, yyyy");

        return formattedDate;
      },
      sort: { sortKey: "PURCHASE_DATE" },
      hide: hiddenColumns.includes("Purchase Date"),
      width: "1.5fr",
      resize: true,
    },
  ];

  const gridTemplateColumns = COLUMNS.map((col) => col.width || "1fr").join(
    " "
  );

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setHiddenColumns(typeof value === "string" ? value.split(",") : value);
  };

  const renderPaginationButtons = () => {
    const { page, getTotalPages } = pagination.state;
    const totalPages = getTotalPages(filteredData.nodes);

    const pages = [];

    if (page > 0) {
      pages.push(
        <StyledPaginationButton
          className="str"
          key="first"
          onClick={() => pagination.fns.onSetPage(0)}
        >
          <KeyboardDoubleArrowLeftIcon fontSize="large" sx={{ fontSize: 28, color: "#1C58CF" }}/>
        </StyledPaginationButton>
      );
      pages.push(
        <StyledPaginationButton
          className="str"
          key="prev"
          onClick={() => pagination.fns.onSetPage(page - 1)}
        >
           <ArrowBackIosNewIcon sx={{ fontSize: 18, color: "#1C58CF"}} />
        </StyledPaginationButton>
      );
    }

    if (page > 1) {
      pages.push(
        <StyledPaginationButton
          key={page - 1}
          onClick={() => pagination.fns.onSetPage(page - 1)}
        >
          {page}
        </StyledPaginationButton>
      );
    }

    pages.push(
      <StyledPaginationButton key={page} style={{ fontWeight: "bold" }}>
        {page + 1}
      </StyledPaginationButton>
    );

    if (page < totalPages - 2) {
      pages.push(
        <StyledPaginationButton
          key={page + 1}
          onClick={() => pagination.fns.onSetPage(page + 1)}
        >
          {page + 2}
        </StyledPaginationButton>
      );
    }

    if (page < totalPages - 1) {
      pages.push(
        <StyledPaginationButton
          className="str"
          key="next"
          onClick={() => pagination.fns.onSetPage(page + 1)}
        >
          <ArrowForwardIosIcon sx={{ fontSize: 18, color: "#1C58CF" }} />         
        </StyledPaginationButton>
      );
      pages.push(
        <StyledPaginationButton
          className="str"
          key="last"
          onClick={() => pagination.fns.onSetPage(totalPages - 1)}
        >
          <KeyboardDoubleArrowRightIcon fontSize="large" sx={{ fontSize: 28, color: "#1C58CF" }} />
        </StyledPaginationButton>
      );
    }

    return pages;
  };

  return (
    <StyledTableWrapper>
      <StyledLabel htmlFor="search">
        <StyledDiv>
          <StyledLabelInput
            id="search"
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search all"
          />
          <img src="./static/images/icons/search.svg" alt="search" />
        </StyledDiv>
        <StyledDiv>
          <div className="filter">
            <img
              src="./static/images/icons/Filter.svg"
              alt="Filter"
              className="icon_filter"
            />
          </div>
          <FormControl sx={{ m: 1, width: 421, position: "relative" }}>
            <Select
              multiple
              displayEmpty
              value={hiddenColumns}
              onChange={handleChange}
              input={
                <OutlinedInput
                  sx={{
                    borderRadius: "6px",
                    background: "#FFFFFF",
                  }}
                />
              }
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Filter By</em>;
                }

                return selected.join(", ");
              }}
              MenuProps={MenuProps}
              inputProps={{
                "aria-label": "Without label",
              }}
              sx={CustomStyleForSelector}
            >
              {columns.map((column) => (
                <MenuItem key={column} value={column}>
                  <Checkbox
                    checked={!hiddenColumns.includes(column)}
                    onChange={() => toggleColumn(column)}
                  />
                  {column}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </StyledDiv>
        <img
          src="./static/images/icons/settings.svg"
          alt="icon setting"
          className="icon_setting"
        />
      </StyledLabel>
      <Divider sx={{ marginBottom: "16px" }} />
      <CompactTable
        columns={COLUMNS}
        data={filteredData}
        theme={themeTable}
        select={select}
        sort={sort}
        style={{ gridTemplateColumns }}
        pagination={pagination}
      />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {renderPaginationButtons()}
      </div>
      <br />
    </StyledTableWrapper>
  );
};

export default TableComponent;