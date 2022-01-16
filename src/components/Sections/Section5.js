import React from 'react';
import Carousel from 'react-elastic-carousel';
import ReviewCard from '../Cards/ReviewCard';

const Section5 = () => {
	return (
		<div className="flex h-[470px]">
			<div className="flex justify-center w-6/12 blue-background items-center">
				<div className="w-7/12">
					<img className="w-12" src="/assets/separator.png" alt="" />
					<h1 className="font-bold text-4xl my-3 leading-normal">
						What our customers are saying
					</h1>
					<p>
						Feedback from these happy customers helps us in reaching the
						heights.
					</p>
				</div>
			</div>
			<div className="w-6/12 flex items-center">
				<div className="w-5/6 shadow-[10px_10px_40px_rgba(61,61,61,0.05)] rounded-r-[20px] p-8 flex justify-center">
					<div className="w-11/12 flex flex-col">
						<div className="flex justify-end">
							<img className="w-14" src="/assets/quote.png" alt="" />
						</div>
						<div className="my-2">
							<Carousel>
								<ReviewCard />
								<ReviewCard />
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section5;
