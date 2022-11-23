import React, {useCallback, useEffect, useState} from 'react';

const AppDay = ({temp, iconCode, day}) => {
	// useEffect(() => {
	// 	console.log(iconCode)
	// }, [])

	const [average, setAverage] = useState(0)
	useEffect(() => {
		setAverage(() => {
			return ((+temp[0] + +temp[1]) / 2).toFixed(0)
		})
	})


	return (
		<>
			<p className={"text-md md:text-lg"}>{day}</p>
			<img className={"w-3/5 md:w-4/5 mx-auto"} src={iconCode} alt="123"/>
			{average > 0
				? <h3 className={"text-lg font-semibold md:text-2xl bg-gray-100"}>+{Math.ceil(average)}</h3>
				: <h3 className={"text-lg font-semibold md:text-2xl bg-gray-100"}>{Math.ceil(average)}</h3>}
		</>

	);
};

export default AppDay;