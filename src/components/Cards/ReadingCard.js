import React from 'react';

const ReadingCard = ({ thumbnail, category, title, news }) => {
	return (
		<div className="w-1/3 shadow-[10px_40px_50px_rgba(61,61,61,0.06)] rounded-xl bg-white">
			<img className="rounded-t-xl" src={thumbnail} alt="" />
			<div className="flex flex-col justify-center items-center">
				<div className="w-10/12 py-4">
					<p className="font-semibold text-purple-prim">{category}</p>
					<p className="font-bold my-3">{title}</p>
					<p className="mb-3">{news}</p>
					<div className="flex items-center cursor-pointer text-blue-prim font-semibold hover:text-[#E56841] hover:transition-all hover:gap-2">
						<p>Read more</p>
						<i className="fas fa-arrow-right ml-2" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReadingCard;
