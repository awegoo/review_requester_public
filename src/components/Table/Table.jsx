import React from "react";
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
import { styled } from '@mui/system';
import { StyledDiv, StyledLabel, StyledLabelInput } from "./styled";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { CompactTable } from "@table-library/react-table-library/compact";

const list = [
  {
    id: "67-0384136-8086658",
    statusRequest: true,
    productName: {
      img: "https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-130969.jpg?t=st=1717503087~exp=1717506687~hmac=24a756866f8cca8874d15b950213eb74c466626f2b20be8497b5e95d946f07e7&w=1060",
      name: "Product 2",
    },
    units: 23,
    purchaseDate: new Date("2021-06-22T09:48:27.235Z"),
  },
  {
    id: "403-0384136-8086658",
    statusRequest: false,
    productName: {
      img: "https://img.freepik.com/free-photo/new-black-sneakers-isolated-white-background_93675-135051.jpg?t=st=1717503026~exp=1717506626~hmac=51d43aef770e5144f0ee4b2dfda1d10604826a01cdb3b0e177d04f1a7e314130&w=1380",
      name: "Product 3",
    },
    units: 23,
    purchaseDate: new Date("2023-04-15T12:32:11.118Z"),
  },
  {
    id: "124-0384136-8086658",
    statusRequest: true,
    productName: {
      img: "https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-135053.jpg?t=st=1717503056~exp=1717506656~hmac=b1524be34786dcc1ec7e10f9eda21f9f735d43e3ef33f46fce6b27451772a2c1&w=1380",
      name: "Product 5",
    },
    units: 67,
    purchaseDate: new Date("2022-10-03T07:16:44.876Z"),
  },
  {
    id: 945,
    statusRequest: false,
    productName: { img: "img1.jpg", name: "Product 1" },
    units: 12,
    purchaseDate: new Date("2020-11-11T03:04:55.304Z"),
  },
  {
    id: 403,
    statusRequest: true,
    productName: { img: "img4.jpg", name: "Product 4" },
    units: 90,
    purchaseDate: new Date("2021-01-22T15:45:21.642Z"),
  },
  {
    id: 768,
    statusRequest: false,
    productName: { img: "img3.jpg", name: "Product 3" },
    units: 45,
    purchaseDate: new Date("2020-05-14T11:37:34.198Z"),
  },
  {
    id: 124,
    statusRequest: true,
    productName: { img: "img5.jpg", name: "Product 5" },
    units: 34,
    purchaseDate: new Date("2023-03-18T20:22:48.954Z"),
  },
  {
    id: 657,
    statusRequest: false,
    productName: { img: "img2.jpg", name: "Product 2" },
    units: 78,
    purchaseDate: new Date("2022-07-09T19:13:27.689Z"),
  },
  {
    id: 812,
    statusRequest: true,
    productName: { img: "img1.jpg", name: "Product 1" },
    units: 56,
    purchaseDate: new Date("2021-09-25T14:07:11.897Z"),
  },
  {
    id: 538,
    statusRequest: false,
    productName: { img: "img4.jpg", name: "Product 4" },
    units: 89,
    purchaseDate: new Date("2020-02-19T06:41:09.729Z"),
  },
];

