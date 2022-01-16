import React from 'react';
import ReadingCard from '../Cards/ReadingCard';

const Section6 = () => {
	return (
		<div className="flex flex-col items-center justify-center h-auto mt-40 pb-20 relative">
			<img
				className="absolute top-0 right-0 -z-50 w-1/4"
				src="/assets/vector2.png"
				alt=""
			/>
			<img
				className="absolute w-32 bottom-5 left-16 -z-50"
				src="/assets/dots.png"
				alt=""
			/>
			<img src="" alt="" />
			<img className="w-12" src="/assets/separator.png" alt="" />
			<h1 className="font-bold text-4xl my-5">Recommended reading</h1>
			<div className="w-10/12">
				<div className="flex gap-10">
					<ReadingCard
						thumbnail="/assets/reading1.png"
						category="Keluarga"
						title="Disease detection, check up in the laboratory"
						news="In this case, the role of the health laboratory is very important to do a disease detection..."
					/>
					<ReadingCard
						thumbnail="/assets/reading2.png"
						category="Kepribadian"
						title="Herbal medicines that are safe for consumption"
						news="Herbal medicine is very widely used at this time because of its very good for your health..."
					/>
					<ReadingCard
						thumbnail="/assets/reading3.png"
						category="Kepribadian"
						title="Natural care for healthy facial skin"
						news="A healthy lifestyle should start from now and also for your skin health. There are some..."
					/>
				</div>
			</div>
		</div>
	);
};

export default Section6;
