import Image from "next/image";

const Footer = () => {
	return (
		<footer className="w-[95%] xl:w-[1100px] 2xl:w-[1170px] mx-auto relative">
			<div className="mt-2.5 mb-14">
				<div className="flex justify-between flex-col lg:flex-row">
					<div className="rounded-[19px] p-5 flex gap-[22px] flex-col bg-gradient-to-b from-[#E9EBED] to-white w-full lg:w-[465px] relative">
						<Image src="/assets/contact-database.svg" alt="database" width={144} height={144} className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]" />
						<div className="text-[#1A2749] text-[20px] leading-[120%] font-bold uppercase z-10">Your privacy is our responsibility</div>
						<div className="text-[#666666] leading-[23px] z-10">
							We believe that trust is paramount in a relationship. We do not own or sell your data, and we most certainly do not bank on advertising-based business models. The only way
							we make money is from the software license fees you pay us.
						</div>
						<button className="bg-gradient-to-b from-[#555555] to-black gap-2.5 px-[16px] py-[8px] rounded-[32px] flex mr-auto items-center z-10">
							<Image src="/assets/playbtn.png" alt=">" width={20} height={20} />
							<div className="font-medium text-white">Watch Video</div>
						</button>
					</div>
					<div className="flex justify-between flex-col lg:flex-row gap-x-0 gap-y-4 lg:gap-[69px] mt-5 mx-5 lg:mx-0">
						<div className="flex justify-between gap-x-0 gap-y-4 lg:gap-[69px]">
							<div className="flex flex-col gap-2">
								<div className="text-[20px] leading-[120%] font-medium from-[#555555] to-black bg-gradient-to-b bg-clip-text text-transparent">Company</div>
								<div className="flex flex-col">
									<a href="#" className="text-[#666666] text-lg leading-[35px]">
										About Us
									</a>
									<a href="#" className="text-[#666666] text-lg leading-[35px]">
										Pricing
									</a>
									<a href="#" className="text-[#666666] text-lg leading-[35px]">
										Features
									</a>
									<a href="#" className="text-[#666666] text-lg leading-[35px]">
										Integrations
									</a>
									<a href="#" className="text-[#666666] text-lg leading-[35px]">
										Contact
									</a>
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<div className="text-[20px] leading-[120%] font-medium from-[#555555] to-black bg-gradient-to-b bg-clip-text text-transparent">RESOURCES</div>
								<div className="flex flex-col">
									<a href="#" className="text-[#666666] text-lg leading-[35px]">
										Login
									</a>
									<a href="#" className="text-[#666666] text-lg leading-[35px]">
										Register
									</a>
									<a href="#" className="text-[#666666] text-lg leading-[35px]">
										Blog
									</a>
									<a href="#" className="text-[#666666] text-lg leading-[35px]">
										Career
									</a>
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<div className="text-[20px] leading-[120%] font-medium from-[#555555] to-black bg-gradient-to-b bg-clip-text text-transparent">SECURITY</div>
								<div className="flex flex-col">
									<a href="#" className="text-[#666666] text-lg leading-[35px]">
										Privacy Policy
									</a>
									<a href="#" className="text-[#666666] text-lg leading-[35px]">
										Terms & Conditions
									</a>
									<a href="#" className="text-[#666666] text-lg leading-[35px]">
										Refund Policy
									</a>
									<a href="#" className="text-[#666666] text-lg leading-[35px]">
										Site map
									</a>
								</div>
							</div>
						</div>
						<div className="flex flex-row lg:flex-col gap-2.5">
							<a href="" className="rounded-[6px] bg-[#EBECED] w-[30px] h-[30px] full-center">
								<Image src="/assets/linkedin.png" alt="Li" width={15} height={15} />
							</a>
							<a href="" className="rounded-[6px] bg-[#EBECED] w-[30px] h-[30px] full-center">
								<Image src="/assets/X.png" alt="Li" width={15} height={15} />
							</a>
							<a href="" className="rounded-[6px] bg-[#EBECED] w-[30px] h-[30px] full-center">
								<Image src="/assets/facebook.png" alt="Li" width={15} height={15} />
							</a>
							<a href="" className="rounded-[6px] bg-[#EBECED] w-[30px] h-[30px] full-center">
								<Image src="/assets/instagram.png" alt="Li" width={15} height={15} />
							</a>
							<a href="" className="rounded-[6px] bg-[#EBECED] w-[30px] h-[30px] full-center">
								<Image src="/assets/youtube.png" alt="Li" width={15} height={15} />
							</a>
						</div>
					</div>
				</div>
				<div className="flex justify-center lg:justify-between items-center gap-y-4 mt-6 lg:mt-14 flex-col lg:flex-row">
					<div className="flex gap-2.5">
						<button className="hover:scale-105">
							<Image src="/assets/googleplay.png" alt="GooglePlay" width={175} height={60} className="w-auto h-[30px] aspect-auto" />
						</button>
						<button className="hover:scale-105">
							<Image src="/assets/appstore.png" alt="AppStore" width={175} height={60} className="w-auto h-[30px] aspect-auto" />
						</button>
						<button className="hover:scale-105">
							<Image src="/assets/microsoft.png" alt="Microsoft" width={175} height={60} className="w-auto h-[30px] aspect-auto" />
						</button>
						<button className="hover:scale-105">
							<Image src="/assets/macapp.png" alt="MacApp" width={175} height={60} className="w-auto h-[30px] aspect-auto" />
						</button>
						<button className="hover:scale-105">
							<Image src="/assets/linux.png" alt="Linux" width={175} height={60} className="w-auto h-[30px] aspect-auto" />
						</button>
					</div>
					<div className="text-[16px] md:text-[18px] lg:text-[20px] leading-[35px] text-[#374550]">© 2024 GrowNext. Manage cookies Legal Privacy</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
