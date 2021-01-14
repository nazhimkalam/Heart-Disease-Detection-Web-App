import './About.css';

function About() {
	return (
		<div className="about">
			<p>
				Cardiovascular disease (CVD) is a class of diseases that involve the heart or blood vessels. CVD includes
				coronary artery diseases (CAD) such as angina and myocardial infarction (commonly known as a heart attack).
				Other CVDs include stroke, heart failure, hypertensive heart disease, rheumatic heart disease, cardiomyopathy,
				abnormal heart rhythms, congenital heart disease, valvular heart disease, carditis, aortic aneurysms, peripheral
				artery disease, thromboembolic disease, and venous thrombosis.
			</p>
			<p>
				The underlying mechanisms vary depending on the disease. Coronary artery disease, stroke, and peripheral artery
				disease involve atherosclerosis. This may be caused by high blood pressure, smoking, diabetes mellitus, lack of
				exercise, obesity, high blood cholesterol, poor diet, and excessive alcohol consumption, among others. High
				blood pressure is estimated to account for approximately 13% of CVD deaths, while tobacco accounts for 9%,
				diabetes 6%, lack of exercise 6% and obesity 5%. Rheumatic heart disease may follow untreated strep throat.
			</p>
			<p>
				It is estimated that up to 90% of CVD may be preventable.Prevention of CVD involves improving risk factors
				through: healthy eating, exercise, avoidance of tobacco smoke and limiting alcohol intake. Treating risk
				factors, such as high blood pressure, blood lipids and diabetes is also beneficial. Treating people who have
				strep throat with antibiotics can decrease the risk of rheumatic heart disease. The use of aspirin in people,
				who are otherwise healthy, is of unclear benefit.
			</p>
			<div className="about__images">
				<img src="https://www.health.harvard.edu/media/content/images/CAC_Heart_N1803_gi473342614.jpg" alt="" />
				<img
					src="https://www.mema.net/wp-content/uploads/2019/06/Screen-Shot-2019-06-21-at-7.50.46-AM.png"
					alt=""
				/>
				<img src="https://2f4izj3opteu3l5obc1sh0bb-wpengine.netdna-ssl.com/wp-content/uploads/sites/14/2016/09/heartbeat-heart-attack.jpg" alt="" />
			</div>
		</div>
	);
}

export default About;
