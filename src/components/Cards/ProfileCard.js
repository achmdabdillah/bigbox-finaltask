import React from 'react';

const ProfileCard = ({ img, name, occupation }) => {
	return (
		<div className="w-3/12 flex flex-col">
			<img className="rounded-full" src={img} alt="" />
			<h1 className="font-bold">{name}</h1>
			<p className="text-[#3D3D3D66] font-bold uppercase">{occupation}</p>
		</div>
	);
};

export default ProfileCard;
