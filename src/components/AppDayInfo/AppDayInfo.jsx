import React from 'react';

const AppDayInfo = ({info, src, day, i, type}) => {


	return (
		<div className={'flex flex-col mx-auto xs:flex-row items-center'}>
			<div className={"w-30 h-30 sm:w-40 sm:h-40 flex items-center justify-center m-4 lg:m-10"}>
				<img className={"h-full w-full"} src={src[i]} alt=""/>
			</div>
			<div>
				<h2 className={"text-xl lg:text-3xl"}>Информация о погоде на {day[i]}</h2>
				<p className={"text-md lg:text-xl font-semibold"}>{type[i]}</p>
				<p className={"text-md lg:text-xl"}>Минимальная температура: <span
					className={"font-semibold"}>{Math.ceil(info[i][1])}</span> &#8451;</p>
				<p className={"text-md lg:text-xl"}>Максимальная температура: <span
					className={"font-semibold"}>{Math.ceil(info[i][0])}</span> &#8451;</p>
			</div>
		</div>
	);
};

export default AppDayInfo;