import styled from "styled-components";


export const Items = styled.li`
  width: 200px;
  display: flex;
  justify-content: start;
  align-items: center;

  padding: 4px 8px;
  margin: auto;
  margin-bottom: 5px;
  border: solid 1px grey;
  border-radius: 3px;

  box-shadow: 9px 12px 11px -7px rgba(0, 0, 0, 0.38);
`;

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
