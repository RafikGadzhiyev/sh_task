import styled from "@emotion/styled";
import {HiCheck} from "react-icons/hi";
import {useState} from "react";


const TodoList = styled.ul`
	display: grid;
  gap: 30px;
`

const TodoItem = styled.li`
	list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
`

const TodoCheckbox = styled.input`
	&:checked~label{
	  color: #fff;
	  border-color: #47ACA5;
	  background-color: #47ACA5;
	}
`

const TodoSwitcher = styled.label`
  width: 20px;
  color: transparent;
  transition: 300ms;
  height: 20px;
  border-radius: 5px;
  border: 1px solid rgb(20 20 20 / .8);
  display: flex;
  align-items: center;
  justify-content: center;
`

const DueTime = styled.time`
	border-left: 1px solid rgb(0 0 0  / .4);
  margin-left: 10px;
  padding-left: 10px;
  color: #FF9153;
`

export const Todo = () => {
	const [todos, setTodos] = useState([
		{
			id: 0,
			name: 'Сделать ДЗ по географии',
			due: '13:50',
			completed: false
		},
		{
			id: 1,
			name: 'Сделать ДЗ по географии',
			due: '13:50',
			completed: false
		},
		{
			id: 2,
			name: 'Сделать ДЗ по географии',
			due: '13:50',
			completed: false
		}
	])
	const handleCheck = (id: number) => {
		setTodos((t) => t.map(item => item.id === id ? {...item, completed: !item.completed} : item))
	}

	return <>
		<h2>Список задач</h2>
		<TodoList>
			{
				todos.map(task => <TodoItem key={task.id}>
					<TodoCheckbox
						type="checkbox"
						id={`todo-${task.id}`}
						style={{display: 'none'}}
						checked={task.completed}
						onChange={() => handleCheck(task.id)}
					/>
					<TodoSwitcher htmlFor={`todo-${task.id}`}><HiCheck/></TodoSwitcher>
					<div>
						<b style={{textDecoration: task.completed ? 'line-through' : ''}}>{task.name}</b>
						<div>
							<span>Дата</span>
							<b><DueTime>{task.due}, Сегодня</DueTime></b>
						</div>
					</div>
				</TodoItem>)
			}
		</TodoList>
	</>
}