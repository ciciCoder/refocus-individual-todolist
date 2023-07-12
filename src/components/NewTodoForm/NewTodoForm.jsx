import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import Modal from '@mui/material/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './NewTodoForm.css';
import { addTodo } from '../../store/reducers/todos';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function NewTodoForm({ className }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const title = e.target[0].value;
      const text = e.target[2].value;
      // TODO: add a dispatch call to an appropriate redux action here
      dispatch(addTodo({ title, text }));
      handleClose();
    },
    [handleClose]
  );
  return (
    <div className={className}>
      <Button onClick={handleOpen} variant="contained">
        <AddCircleIcon fontSize="large" />
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h2>Add New ToDo</h2>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <TextField label="Title" name="title" required margin="dense" />
              <TextField
                label="Text"
                multiline
                minRows={2}
                name="text"
                required
                margin="normal"
              />
              <Button variant="contained" type="submit">
                Create
              </Button>
            </FormGroup>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
