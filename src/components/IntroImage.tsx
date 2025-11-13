import Image from "next/image";

const IntroImage = () => {
	return (
		<div className="relative flex">
			<div className="w-[100%] h-[504px] lg:w-[676px] lg:h-[477px] relative">
				<Image src="/intro.svg" alt="#" width={760} height={626} className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
			</div>
			<div className="w-[80px] h-[81px] lg:w-[216px] lg:h-[218px] absolute -bottom-2 lg:-bottom-16 lg:right-48 right-20 translate-x-[100%]">
				<Image src="/introdeco.svg" alt="Intro" width={235} height={238} className="" />
			</div>
		</div>
	);
};

export default IntroImage;
