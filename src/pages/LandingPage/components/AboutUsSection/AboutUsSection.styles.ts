import styled from 'styled-components/macro';

export const Title = styled.div`
  h2 {
    display: none;

    ${(props) => props.theme.breakpoints.down('xl')} {
      display: block;
      margin-bottom: ${(props) => props.theme.spacing(10)};
    }

    ${(props) => props.theme.breakpoints.down('md')} {
      margin-bottom: ${(props) => props.theme.spacing(4)};
    }
  }
`;

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  ${(props) => props.theme.breakpoints.down('lg')} {
    flex-direction: column;
  }
`;

export const About = styled.div`
  max-width: 993px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  a {
    cursor: pointer;
  }

  ${(props) => props.theme.breakpoints.down('xl')} {
    max-width: 620px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 100%;
  }
`;

export const Content1280px = styled.div`
  display: flex;
  justify-content: space-between;

  ${(props) => props.theme.breakpoints.down('xl')} {
    display: none;
  }
`;

export const Content = styled.div`
  display: none;

  ${(props) => props.theme.breakpoints.down('xl')} {
    flex-direction: row-reverse;
    display: flex;
    justify-content: space-between;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`;

export const LogoFor1280 = styled.div`
  width: 269px;
  height: 173px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  margin: auto 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${(props) => props.theme.breakpoints.down('xl')} {
    margin: 0;

    width: 220px;
    height: 229px;
  }
  ${(props) => props.theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const Logo = styled.div`
  width: 230px;
  height: 81px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  margin: auto 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${(props) => props.theme.breakpoints.down('xl')} {
    margin-bottom: ${(props) => props.theme.spacing(2.5)};
  }

  ${(props) => props.theme.breakpoints.up('xl')} {
    display: none;
  }

  ${(props) => props.theme.breakpoints.down('xl')} {
    display: none;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    display: block;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 96px;
    height: 34px;
  }
`;

export const Desc = styled.div`
  max-width: 684px;
  color: ${(props) => props.theme.palette.grey[200]};

  h2 {
    margin-bottom: ${(props) => props.theme.spacing(3)};
    text-align: start;
  }

  ${(props) => props.theme.breakpoints.down('xl')} {
    max-width: 380px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    max-width: 100%;
  }

  .wmde-markdown {
    font-family: 'Montserrat', 'sans-serif';
    font-size: 1rem;
    line-height: 28px;
    font-weight: 500;
    letter-spacing: 0.02rem;

    ${(props) => props.theme.breakpoints.down('md')} {
      font-size: 0.875rem;
      line-height: 22px;
    }
  }
`;

export const InformationWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Information = styled.div`
  width: 580px;
  margin-top: ${(props) => props.theme.spacing(6)};
  margin-right: 0;
  display: flex;
  align-items: center;

  ${(props) => props.theme.breakpoints.down('md')} {
    margin-top: ${(props) => props.theme.spacing(4)};
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;

    Button {
      width: 100%;
    }

    Button,
    a {
      font-size: 1rem;
      line-height: 24px;
    }
  }
`;

export const InformationLink = styled.div`
  margin-left: ${(props) => props.theme.spacing(3)};

  ${(props) => props.theme.breakpoints.down('sm')} {
    margin-left: 0;
    margin-top: ${(props) => props.theme.spacing(2.5)};
  }
`;
