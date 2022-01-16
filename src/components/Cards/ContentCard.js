import React from 'react';

const ContentCard = ({ image, title, text }) => {
	return (
		<div className="flex flex-col items-center w-72 text-left rounded-[20px] shadow-[20px_20px_48px_rgba(128,90,177,0.04)] bg-white">
			<div className="w-11/12 pt-4">
				<img className="w-3/12" src={image} alt="" />
				<h1 className="font-bold pt-4">{title}</h1>
				<p className="py-4">{text}</p>
			</div>
		</div>
	);
};

export default ContentCard;
