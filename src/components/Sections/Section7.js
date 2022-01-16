import React from 'react';

const Section7 = () => {
	return (
		<div className="flex justify-center items-center mt-20 mb-20">
			<div className="w-10/12 h-[273px] bg-[url('img/background.png')] bg-no-repeat bg-cover flex">
				<div className="flex justify-around items-center">
					<img className="w-3/12" src="/assets/Frame.png" alt="" />
					<div className="flex flex-col w-8/12 text-white">
						<h1 className="font-bold text-4xl">
							Jangan menunda untuk kesehatan mental kamu
						</h1>
						<p className="my-4">
							Buat janji sekarang dan dapatkan solusi atas masalah kamu
						</p>
						<p className="btn btn-white">Buat Janji</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section7;
