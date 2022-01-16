import React from 'react';

const Section3 = () => {
	return (
		<div className="blue-background flex justify-center items-center h-96">
			<div className="w-9/12">
				<div className="flex justify-between">
					<div className="flex flex-col w-[45%]">
						<img className="w-12" src="/assets/separator.png" alt="" />
						<h1 className="font-bold text-4xl mt-5">Kenapa ke Psikolog?</h1>
						<p className="my-5">
							Membantu anda dalam menghadapi dan mencari solusi dari
							permasalahan yang dihadapi.
						</p>
						<p className="btn btn-blue">Buat Janji</p>
					</div>
					<div className="flex flex-col justify-between font-bold">
						<div className="flex">
							<img className="w-1/12" src="/assets/megaphone.png" alt="" />
							<p className="uppercase ml-5">Pendengar yang baik</p>
						</div>
						<div className="flex">
							<img className="w-1/12" src="/assets/crown.png" alt="" />
							<p className="uppercase ml-5">Anda menjadi prioritas</p>
						</div>
						<div className="flex">
							<img className="w-1/12" src="/assets/smiley.png" alt="" />
							<p className="uppercase ml-5">Ramah</p>
						</div>
						<div className="flex">
							<img className="w-1/12" src="/assets/users.png" alt="" />
							<p className="uppercase ml-5">Teman curhat</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section3;
