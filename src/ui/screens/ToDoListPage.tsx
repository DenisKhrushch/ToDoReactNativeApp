import React, {useEffect} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
import {logout} from '../../user/actions';
import {Main} from '../components/Main';
import {Item} from '../../interfaces/Item';
import {
  loadList,
  addItem,
  checkItem,
  deleteItem,
  clearCompleted,
  showAll,
  showActive,
  showCompleted,
} from '../../list/actions';
import {RootState} from '../../interfaces/rootState';
import {InputField} from '../components/InputField';
import {
  LoadListRequest,
  AddItemRequest,
  IsCheckedRequest,
  DeleteItemRequest,
  ClearCompletedRequest,
} from '../../list/actionTypes';
import {Menu} from '../components/Menu';
import {Header} from '../components/Header';

const Scroll = styled(ScrollView)`
  padding: 10px;
`;

interface ToDoListPageProps {
  token: string;
  itemsList: Item[];
  itemsListToShow: Item[];
  onLoadList: () => LoadListRequest;
  onAddItem: (value: string) => AddItemRequest;
  onCheck: (id: number) => IsCheckedRequest;
  onDeleteItem: (id: number) => DeleteItemRequest;
  onClearCompleted: () => ClearCompletedRequest;
  onShowAll: () => Object;
  onShowActive: () => Object;
  onShowCompleted: () => Object;
  onLogout: () => Object;
  onLoading: boolean;
}

const ToDoListPage = ({
  itemsList,
  itemsListToShow,
  onLoadList,
  onAddItem,
  onCheck,
  onDeleteItem,
  onClearCompleted,
  onShowAll,
  onShowActive,
  onShowCompleted,
  onLogout,
}: ToDoListPageProps) => {
  useEffect(() => {
    onLoadList();
  }, [onLoadList]);
  const del = (id: number): void => {
    onDeleteItem(id);
  };
  const isChecked = (id: number): void => {
    onCheck(id);
  };
  return (
    <View>
      <Scroll>
        <Header />
        <InputField addItem={onAddItem} />
        {itemsList.length ? (
          <Main
            itemsList={itemsListToShow}
            isChecked={isChecked}
            deleteItem={del}
          />
        ) : null}
      </Scroll>
      <Menu
        onShowAll={onShowAll}
        onShowActive={onShowActive}
        onShowCompleted={onShowCompleted}
        onClearCompleted={onClearCompleted}
        onLogout={onLogout}
      />
    </View>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    itemsListToShow: state.listReducer.itemsListToShow,
    itemsList: state.listReducer.itemsList,
    token: state.userReducer.accessToken,
    onLoading: state.listReducer.loading,
  };
};

const mapDispatchToProps = {
  onLoadList: loadList,
  onAddItem: addItem,
  onDeleteItem: deleteItem,
  onCheck: checkItem,
  onClearCompleted: clearCompleted,
  onShowAll: showAll,
  onShowActive: showActive,
  onShowCompleted: showCompleted,
  onLogout: logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoListPage);
