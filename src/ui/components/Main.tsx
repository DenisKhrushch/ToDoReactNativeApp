import React from 'react';
import {ListItem} from './ListItem';
import {Item} from '../../interfaces/Item';
import styled from 'styled-components/native';

const ListScreen = styled.View`
  padding: 20px 10px 5px;
`;

interface MainProps {
  itemsList: Item[];
  isChecked: (id: number) => void;
  deleteItem: (id: number) => void;
}

export const Main = ({itemsList, isChecked, deleteItem}: MainProps) => {
  return (
    <ListScreen>
      {itemsList.map((item: Item) => (
        <ListItem
          key={item.id}
          item={item}
          isChecked={isChecked}
          deleteItem={deleteItem}
        />
      ))}
    </ListScreen>
  );
};
