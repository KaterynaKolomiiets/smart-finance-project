import { styled } from '@mui/system';

const StyledInputCalc = styled('input')`
  max-width: 126px;
  height: 37px;
  font-size: 14px;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  border: 2px solid #f5f6fb;
  border-radius: 0px 10px 10px 0px;
  padding: 6px 10px;
  color: #20262d;
  margine: 0;
  position: relative;
  @media screen and (max-width: 767.5px) {
    border-radius: 16px;
  }
  &:hover {
  }
  &:focus {
    outline: none;
  }
`;
export default StyledInputCalc;