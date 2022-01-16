import React from 'react';

const Section1 = () => {
	return (
		<div className="flex flex-col container items-center text-center blue-background curve">
			<div className="flex w-10/12 justify-between mt-20">
				<img className="w-[45%]" src="/assets/Group.png" alt="" />
				<div className="flex flex-col text-left w-[45%] text-[#3d3d3d]">
					<p className="text-[#3D3D3DCC]">WELCOME TO CELINA</p>
					<p className="text-5xl font-extrabold text-purple-prim mt-7">
						Your friend for personal mental health
					</p>
					<p className="text-[#3d3d3d] my-4">
						<span className="font-bold">Celina</span> merupakan layanan
						informasi dan konsultasi online untuk kesehatan mental bersama
						psikolog yang sudah berpengalaman.
					</p>
					<p className="btn btn-blue">Discover More</p>
				</div>
			</div>
		</div>
	);
};

export default Section1;
