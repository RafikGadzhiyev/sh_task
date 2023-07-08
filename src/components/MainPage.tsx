import {HiOutlineSearch} from "react-icons/hi";
import styled from "@emotion/styled";
import {HiOutlineBell} from "react-icons/hi2";
import {Courses} from "./Courses.tsx";
import {Tasks} from "./Tasks.tsx";
import {LeaderList} from "./LeaderList.tsx";

const Container = styled.div`
	flex: 1;
  padding: 30px 40px;
`

const Header = styled.header`
	display: flex;
  align-items: flex-start;
`
const GreetingsBlock = styled.div`
	flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Subtitle = styled.span`
  color: #b7b7b7;
`

const SearchBlock = styled.div`
	position: relative;
	align-self: stretch;
  align-items: center;
`;

const SearchInput = styled.input`
  all: unset;
  border-radius: 5px;
  border: 1px solid rgb(199, 199, 199);
  padding: 5px 10px;
  width: 100%;
  height: 80%;
  box-sizing: border-box;
  transition: 300ms;
  
  &:focus {
	border-color: rgb(0 0 0 / 1);
  }
  
`

const SearchIcon = styled(HiOutlineSearch)`
	position: absolute;
  font-size: 25px;
  top: 50%;
  right: 10px;
  transform: translate(0, -70%);
`

const MessagesButton = styled.button`
  all: unset;
  box-sizing: border-box;
  border-radius: 10px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  margin-left: 20px;
  height: 45px;
  border: 1px solid rgb(199 199 199 / 1);
  cursor: pointer;
  transition: 300ms;
  &:hover {
	background-color: rgb(240 240 240 / .7);
  }
`

export const MainPage = () => {
	return <Container>
		<Header>
			<GreetingsBlock>
				<h2>
					Привет, Арман 👋🏻
				</h2>
				<Subtitle>Давай научимся чему-то новому!</Subtitle>
			</GreetingsBlock>
			<SearchBlock>
				<SearchInput type="text" placeholder='Поиск'/>
				<SearchIcon/>
			</SearchBlock>
			<MessagesButton>
				<HiOutlineBell/>
			</MessagesButton>
		</Header>
		<Courses/>
		<Tasks/>
		<LeaderList/>
	</Container>
}