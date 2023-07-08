import {MONTHS} from "../const/months.ts";

export class WeekDate {
	public date: Date;
	constructor(initialDate = new Date()) {
		this.date = initialDate;
	}

	getWeek(): Date[] {
		// getting days before today
		const days: Date[] = [];
		for(let i = this.date.getDay() - 1; i >= 0; --i){
			// days.push()
			this.date.setDate(this.date.getDate() - i);
			days.push(new Date(this.date));
			this.date.setDate(this.date.getDate() + i)
		}

		for(let i = this.date.getDay() + 1; i < 7; ++i){
			this.date.setDate(this.date.getDate() + i - this.date.getDay())
			days.push(new Date(this.date));
			this.date.setDate(this.date.getDate() - i + this.date.getDay());
		}
		return days;
	}

	getYear() {
		return this.date.getFullYear();
	}

	getMonth() {
		return MONTHS[this.date.getMonth()]
	}

	changeWeek(side: 'prev' | 'next') {
		if(side === 'prev') {
			this.date.setDate(this.date.getDate() - 7);
		}else {
			this.date.setDate(this.date.getDate() + 7);
		}
	}

}