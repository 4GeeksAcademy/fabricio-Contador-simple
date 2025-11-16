import React from "react";
import Counter from "./Counter";
import Hourglass from "./Hourglass";
import "../../styles/counter.css";
import "../../styles/hourglass.css";

export default function Home({
	seconds, running, mode, countFrom, alertAt, actions
}) {
	const {
		startUp, startDown, pause, resume, reset,
		setCountFromUI, setAlertAtUI
	} = actions;

	return (
		<div className="app-container">
			<h1>El contador de arena ⌛</h1>

		
			<Hourglass seconds={seconds} running={running} direction={mode} />

			
			<div className="counter-wrapper">
				<Counter seconds={seconds} />
			</div>

			
			<div className="controls">
				<button onClick={startUp}>Iniciar ↑</button>

				<input
					type="number" min="0"
					value={countFrom}
					onChange={e => setCountFromUI(e.target.value)}
					placeholder="Segundos regresiva"
				/>
				<button onClick={() => startDown()}>Regresiva ↓</button>

				<button onClick={pause}>Pausar</button>
				<button onClick={resume}>Reanudar</button>
				<button onClick={reset}>Reiniciar</button>
			</div>

			<div className="alert-config">
				<label>
					Alerta al llegar a:&nbsp;
					<input
						type="number" min="0"
						value={alertAt}
						onChange={e => setAlertAtUI(e.target.value)}
						placeholder="Ej: 10"
					/>
				</label>
			</div>
		</div>
	);
}