import First_lesson from './../assets/First lesson.svg'
import Second_lesson from './../assets/Second lesson.svg'
import Third_lesson from './../assets/Third lesson.svg';
import styled from "@emotion/styled";

const TASKS = [
	{
		id: 0,
		icon: Second_lesson,
		name: 'Домашнее задание №11',
		course: 'Второй курс, География',
		due: 'Сделать до 10 июля',
		color: '#FE9054'
	},
	{
		id: 1,
		icon: First_lesson,
		name: 'Тип данных Bool в Javascript',
		course: 'Второй курс',
		due: 'Сделать до 12 июля',
		color: '#343295'
	},
	{
		id: 2,
		icon: Third_lesson,
		name: 'Флаги стран Европы и их',
		course: 'Второй курс',
		due: 'Сделать до 15 июля',
		color: '#81B771'
	}
]

const Container = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const TaskList = styled.div`
  display: flex;
  gap: 20px;
`

const Task = styled.div`
  border-radius: 10px;
  padding: 20px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid;
  width: 325px;
`

const TaskHeader = styled.header`
  display: flex;
  flex: 1;
  gap: 15px;
`
const TaskIcon = styled.div`
  border-radius: 50%;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  margin-bottom: 20px;
`

const OpenButton = styled.button`
	all: unset;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 10px;
  color: #fff;
	width: 100%;
  padding: 15px 10px;
  margin-top: 20px;
  transition: 300ms;
  
  &:hover {
	opacity: .8;
  }
  
`

export const Tasks = () => {
	const MAX_CHARS = 23;
	return <Container>
		<h2>Домашние задания</h2>
		<TaskList>
			{
				TASKS.map(task => <Task key={task.id} style={{borderColor: task.color}}>
					<TaskHeader>
						<TaskIcon style={{backgroundColor: task.color+'78'}}>
							<img src={task.icon} alt='Task icon'/>
						</TaskIcon>
						<div>
							<h3>{task.name.substring(0, MAX_CHARS)}{task.name.length < MAX_CHARS ? '' : "..."}</h3>
							<span style={{color: 'rgb(200 200 200 / 1)'}}>{task.course}</span>
						</div>
					</TaskHeader>
					<b style={{color: "#ED87A3"}}>{task.due}</b>
					<OpenButton style = {{backgroundColor: task.color}}>Открыть задание</OpenButton>
				</Task>)
			}
		</TaskList>
	</Container>
}