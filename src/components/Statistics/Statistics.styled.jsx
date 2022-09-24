import styled from 'styled-components';
export const randomColor = color => {
  const randColor = Math.floor(Math.random() * 16777215).toString(16);
  return randColor;
};

export const StatisticSection = styled.section`
margin: 40px 0;
`;

export const Title = styled.h2`
text-align:center;
`;

export const ItemsList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Items = styled.li`
  display: grid;
  gap: 4px;
  padding: 8px;
  border: solid 1px orange;
  background: #808080;
  color: white;
`;