import styled from "styled-components";

export const CheckOnline = styled.span`
  height: 8px;
  width: 8px;
  border-radius: 50%;


  background-color: ${p => {
  return p.selected ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
width: 48px;

`;

export const Name = styled.p`
font-weight: 600;
`;