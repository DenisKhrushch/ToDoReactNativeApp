import React from 'react';
import styled from 'styled-components/native';
import {Icon} from 'react-native-elements';
import {ClearCompletedRequest} from '../../list/actionTypes';

const StyledMenu = styled.View`
  border-radius: 7px;
  background-color: #f3f3f3;
  position: absolute;
  top: 660px;
  left: 10;
  right: 10;
  flex-direction: row;
  justify-content: center;
`;

interface MenuProps {
  onClearCompleted: () => ClearCompletedRequest;
  onShowAll: () => Object;
  onShowActive: () => Object;
  onShowCompleted: () => Object;
  onLogout: () => Object;
}

export const Menu = ({
  onShowAll,
  onShowActive,
  onShowCompleted,
  onClearCompleted,
  onLogout,
}: MenuProps) => {
  return (
    <StyledMenu>
      <Icon
        raised
        name="home"
        type="font-awesome-5"
        color="#31456a"
        onPress={onShowAll}
      />
      <Icon
        raised
        name="list-ul"
        type="font-awesome-5"
        color="#31456a"
        onPress={onShowActive}
      />
      <Icon
        raised
        name="check"
        type="font-awesome-5"
        color="#31456a"
        onPress={onShowCompleted}
      />
      <Icon
        raised
        name="trash-alt"
        type="font-awesome-5"
        color="#31456a"
        onPress={onClearCompleted}
      />
      <Icon
        raised
        name="sign-out-alt"
        type="font-awesome-5"
        color="#31456a"
        onPress={onLogout}
      />
    </StyledMenu>
  );
};
