import styled from 'styled-components/macro';
import { Typography } from '@mui/material';

export const Wrapper = styled.div`
  padding-bottom: 20px;
  width: 100%;
  background-color: ${(props) => props.theme.palette.common.white};
  color: ${(props) => props.theme.palette.common.black};
  line-height: 19px;
`;

export const Container = styled.div`
  padding: 0 15px;
  max-width: 1280px;
  min-width: 320px;
  width: 100%;
  margin: auto;
`;

export const Inner = styled.div`
  display: block !important;
  max-width: 700px;
  margin: auto;
`;

export const Text = styled.div`
  padding-top: 20px;
  margin-bottom: 28px;
  opacity: 0.7;
  position: relative;

  &:before {
    content: '“';
    font-size: 12.5rem;
    position: absolute;
    opacity: 0.1;
    top: 70px;
    left: -75px;
  }
`;

export const Author = styled.div`
  display: flex;
`;

export const AuthorPhoto = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AuthorDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AuthorName = styled(Typography)`
  margin: 0;
`;

export const AuthorLocation = styled(Typography)`
  margin: 0;
  opacity: 0.7;
  line-height: 1.2;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;
