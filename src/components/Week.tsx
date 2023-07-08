import {HiChevronLeft, HiChevronRight} from "react-icons/hi";
import {WEEK_DAYS} from "../const/weekDays.ts";
import {WeekDate} from "../classes/Date.ts";
import {useState} from "react";
import styled from "@emotion/styled";


const DateContainer = styled.div`
	display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: rgb(255 255 255 / 1);
  width: 100%;
  border-radius: 10px;
  padding: 20px 10px;
`

const WeekBlock = styled.div`
	display: flex;
  flex: 1;
  gap: 5px;
  justify-content: center;
`
const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  border-radius: 20px;
  padding: 5px;
  
  &.active{
	color: #fff;
	background-color: #7b75be;
  }
  
`

const WeekDay = styled.span`
	font-size: 14px
`

const Day = styled.div`
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: #f5f7f9;	
  color: #000;
`
const WeekHeader = styled.header`
	display: flex;
  justify-content: space-between;
  align-items: center;
`
const WeekButton = styled.button`
	all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`

const MonthAndYear = styled.b`
  text-align: center;
  font-size: 18px;
`
const currentDay = new WeekDate(new Date(2023, 6, 5));

export const Week = () => {
	const [week, setWeek] = useState<Date[]>(currentDay.getWeek());

	const updateWeek = (side: 'prev' | 'next') => {
		currentDay.changeWeek(side);
		setWeek(currentDay.getWeek());
	}

	return <DateContainer>
		<WeekHeader>
			<WeekButton onClick={() => updateWeek('prev')}><HiChevronLeft/></WeekButton>
			<MonthAndYear>{currentDay.getMonth()} {currentDay.getYear()}</MonthAndYear>
			<WeekButton onClick={() => updateWeek('next')}><HiChevronRight/></WeekButton>
		</WeekHeader>
		<WeekBlock>
			{
				week.map(day => <DayWrapper
					key={day.toDateString()}
					className={day.toDateString() === (new Date()).toDateString()? 'active' : ''}
				><WeekDay>{WEEK_DAYS[day.getDay()].abbr}</WeekDay><Day>{day.getDate()}</Day></DayWrapper>)
			}
		</WeekBlock>
	</DateContainer>
}