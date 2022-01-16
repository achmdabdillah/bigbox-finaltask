import React from 'react';

const Nav = () => {
	return (
		<div className="flex flex-col container items-center text-center blue-background  ">
			<div className="flex w-10/12 justify-between mt-4 font-bold">
				<img className="w-36" src="/assets/logo-celina.png" alt="logo" />
				<div className="flex justify-between items-center w-5/12">
					<p className="cursor-pointer">Home</p>
					<p className="cursor-pointer">Blogs</p>
					<p className="cursor-pointer">Webinar</p>
					<p className="btn btn-purple">Buat Janji</p>
				</div>
			</div>
		</div>
	);
};

export default Nav;
