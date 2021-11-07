import styled from "styled-components";
import 'antd/dist/antd.css';
import {Card} from "antd";

export const FishCard = styled(Card)`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  img {
    width: 150px;
  };
`;
