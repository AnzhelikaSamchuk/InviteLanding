import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const CustomTypography = styled(Typography)`
  color: #000000;

  :hover {
    color: #ff0000;
    cursor: pointer;
  }

  :visited {
    color: #000000;
  }
`;
