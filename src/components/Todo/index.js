import { Row, Tag, Checkbox, Button, Input, Select } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// import { completeTodo, editTodo , deleteTodo } from '../../redux/actions';
//Redux toolkit
import todoListSlice from '../../redux/reducers/todoList'


const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ text, priority, id, completed }) {
  const { completeTodo, editTodo, deleteTodo } = todoListSlice.actions
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(completed);
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState({
    text: text,
    priority: priority

  })
  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(completeTodo(id))
  };

  const toggleShowEditing = () => {
    setIsEditing(!isEditing);
  }

  const handleChangeText = e => {
    setNewTodo({
      ...newTodo,
      text: e.target.value
    })
  }
  const handleChangePriority = e => {
    setNewTodo({
      ...newTodo,
      priority: e
    })
  }

  const handleEditTodo = () => {
    if (newTodo.text !== text || newTodo.priority !== priority) {
      dispatch(editTodo({
        id: id,
        text: newTodo.text,
        priority: newTodo.priority,
      }))
    }

    setIsEditing(!isEditing);

  }


  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id))
  }
  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      {

        (isEditing &&
          <Input.Group style={{ display: 'flex', margin: "10px 0 " }} compact>
            <Input value={newTodo.text} onChange={handleChangeText} />
            <Select
              defaultValue='Medium'
              value={newTodo.priority}
              onChange={handleChangePriority}
            >
              <Select.Option value='High' label='High'>
                <Tag color='red'>High</Tag>
              </Select.Option>
              <Select.Option value='Medium' label='Medium'>
                <Tag color='blue'>Medium</Tag>
              </Select.Option>
              <Select.Option value='Low' label='Low'>
                <Tag color='gray'>Low</Tag>
              </Select.Option>
            </Select>
            <Button type='primary' onClick={handleEditTodo} >
              Edit
            </Button>
          </Input.Group>)
      }
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {text}
      </Checkbox>
      <div >
        <Button type='secondary' style={{ margin: "5px 5px 0" }} onClick={toggleShowEditing}>Edit</Button>
        <Button type='secondary' style={{ margin: "5px 5px 0" }} onClick={handleDeleteTodo}>Delete</Button>
      </div>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}