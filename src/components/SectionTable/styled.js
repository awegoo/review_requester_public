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
`;
