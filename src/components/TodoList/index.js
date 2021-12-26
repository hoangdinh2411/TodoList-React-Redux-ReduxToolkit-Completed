import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { v4 as uuidv4 } from 'uuid'

// import { addTodo } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux';
import todoListRemaningSelector from '../../redux/selector';

//Using Redux toolkit
import todoListSlice from '../../redux/reducers/todoList'
import { useState } from 'react'

export default function TodoList() {
  const { addTodo } = todoListSlice.actions
  const todoList = useSelector(todoListRemaningSelector)
  const dispatch = useDispatch()

  const [todoInput, setTodoInput] = useState("")
  const [priority, setPriority] = useState('Medium')

  const handleChangeTodoInput = e => {
    setTodoInput(e.target.value.trim())
  }

  const handleChangePriority = e => {
    setPriority(e)
  }

  const handleAddTodo = () => {
    if (todoInput !== "") {
      dispatch(addTodo({
        id: uuidv4(),
        text: todoInput,
        priority: priority,
        isCompleted: false
      }))
      setTodoInput("")
      setPriority("")
    }
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          todoList.map((todo) =>
            <Todo
              key={todo.id}
              text={todo.text}
              priority={todo.priority}
              id={todo.id}
              completed={todo.isCompleted} />
          )
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoInput} onChange={handleChangeTodoInput} />
          <Select
            defaultValue='Medium'
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
          <Button type='primary' onClick={handleAddTodo} >
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}