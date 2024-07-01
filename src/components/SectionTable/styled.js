import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;

  &&.search_filter{
    margin-bottom: 20px;
  }

  &&.settingsTable {
    justify-content: end;
    margin-bottom: 20px;

    .selectAll {
      margin-right: auto;
    }
  }

  .search,
  .filter {
    position: relative;
  }

  .search img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 3%;
  }

  .filter img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 4%;
  }

  &&.box_icon_country {
    border-radius: 50%;
    width: 20px;
    height: 20px;    
  }

  &&.bell {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    outline: none;

    &:hover img {
      animation: shake 0.5s infinite;
    }
  
    @keyframes shake {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(10deg); }
      50% { transform: rotate(-10deg); }
      75% { transform: rotate(10deg); }
    }
  }
`;
