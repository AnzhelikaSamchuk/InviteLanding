import styled from 'styled-components/macro';

export const ListWrapper = styled.div<{ isWrap?: boolean }>`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: ${(props) => (props.isWrap ? 'wrap' : 'no-wrap')};
`;

export const ListBlock = styled.ul<{ justify?: string }>`
  display: inline-flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify || 'space-around'};
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 18px;
  width: 100%;

  ${(props) => props.theme.breakpoints.down('lg')} {
    margin-top: -50px;
  }
`;
