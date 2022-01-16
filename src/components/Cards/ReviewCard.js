import React from 'react';

const ReviewCard = () => {
	return (
		<>
			<div className="flex flex-col">
				<div className="flex">
					<img
						className="rounded-full w-14 mr-5"
						src="https://randomuser.me/api/portraits/women/1.jpg"
						alt=""
					/>
					<div className="flex flex-col justify-center">
						<p className="font-bold">Jenny Wilson</p>
						<p>Vice President</p>
					</div>
				</div>
				<p>
					We had an incredible experience working with Landify and were
					impressed they made such a big difference in only three weeks. Our
					team is so grateful for the wonderful improvements they made and their
					ability to get familiar with the product concept so quickly. It acted
					as a catalyst to take our design to the next level and get more eyes
					on our product.
				</p>
			</div>
		</>
	);
};

export default ReviewCard;
