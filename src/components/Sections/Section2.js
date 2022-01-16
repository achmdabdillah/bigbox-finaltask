import React from 'react';
import ContentCard from '../Cards/ContentCard';

const Section2 = () => {
	return (
		<div className="flex flex-col justify-center items-center text-center mt-24 mb-24 pb-28 relative">
			<img
				className="absolute w-[40%] bottom-0 left-0"
				src="/assets/vector1.png"
				alt=""
			/>
			<img
				className="absolute w-32 top-32 right-16"
				src="/assets/dots.png"
				alt=""
			/>
			<img className="w-12" src="/assets/separator.png" alt="" />
			<h1 className="font-bold text-4xl w-6/12 my-5">
				Dapatkan saran dan solusi untuk menjaga kesehatan mentalmu
			</h1>
			<div className="flex justify-around w-10/12 gap-10 mt-10 z-50">
				<ContentCard
					image="/assets/psychologist.png"
					title="Psikolog berpengalaman"
					text="Psikolog Celina sudah mendapatkan sertifikat resmi dari Himpunan
							psikologi Indonesia."
				/>
				<ContentCard
					image="/assets/snap.png"
					title="Mudah dan Cepat"
					text="Kemudahan konsultasi dengan respon yang cepat dari psikolog celina."
				/>
				<ContentCard
					image="/assets/chat.png"
					title="Ramah"
					text="Nikmati kenyamanan berkonsultasi dengan psikolog yang ramah."
				/>
			</div>
		</div>
	);
};

export default Section2;
