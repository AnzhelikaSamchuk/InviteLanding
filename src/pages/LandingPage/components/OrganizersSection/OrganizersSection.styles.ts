import styled from 'styled-components/macro';

export const Block = styled.div`
  margin-top: -30px;
  width: 100%;
`;

export const OrganizersLiElements = styled.li`
  padding: 15px;
  margin: 0 15px;

  ${(props) => props.theme.breakpoints.down('lg')} {
    max-width: 40%;
    margin-top: 50px;
  }

  @media screen and (max-width: 600px) {
    & {
      max-width: 100%;
      margin-top: -90px;
    }

    &:first-child {
      margin-top: 50px;
    }
  }
`;

export const OrganizersElement = styled.article`
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  a {
    width: 100%;
    height: fit-content;

    img {
      display: block;
    }
  }
`;
