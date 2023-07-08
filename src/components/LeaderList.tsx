import Person_image from './../assets/PersonImage.svg'
import styled from "@emotion/styled";
import {VscTriangleDown, VscTriangleUp} from "react-icons/vsc";

const RANK = [
	{
		id: 0,
		place: 1,
		isRankedUp: true,
		person: {
			name: 'Арайлым Оралбаева',
			image: Person_image,
		},
		courses: 53,
		hours: 250,
		score: 13450
	},
	{
		id: 1,
		place: 2,
		person: {
			name: 'Алия	Жаракова',
			image: Person_image,

		},
		courses: 88,
		hours: 212,
		score: 10333
	},
	{
		id: 2,
		place: 3,
		isRankedUp: false,
		person: {
			name: 'Шавкат Рахманов',
			image: Person_image,
		},
		courses: 66,
		hours: 201,
		score: 9450
	}
]

const Container = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Table = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr repeat(3, 1fr);
  padding-block: 10px;
  align-items: center;
  color: rgb(145, 145, 145);
`

const Place = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  text-align: center;
  line-height: 25px;
  color: #000;
  font-weight: bold;
  background-color: rgb(241, 239, 239);
`

const Person = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  gap: 10px;
`

const PersonImage = styled.img`
  width: 25px;
  aspect-ratio: 1/1;
  object-fit: contain;
`

const Column = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const LeaderList = () => {
	return <Container>
		<h2>Доска лидеров</h2>
		<div>
			<Table style={{borderBottom: '1px solid rgb(200 200 200 /1)'}}>
				<div>Место</div>
				<div>Имя</div>
				<div>Курсы</div>
				<div>Часов</div>
				<div>Очков</div>
			</Table>
			{
				RANK.map(r => <Table key={r.id}>
					<Column>
						<Place>
							{r.place}
						</Place>
						{
							r.isRankedUp ? <VscTriangleUp style={{color: 'green'}}/> : r.isRankedUp === false?
								<VscTriangleDown style={{color: "red"}}/> : null
						}
					</Column>
					<Person>
						<PersonImage src={r.person.image} alt='person image'/>
						<b>{r.person.name}</b>
					</Person>
					<div>{r.courses}</div>
					<div>{r.hours}</div>
					<div style = {{color: '#86C6C3', fontWeight: 'bold'}}>{r.score}</div>
				</Table>)
			}
		</div>
	</Container>
}