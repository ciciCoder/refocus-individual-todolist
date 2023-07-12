import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  FaCheckCircle,
  FaHourglassHalf,
  FaRegWindowClose,
} from 'react-icons/fa';
import cx from 'classnames';
import './TodoItem.css';
import { deleteTodo, updateTodo } from '../../store/reducers/todos';

export default function TodoItem({ todo }) {
  const { id, title, text, state } = todo;
  // TODO: call useDispatch here to get access to dispatch function
  const dispatch = useDispatch();

  const onDeleteClick = useCallback(() => {
    // TODO: Dispacth corresponding action
    dispatch(deleteTodo(id));
  }, []);

  const onDoneClick = useCallback(() => {
    // TODO: Dispacth corresponding action
    dispatch(updateTodo({ id, state: 'done' }));
  }, []);

  const onInProgressClick = useCallback(() => {
    // TODO: Dispacth corresponding action
    dispatch(updateTodo({ id, state: 'in progress' }));
  }, []);

  const containerClassName = cx('todo-item-container', {
    'todo-item-done': state === 'done',
  });

  const inProgressClassName = cx('todo-mark-in-progress', {
    'in-progress': state === 'in progress',
  });

  const doneClassName = cx('todo-mark-done', {
    done: state === 'done',
  });

  return (
    <div className={containerClassName}>
      <div className="todo-item-header-container">
        <h2 className="todo-item-header">{title}</h2>
        <FaRegWindowClose
          size={20}
          className="todo-item-cross"
          onClick={onDeleteClick}
        />
      </div>
      <p className="todo-item-text">{text}</p>
      <div className="todo-status-container">
        <div className="todo-status">{state}</div>
        <FaHourglassHalf
          size={20}
          className={inProgressClassName}
          onClick={onInProgressClick}
        />
        <FaCheckCircle
          size={20}
          className={doneClassName}
          onClick={onDoneClick}
        />
      </div>
    </div>
  );
}