const TableComponent = () => {
  let data = { nodes: list };
  const [search, setSearch] = React.useState("");
  const [hiddenColumns, setHiddenColumns] = React.useState([]);

  const theme = useTheme([
    getTheme(),
    {
      Table: `
        border-radius: 6px;
        border: 1px solid #D7DCE4;
        --data-table-library_grid-template-columns: minmax(0px, 2fr) minmax(0px, 2fr) minmax(0px, 4fr) minmax(0px, 1fr) minmax(0px, 1.5fr) ;
        margin-bottom: 16px;
      `,
    },
    {
      HeaderRow: `
        background: #E0EEFF;
    `,
    },
    {
      HeaderCell: `
      justify-content: flex-start;
      padding: 12px 16px;
      align-items: flex-start;
      font-family: "Wix Madefor Text";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;

      div {
        &.css-cz6xlx div:after {
          content: "";
        }
      }
    `,
    },
    {
      Row: `
      &.row-select-single-selected {
        background: #E0EEFF;}`,
    },
    {
      BaseCell: `
        text-align: center;
        display: flex;
        align-items: center;

        &:first-of-type {
          text-align: left;
          border-right: 1px solid #D7DCE4;
        }

        &:nth-of-type(3) {
          text-align: left;
        }

        &:focus {
          background: #E0EEFF;
        }

        div {
          display: flex;
          align-items: center;
        }

        img {
          margin-right: 16px;
        }
      `,
    },
    {
      typography: {
        fontWeightRegular: `
          font-family: "Wix Madefor Text";
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
        `,
        fontWeightMedium: `
          font-family: "Wix Madefor Text";
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
        `,
      },
    },
  ]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = {
    nodes: data.nodes.filter((item) => {
      const matchesSearch =
        item.productName.name.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toString().toLowerCase().includes(search.toLowerCase());

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
        UNITS: (array) => array.sort((a, b) => a.units - b.units),
        PURCHASE_DATE: (array) =>
          array.sort((a, b) => b.purchaseDate - a.purchaseDate),
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

  const COLUMNS = [
    {
      label: "Order ID",
      renderCell: (item) => item.id,
      hide: hiddenColumns.includes("Order ID"),
      width: "2fr",
      resize: true,
    },
    {
      label: "Review Request Status",
      renderCell: (item) => (
        <>
          <div className="">Scheduled 5 days</div>
        </>
      ),
      hide: hiddenColumns.includes("Review Request Status"),
      width: "2fr",
      resize: true,
    },
    {
      label: "Product Name",
      renderCell: (item) => (
        <>
          <img
            src={item.productName.img}
            alt="product image"
            style={{ width: "82px" }}
          />
          {item.productName.name}
        </>
      ),
      hide: hiddenColumns.includes("Product Name"),
      width: "4fr",
      resize: true,
    },
    {
      label: "Units",
      renderCell: (item) => item.units,
      sort: { sortKey: "UNITS" },     
      hide: hiddenColumns.includes("UNITS"),
      width: "1fr",
      resize: true,
    },
    {
      label: "Purchase Date",
      renderCell: (item) =>
        item.purchaseDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }),
      sort: { sortKey: "PURCHASE_DATE" },
      hide: hiddenColumns.includes("Purchase Date"),
      width: "1.5fr",
      resize: true,
    },
  ];

  const gridTemplateColumns = COLUMNS.map(col => col.width || '1fr').join(' ');

  const ITEM_HEIGHT = 40;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
    sx: {
      position: "absolute",
      zIndex: 1300,
      top: "1px",
      left: 0,
    },
  };

  const columns = [
    "Order ID",
    "Review Request Status",
    "Product Name",
    "UNITS",
    "PURCHASE_DATE",
  ];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setHiddenColumns(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
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
                    position: "relative",
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
                position: "relative",
              }}
              sx={{
                position: "relative",
                borderRadius: "6px",
                background: "#FFFFFF",
                "& .MuiSelect-select": {
                  padding: "13px 36px",
                  fontFamily: "Wix Madefor Text",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                  textAlign: "left",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1.5px solid #D7DCE4",
                },
                "& .MuiSvgIcon-root": {
                  color: "#231F20",
                },
                "& .MuiPopover-root": {
                  position: "absolute",
                  top: "255px",
                  zIndex: 1400,
                },
                "& .MuiModal-root.MuiPopover-root.MuiMenu-root": {
                  position: "relative!important",
                },
              }}
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
          theme={theme}
          select={select}
          sort={sort}
          style={{ gridTemplateColumns }}
        />
    </>
  );
};

export default TableComponent;
