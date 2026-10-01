import styled from 'styled-components/macro';

export const SectionWrapper = styled.section`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 ${(props) => props.theme.spacing(5)};
  margin-top: 140px;

  ${(props) => props.theme.breakpoints.down('xl')} {
    padding: 0 ${(props) => props.theme.spacing(9.25)};
    margin-top: 120px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    padding: 0 ${(props) => props.theme.spacing(3.25)};
    margin-top: 80px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 268px;
  max-width: ${(props) => props.theme.breakpoints.values.xl}px;
  margin: auto;
  width: inherit;
`;
