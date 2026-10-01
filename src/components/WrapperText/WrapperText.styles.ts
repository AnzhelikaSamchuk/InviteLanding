import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: inline-block;
  background-color: ${(props) => props.theme.speakersTag.background};
  padding: ${(props) => props.theme.spacing(1)};
  border-radius: 20px;
`;
