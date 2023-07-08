import First_lesson from './../assets/First lesson.svg'
import Second_lesson from './../assets/Second lesson.svg'
import Third_lesson from './../assets/Third lesson.svg';
import styled from "@emotion/styled";
import {HiOutlineBookOpen, HiOutlineClipboardList} from "react-icons/hi";
import {MdPeopleOutline} from "react-icons/md";

const COURSES = [
	{
		id: 0,
		icon: First_lesson,
		name: 'Первый курс',
		totalLessons: 24,
		totalTasks: 8,
		totalStudents: 99,
		color: '#E1E2F6'
	},
	{
		id: 1,
		icon: Second_lesson,
		name: 'Второй курс',
		totalLessons: 22,
		totalTasks: 6,
		totalStudents: 103,
		color: '#F9EFE2'
	},
	{
		id: 2,
		icon: Third_lesson,
		name: 'Третий курс',
		totalLessons: 20,
		totalTasks: 10,
		totalStudents: 50,
		color: '#F0F6E2'
	}
]

const Container = styled.div`
	margin-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const CoursesList = styled.div`
	display: flex;
  gap: 20px;
`

const Course = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;	
  border-radius: 10px;
  width: 325px;
`

const CourseIcon = styled.div`
  border-radius: 50%;
  background-color: white;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  margin-bottom: 20px;
`

const CourseData = styled.div`
	display: flex;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px 10px;
  justify-content: center;
`

const Data = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  gap: 10px;

  &:not(:last-of-type) {
    border-right: 1px solid #dcdcdc
  }
`

export const Courses = () => {
	return <Container>
		<h2>Мои курсы</h2>
		<CoursesList>
			{COURSES.map(course => <Course key={course.id} style={{backgroundColor: course.color}}>
				<CourseIcon>
					<img src={course.icon} alt="Course icon"/>
				</CourseIcon>
				<b>{course.name}</b>
				<CourseData>
					<Data>
						<HiOutlineBookOpen/>
						{course.totalLessons}
					</Data>
					<Data>
						<HiOutlineClipboardList/>
						{course.totalTasks}
					</Data>
					<Data>
						<MdPeopleOutline/>
						{course.totalStudents}
					</Data>
				</CourseData>
			</Course>)}
		</CoursesList>
	</Container>
}