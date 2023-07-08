import styled from "@emotion/styled";
import {HiOutlinePencilAlt} from "react-icons/hi";
import Profile_image from './../assets/Profile Picture.svg'
import {Week} from "./Week.tsx";
import {Todo} from "./Todo.tsx";

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 40px 30px;
  border-radius: 0 30px 30px 0;
  min-height: 100vh;
  align-items: flex-start;
  background: #F5F7F9;
  gap: 25px;
`
const ProfileHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const EditButton = styled.button`
  all: unset;
  cursor: pointer;
  background-color: rgb(255 255 255 / 1);
  border-radius: 5px;
  padding: 7.5px;
  box-shadow: 0 0 1px rgb(0 0 0 / .5);
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms ease;

  &:hover {
    background-color: rgb(255 255 255 / 0.5);
  }

`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`


export const SideProfile = () => {

	return <Container>
		<ProfileHeader>
			<h2>Профиль</h2>
			<EditButton>
				<HiOutlinePencilAlt/>
			</EditButton>
		</ProfileHeader>
		<ProfileInfo>
			<img src={Profile_image} alt='profile image'/>
			<h3>Арман Юсупов</h3>
			<span>11 класс</span>
		</ProfileInfo>
		<Week/>
		<Todo/>

	</Container>
}