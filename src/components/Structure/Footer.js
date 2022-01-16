import React from 'react';

const Footer = () => {
	return (
		<div className="bg-[#F6FCFE] flex flex-col items-center">
			<div className="w-10/12 mt-16">
				<div className="flex justify-between">
					<div className="flex flex-col">
						<img className="w-3/12" src="/assets/logo-celina.png" alt="" />
						<p className="font-semibold w-3/5 my-5">
							Your friend for personal mental health
						</p>
						<div className="flex gap-3">
							<img
								className="w-1/12 cursor-pointer"
								src="/assets/ig.png"
								alt=""
							/>
							<img
								className="w-1/12 cursor-pointer"
								src="/assets/twitter.png"
								alt=""
							/>
							<img
								className="w-1/12 cursor-pointer"
								src="/assets/yt.png"
								alt=""
							/>
							<img
								className="w-1/12 cursor-pointer"
								src="/assets/fb.png"
								alt=""
							/>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="font-bold mb-2">Quick Links</h1>
						<p className="cursor-pointer">Webinar</p>
						<p className="cursor-pointer">Blogs</p>
						<p className="cursor-pointer">About</p>
					</div>
					<div className="flex flex-col gap-2 w-1/5">
						<h1 className="font-bold mb-2">Reach Us</h1>
						<div className="flex">
							<img
								className="w-6 h-6 mr-3"
								src="/assets/email-icon.png"
								alt=""
							/>
							<p>hello@celina.com</p>
						</div>
						<div className="flex">
							<img
								className="w-6 h-6 mr-3"
								src="/assets/phone-icon.png"
								alt=""
							/>
							<p>+62 813 8724 8583</p>
						</div>
						<div className="flex">
							<img
								className="w-6 h-6 mr-3"
								src="/assets/location-icon.png"
								alt=""
							/>
							<p>772 Lyonwood Ave Walnut, CA 91789</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-between w-10/12 mt-16 mb-8">
				<p>
					&copy; <span className="text-blue-prim">Celina Konsultasi</span> |
					Indonesia 2020. All Rights Reserved.
				</p>
				<p>Terms & Conditions | Privacy Policy | Help</p>
			</div>
		</div>
	);
};

export default Footer;
