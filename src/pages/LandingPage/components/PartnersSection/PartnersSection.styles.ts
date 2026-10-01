import styled from 'styled-components/macro';

export const Block = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 1240px;
  margin-top: -${(props) => props.theme.spacing(5)};
  margin-left: ${(props) => props.theme.spacing(5)};

  ${(props) => props.theme.breakpoints.down('xl')} {
    width: 900px;
  }

  ${(props) => props.theme.breakpoints.down('lg')} {
    width: 660px;
    margin-left: ${(props) => props.theme.spacing(2.5)};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    width: 400px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 300px;
  }
`;

export const PerformanceElement = styled.div`
  margin-top: ${(props) => props.theme.spacing(5)};
  margin-right: ${(props) => props.theme.spacing(5)};
  width: 166px;
  height: 60px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  ${(props) => props.theme.breakpoints.down('lg')} {
    width: 140px;
    height: 50px;
    margin-right: ${(props) => props.theme.spacing(2.5)};
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 124px;
    height: 45px;
  }
`;
