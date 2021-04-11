import { useState } from 'react';
import './PredictionSection.css';

function PredictionSection() {
	const [result, setResult] = useState();
	const [age, setAge] = useState();
	const [sex, setSex] = useState();
	const [cp, setCp] = useState();
	const [trestbps, setTrestbps] = useState();
	const [chol, setChol] = useState();
	const [fbs, setFbs] = useState();
	const [restecg, setRestecg] = useState();
	const [thalach, setThalach] = useState();
	const [exang, setExang] = useState();
	const [oldPeak, setOldPeak] = useState();
	const [slope, setSlope] = useState();
	const [ca, setCa] = useState();
	const [thal, setThal] = useState();

	const submitResponse = (e) => {
		e.preventDefault();

		const dataToSend = {
			age: age,
			sex: sex,
			cp: cp,
			trestbps: trestbps,
			chol: chol,
			fbs: fbs,
			restecg: restecg,
			thalach: thalach,
			exang: exang,
			oldpeak: oldPeak,
			slope: slope,
			ca: ca,
			thal: thal,
		};

		// POST request using fetch with React hooks
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(dataToSend),
		};
		fetch('https://heart-disease-detect-backend.herokuapp.com/predict', requestOptions)
			.then((response) => response.json())
			.then((result) => setResult(result.Prediction));
	};

	return (
		<div className="predictionSection">
			<div className="predictionSection__range">
				<p>THE MEANING OF THE INPUT TERMS ARE AS FOLLOWS</p>

				<div className="predictionSection__rangeScores">
					<p>
						<span>Age</span>: The person's age in years
					</p>
					<p>
						<span>Sex</span>: The person's sex (1 = male, 0 = female)
					</p>
					<p>
						<span>Cp</span>: The chest pain experienced (Value 1: typical angina, Value 2: atypical angina, Value 3:
						non-anginal pain, Value 4: asymptomatic)
					</p>
					<p>
						<span>Trestbps</span>: The person's resting blood pressure (mm Hg on admission to the hospital)
					</p>
					<p>
						<span>Chol</span>: The person's cholesterol measurement in mg/dl
					</p>
					<p>
						<span>Fbs</span>: The person's fasting blood sugar (&gt; 120 mg/dl, 1 = true; 0 = false)
					</p>
					<p>
						<span>Restecg</span>: Resting electrocardiographic measurement (0 = normal, 1 = having ST-T wave
						abnormality, 2 = showing probable or definite left ventricular hypertrophy by Estes' criteria)
					</p>
					<p>
						<span>Thalach</span>: The person's maximum heart rate achieved
					</p>
					<p>
						<span>Exang</span>: Exercise induced angina (1 = yes; 0 = no)
					</p>
					<p>
						<span>Oldpeak</span>: ST depression induced by exercise relative to rest ('ST' relates to positions on the
						ECG plot.)
					</p>
					<p>
						<span>Slope</span>: the slope of the peak exercise ST segment (Value 1: upsloping, Value 2: flat, Value 3:
						downsloping)
					</p>
					<p>
						<span>Ca</span>: The number of major vessels (0-3)
					</p>
					<p>
						<span>Thal</span>: A blood disorder called thalassemia (3 = normal; 6 = fixed defect; 7 = reversable defect)
					</p>
				</div>
			</div>

			{/* result */}
			{result && (
				<div
					className={result === 'Positive' ? 'predictionSection__resultPositive' : 'predictionSection__resultNegative'}
				>
					<h3>detection: {result}</h3>
				</div>
			)}
			<form>
				<div className="predictionSection__left">
					<p>
						Age: <input size="2" value={age} type="number" onChange={(e) => setAge(e.target.value)} />
					</p>
					<p>
						Sex: <input name="sex" value={sex} onChange={(e) => setSex(e.target.value)} type="number" />
					</p>
					<p>
						Cp: <input name="cp" value={cp} onChange={(e) => setCp(e.target.value)} type="number" />
					</p>
					<p>
						Trestbps:{' '}
						<input name="trestbps" value={trestbps} onChange={(e) => setTrestbps(e.target.value)} type="number" />
					</p>
					<p>
						Chol: <input name="chol" value={chol} onChange={(e) => setChol(e.target.value)} type="number" />
					</p>
					<p>
						Fbs: <input name="fbs" value={fbs} onChange={(e) => setFbs(e.target.value)} type="number" />
					</p>
					<p>
						Restecg: <input name="restecg" value={restecg} onChange={(e) => setRestecg(e.target.value)} type="number" />
					</p>
				</div>
				<div className="predictionSection__right">
					<p>
						Thalach: <input name="thalach" value={thalach} onChange={(e) => setThalach(e.target.value)} type="number" />
					</p>
					<p>
						Exang: <input name="exang" value={exang} onChange={(e) => setExang(e.target.value)} type="number" />
					</p>
					<p>
						Oldpeak: <input name="oldpeak" type="number" value={oldPeak} onChange={(e) => setOldPeak(e.target.value)} />
					</p>
					<p>
						Slope: <input name="slope" type="number" value={slope} onChange={(e) => setSlope(e.target.value)} />
					</p>
					<p>
						Ca: <input name="ca" type="number" value={ca} onChange={(e) => setCa(e.target.value)} />
					</p>
					<p>
						Thal: <input name="thal" value={thal} onChange={(e) => setThal(e.target.value)} type="number" />
					</p>
					<button type="submit" className="predictionSection__predictBTN" onClick={submitResponse}>
						PREDICT
					</button>
				</div>
			</form>
		</div>
	);
}

export default PredictionSection;
