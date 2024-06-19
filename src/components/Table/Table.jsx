import React from 'react';
import { useSort } from '@table-library/react-table-library/sort';
import { useRowSelect } from '@table-library/react-table-library/select';
import {
  Checkbox,
  Divider,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import { StyledDiv, StyledLabel, StyledLabelInput, StyledTableWrapper } from './styled';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import { CompactTable } from '@table-library/react-table-library/compact';
import { list } from '../../components/constants/constants';

const TableComponent = () => {
  let data = { nodes: list };
  const [search, setSearch] = React.useState('');
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
      font-family: 'Wix Madefor Text';
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;

      div {
        &.css-cz6xlx div:after {
          content: '';
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
          font-family: 'Wix Madefor Text';
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
        `,
        fontWeightMedium: `
          font-family: 'Wix Madefor Text';
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
        size: '10px',
      },
      sortFns: {
        UNITS: (array) => array.sort((a, b) => a.units - b.units),
        PURCHASE_DATE: (array) =>
          array.sort((a, b) => b.purchaseDate - a.purchaseDate),
      },
    }
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
      label: 'Order ID',
      renderCell: (item) => item.id,
      hide: hiddenColumns.includes('Order ID'),
      width: '2fr',
      resize: true,
    },
    {
      label: 'Review Request Status',
      renderCell: (item) => (
        <>
          <div className=''>Scheduled 5 days</div>
        </>
      ),
      hide: hiddenColumns.includes('Review Request Status'),
      width: '2fr',
      resize: true,
    },
    {
      label: 'Product Name',
      renderCell: (item) => (
        <>
          <img
            src={item.productName.img}
            alt='product image'
            style={{ width: '82px' }}
          />
          {item.productName.name}
        </>
      ),
      hide: hiddenColumns.includes('Product Name'),
      width: '4fr',
      resize: true,
    },
    {
      label: 'Units',
      renderCell: (item) => item.units,
      sort: { sortKey: 'UNITS' },
      hide: hiddenColumns.includes('UNITS'),
      width: '1fr',
      resize: true,
    },
    {
      label: 'Purchase Date',
      renderCell: (item) =>
        item.purchaseDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        }),
      sort: { sortKey: 'PURCHASE_DATE' },
      hide: hiddenColumns.includes('Purchase Date'),
      width: '1.5fr',
      resize: true,
    },
  ];

  const gridTemplateColumns = COLUMNS.map((col) => col.width || '1fr').join(
    ' '
  );

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
      zIndex: 1500,
    },
  };

  const columns = [
    'Order ID',
    'Review Request Status',
    'Product Name',
    'UNITS',
    'PURCHASE_DATE',
  ];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setHiddenColumns(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <StyledTableWrapper>
      <StyledLabel htmlFor='search'>
        <StyledDiv>
          <StyledLabelInput
            id='search'
            type='text'
            value={search}
            onChange={handleSearch}
            placeholder='Search all'
          />
          <img src='./static/images/icons/search.svg' alt='search' />
        </StyledDiv>
        <StyledDiv>
          <div className='filter'>
            <img
              src='./static/images/icons/Filter.svg'
              alt='Filter'
              className='icon_filter'
            />
          </div>
          <FormControl sx={{ m: 1, width: 421, position: 'relative' }}>
            <Select
              multiple
              displayEmpty
              value={hiddenColumns}
              onChange={handleChange}
              input={
                <OutlinedInput
                  sx={{
                    borderRadius: '6px',
                    background: '#FFFFFF',
                  }}
                />
              }
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Filter By</em>;
                }

                return selected.join(', ');
              }}
              MenuProps={MenuProps}
              inputProps={{
                'aria-label': 'Without label',
              }}
              sx={{
                borderRadius: '6px',
                background: '#FFFFFF',
                '& .MuiSelect-select': {
                  padding: '13px 36px',
                  fontFamily: 'Wix Madefor Text',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '24px',
                  textAlign: 'left',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: '1.5px solid #D7DCE4',
                },
                '& .MuiSvgIcon-root': {
                  color: '#231F20',
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
          src='./static/images/icons/settings.svg'
          alt='icon setting'
          className='icon_setting'
        />
      </StyledLabel>
      <Divider sx={{ marginBottom: '16px' }} />
      <CompactTable
        columns={COLUMNS}
        data={filteredData}
        theme={theme}
        select={select}
        sort={sort}
        style={{ gridTemplateColumns }}
      />
    </StyledTableWrapper>
  );
};

export default TableComponent;
