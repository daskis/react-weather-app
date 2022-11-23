import './App.css';
import {useEffect, useState} from "react";
import {AddressSuggestions} from 'react-dadata';
import React from "react";
import {useGeolocated} from "react-geolocated";
import 'react-dadata/dist/react-dadata.css';
import Hamburger from 'hamburger-react'
import AppMain from "./components/AppMain/AppMain";

function App() {
	const [weather, setWeather] = useState()
	const [value, setValue] = useState("");
	const [isOpen, setOpen] = useState(false)
	useEffect(() => {
		if (value) {
			console.log(value)
			// `https://api.weatherbit.io/v2.0/history/hourly?lat=${(+value.data.geo_lat).toFixed(4)}&lon=${(+value.data.geo_lon).toFixed(4)}8&start_date=2022-11-21&end_date=2022-11-22&tz=local&key=496e6b19979b427f8d005737250f1e8c`
			fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${(+value.data.geo_lat).toFixed(4)}&lon=${(+value.data.geo_lon).toFixed(4)}&key=496e6b19979b427f8d005737250f1e8c&lang=ru`)
				.then(response => response.json())
				.then(response => {
					setWeather(() => {
						let array = [];
						for (let i = 0; i < 7; i++) {
							let icon = response.data[i].weather.icon
							let type = response.data[i].weather.description
							let arr = response.data[i]
							arr.icon = icon;
							arr.type = type;
							array.push(arr)
							array[i].id = i;
						}
						return array
					})
				})
				.catch(err => console.error(err));
		}
	}, [value])
	// useEffect(() => {
	// 	if (weather.main) {
	// 		console.log(weather.main)
	// 		setCurrentWeather(weather.main.temp)
	// 	}
	// }, [weather])
	// useEffect(() => {
	// 	if (isGeolocationAvailable && coords) {
	// 		getCurrentWeather((+coords.latitude).toFixed(4), (+coords.longitude).toFixed(4))
	// 	}
	// }, [])
	// useEffect(() => {
	// 	getCurrentWeather()
	// }, [])
	// useEffect(() => {
	// 	if (value) {
	// 		console.log(value)
	// 		getCurrentWeather((+value.data.geo_lat).toFixed(4), (+value.data.geo_lon).toFixed(4))
	// 	}
	// }, [])
	// const {coords, isGeolocationAvailable, isGeolocationEnabled} =
	// 	useGeolocated({
	// 		positionOptions: {
	// 			enableHighAccuracy: false,
	// 		},
	// 		userDecisionTimeout: 5000,
	// 	});

	return (<>
			{isOpen ? <div
				className={'absolute right-0 top-16 h-[80vh] pt-7 bottom-0 w-[250px] rounded-bl-2xl bg-white z-10' +
							' p-5'}>
				<h3 className={"text-xl mb-4 font-semibold"}>Выберите город</h3>
				<AddressSuggestions token="bebc2448d3ef84950aba6a38c99f5c558dd429be " value={value}
				                    onChange={setValue}/>
			</div> : <></>}
			<nav className={'flex justify-between p-2 sm:p-4 items-center bg-white shadow relative z-10'}>
				<h1 className={'text-3xl'}>Прогноз погоды</h1>
				<Hamburger toggled={isOpen} toggle={setOpen} direction="right"/>
			</nav>
			<AppMain isOpen={isOpen} weather={weather}/>
		</>);
}

export default App;
