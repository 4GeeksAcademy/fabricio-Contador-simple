import React, { useEffect, useState } from "react";
import Counter from "./Counter.jsx";
import Hourglass from "./Hourglass.jsx";

const Home = () => {

	const [seconds, setSeconds] = useState(0);
	const [running, setRunning] = useState(true);
	const [isCountdown, setIsCountdown] = useState(false);
	const [startFrom, setStartFrom] = useState(60);
	const [alertAt, setAlertAt] = useState("");



	useEffect(() => {

		if (!running) return;

		const id = setInterval(() => {
			setSeconds(prev => {

				if (isCountdown) {
					if (prev <= 0) {

						setRunning(false);
						return 0;
					}
					return prev - 1;
				}

				return prev + 1;
			});
		}, 1000);


		return () => clearInterval(id);
	}, [running, isCountdown]);


	useEffect(() => {
		if (alertAt === "") return;
		const target = Number(alertAt);
		if (Number.isNaN(target)) return;
		if (seconds === target) {
			alert(`⏰ Se alcanzó el tiempo ${target} segundos`);
		}
	}, [seconds, alertAt]);

	const startNormal = () => {
		setIsCountdown(false);
		setSeconds(0);
		setRunning(true);
	};


	const startCountdown = () => {
		const n = Number(startFrom);
		if (Number.isNaN(n) || n < 0) return;
		setIsCountdown(true);
		setSeconds(n);
		setRunning(true);
	};

	const pause = () => setRunning(false);

	const resume = () => {

		if (isCountdown && seconds === 0) return;
		setRunning(true);
	};

	const reset = () => {
		setRunning(false);
		setIsCountdown(false);
		setSeconds(0);
	};


	return (
		<div className="app-container">
			<h1>El contador de arena ⌛</h1>


			<Hourglass seconds={seconds} />


			<div className="counter-wrapper">
				<Counter seconds={seconds} />
			</div>


			<div className="controls">
				<button onClick={startNormal}>Iniciar normal</button>

				<input
					type="number"
					min="0"
					value={startFrom}
					onChange={e => setStartFrom(e.target.value)}
					placeholder="Segundos regresiva"
				/>
				<button onClick={startCountdown}>Iniciar regresiva</button>

				<button onClick={pause}>Pausar</button>
				<button onClick={resume}>Reanudar</button>
				<button onClick={reset}>Reiniciar</button>
			</div>

			<div className="alert-config">
				<label>
					Alerta al llegar a (segundos):{" "}
					<input
						type="number"
						min="0"
						value={alertAt}
						onChange={e => setAlertAt(e.target.value)}
						placeholder="Ej: 10"
					/>
				</label>
			</div>
		</div>
	);
};

export default Home;