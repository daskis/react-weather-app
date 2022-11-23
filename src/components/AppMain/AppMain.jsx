import React, {useEffect, useState} from 'react';
import AppDay from "../AppDay/AppDay";
import AppDayInfo from "../AppDayInfo/AppDayInfo";

const AppMain = ({isOpen, weather}) => {
	const [icon, setIcon] = useState(""),
		  [temp, setTemp] = useState([]),
		  [day, setDay] = useState([]),
		  [type, setType] = useState([]),
		  [selectedDay, setSelectedDay] = useState(0)
	useEffect(() => {
		if (weather) {
			const tempInfo = []
			const dayInfo = []
			const iconInfo = []
			const typeInfo = []
			weather.forEach((item, i) => {
				if (i < 7) {
					tempInfo.push([item.max_temp, item.min_temp])
					dayInfo.push(item.datetime.slice(5,10).replace("-", "."))
					iconInfo.push(require("../../assets/" + item.icon + ".png"))
					typeInfo.push(item.weather.description)
				}
				// const iconCode = require("../../assets/" + item.icon + ".png")
				// const day = item.datetime.slice(5,10).replace("-", ".")
			})
			setTemp(tempInfo)
			setIcon(iconInfo)
			setDay(dayInfo)
			setType(typeInfo)
		}
	}, [weather])

	return (
		<>
			<div className={"main__container"}>
				<div className={"sm:w-10/12  bg-white mx-auto mt-4 sm:mt-20 flex-col p-6 flex justify-center" +
					" items-start" +
					" rounded-2xl" +
					" shadow"}>
					{weather ? <></> : <h3 className={"text-2xl"}>Включите геолокацию или выберите город в верхнем боковом меню, чтобы
						увидеть погоду</h3>}
					{weather ? <ul className={"flex justify-between md:gap-3 py-4 mb-6 rounded-md border" +
						" overflow-scroll"}>
						{icon  ?
							weather.map((item, i) => {
								return (
									<li onClick={() => setSelectedDay(i)} key={item.id} className={i === selectedDay ? "flex-col justify-center text-center border flex-shrink-0 bg-gray-200" : "flex-col justify-center text-center border flex-shrink-0"}>
										<AppDay  temp={temp[i]} iconCode={icon[i]} day={day[i]}/>
									</li>
								)
							})
							: <></>
						}
					</ul> : <></>}
					{icon
						?
						<AppDayInfo info={temp} type={type  } i={selectedDay} src={icon} day={day}/>
						:
						<div className={"h-44"}></div>
					}

				</div>
			</div>
			{isOpen
				?
				<div className={isOpen ? 'wrapper wrapper__active' : "wrapper"}></div>
				:
				<></>
			}
		</>
	);
};
export default AppMain;