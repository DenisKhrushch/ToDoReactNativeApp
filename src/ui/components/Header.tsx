import React from 'react';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  font-size: 100px;
  color: #31456a;
  text-align: center;
  font-weight: 700;
  margin: 20px 0;
`;

export const Header = () => <StyledText>todos</StyledText>;
