import styled from '@emotion/styled';
import Company_logo from './../assets/Company_logo.svg';
import {HiOutlineBookOpen, HiOutlineChartPie, HiOutlineClipboardList, HiOutlineHome} from "react-icons/hi";
import {HiOutlineCog8Tooth} from "react-icons/hi2";

const PAGES = [
	{
		value: 'Кабинет',
		Icon: () => <HiOutlineHome/>,
		href: '/profile'
	},
	{
		value: 'Курсы',
		Icon: () => <HiOutlineBookOpen/>,
		href: '/courses'
	},
	{
		value: 'Задания',
		Icon: () => <HiOutlineClipboardList/>,
		href: '/tasks'
	},
	{
		value: 'Статистика',
		Icon: () => <HiOutlineChartPie/>,
		href: '/statistics'
	},
	{
		value: 'Найстройки',
		Icon: () => <HiOutlineCog8Tooth/>,
		href: '/settings'
	},

]

const Container = styled.aside`
  display: flex;
  width: 300px;
  padding: 40px 30px;
  flex-direction: column;
  gap: 41px;
  min-height: 100vh;
  border-radius: 30px 0 0 30px;
  background: #F5F7F9;
`

const Navigation = styled.nav`width: 100%;`

const NavigationList = styled.ul`
	display: flex;
  flex-direction: column;
  width: 100%;
`

const NavigationItem = styled.li`
	padding: 18.5px 15px;
  transition: 300ms ease;
  border-radius: 10px;
  width: 100%;
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  
  &:hover {
	background-color: #000;
	color: #fff;
  }
  
`

export const SideNavigation = () => {
	return <Container>
		<div>
			<img src={Company_logo} alt='company logo'/>
		</div>
		<Navigation>
			<NavigationList>
				{PAGES.map(page => <NavigationItem key={page.value}>
					{<page.Icon/>}
					{page.value}
				</NavigationItem>)}
			</NavigationList>
		</Navigation>
	</Container>
}