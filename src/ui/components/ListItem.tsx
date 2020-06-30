/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Item} from '../../interfaces/Item';
import {Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {SwipeItem, SwipeButtonsContainer} from 'react-native-swipe-item';
import styled from 'styled-components/native';

const StyledSwipeButtonsContainer = styled(SwipeButtonsContainer)`
  align-self: center;
  flex-direction: row;
  padding: 20px;
  border-radius: 50px;
`;

interface ListItemProps {
  item: Item;
  isChecked: (id: number) => void;
  deleteItem: (id: number) => void;
}

export const ListItem = ({item, isChecked, deleteItem}: ListItemProps) => {
  const handleDelete = () => {
    deleteItem(item.id);
  };
  const handleCheck = () => {
    isChecked(item.id);
  };

  const leftButton = (
    <StyledSwipeButtonsContainer>
      <Icon
        raised
        name={item.active ? 'check' : 'times'}
        type="font-awesome-5"
        color={item.active ? '#00bd56' : '#c81912'}
        onPress={handleCheck}
      />
    </StyledSwipeButtonsContainer>
  );
  const rightButton = (
    <StyledSwipeButtonsContainer>
      <Icon
        raised
        name="trash-alt"
        type="font-awesome-5"
        color="#c81912"
        onPress={handleDelete}
      />
    </StyledSwipeButtonsContainer>
  );

  return (
    <SwipeItem
      style={{
        width: '100%',
        height: 60,
        marginBottom: 10,
        alignSelf: 'center',
      }}
      swipeContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: item.active ? '#fff' : '#00bd56',
        borderRadius: 7,
        shadowColor: '#f3f3f3',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
      }}
      leftButtons={leftButton}
      rightButtons={rightButton}>
      <Text
        style={{
          color: item.active ? '#31456a' : '#fff',
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        {item.value}
      </Text>
    </SwipeItem>
  );
};
