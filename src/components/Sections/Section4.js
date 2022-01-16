import React from 'react';
import Carousel from 'react-elastic-carousel';
import ProfileCard from '../Cards/ProfileCard';

const Section4 = () => {
	return (
		<div className="flex flex-col justify-center items-center text-center mt-24 mb-32 relative">
			<img
				className="absolute top-10 right-20 w-28"
				src="/assets/dots2.png"
				alt=""
			/>
			<img
				className="absolute bottom-0 -left-6 w-28"
				src="/assets/dots2.png"
				alt=""
			/>
			<img className="w-12" src="/assets/separator.png" alt="" />
			<h1 className="font-bold text-4xl my-5">Psikolog kami</h1>
			<p className="mb-8 text-[#3d3d3d]">
				Lorem ipsum dolor sit amet consectetur.
			</p>
			<div className="w-9/12">
				<Carousel>
					<>
						<ProfileCard
							img="https://randomuser.me/api/portraits/women/11.jpg"
							name="Mustika Permatahati, S.Psi, M.Psi"
							occupation="Psikolog"
						/>
						<ProfileCard
							img="https://randomuser.me/api/portraits/men/11.jpg"
							name="Eduardus Saptono Pambudi S.Psi, M.Psi"
							occupation="Psikolog"
						/>
						<ProfileCard
							img="https://randomuser.me/api/portraits/women/12.jpg"
							name="Fransiscus Febrianto, S.Psi, M.Psi"
							occupation="Psikolog"
						/>
					</>
					<>
						<ProfileCard
							img="https://randomuser.me/api/portraits/women/11.jpg"
							name="Mustika Permatahati, S.Psi, M.Psi"
							occupation="Psikolog"
						/>
						<ProfileCard
							img="https://randomuser.me/api/portraits/men/11.jpg"
							name="Eduardus Saptono Pambudi S.Psi, M.Psi"
							occupation="Psikolog"
						/>
						<ProfileCard
							img="https://randomuser.me/api/portraits/women/12.jpg"
							name="Fransiscus Febrianto, S.Psi, M.Psi"
							occupation="Psikolog"
						/>
					</>
					<>
						<ProfileCard
							img="https://randomuser.me/api/portraits/women/11.jpg"
							name="Mustika Permatahati, S.Psi, M.Psi"
							occupation="Psikolog"
						/>
						<ProfileCard
							img="https://randomuser.me/api/portraits/men/11.jpg"
							name="Eduardus Saptono Pambudi S.Psi, M.Psi"
							occupation="Psikolog"
						/>
						<ProfileCard
							img="https://randomuser.me/api/portraits/women/12.jpg"
							name="Fransiscus Febrianto, S.Psi, M.Psi"
							occupation="Psikolog"
						/>
					</>
				</Carousel>
			</div>
		</div>
	);
};

export default Section4;
