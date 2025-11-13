import Image from "next/image";

export const Plan = () => {
  return (
    <div className="w-[95%] xl:w-[1100px] 2xl:w-[1170px] mx-auto relative">
      <div className="mx-2.5 px-2 lg:px-0">
        <div className="mx-0">
          <h1 className="text-center text-[40px] md:text-[42px] lg:text-[48px] leading-[120%] font-extrabold from-[#555555] to-black bg-gradient-to-b bg-clip-text text-transparent">
            Swap Multiple Tools for&nbsp;
            <span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[40%] after:h-[30%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:-z-20">
              GrowNext&nbsp;
            </span>
            and Save Money
          </h1>
          <h2 className="text-center mt-4 text-[20px] leading-[27px] text-[#666666] max-w-[1070px] mx-auto">
            Lorem ipsum dolor sit amet consectetur. Rhoncus porttitor velit
            bibendum rutrum pharetra semper. Cursus nunc ultrices nulla dapibus
            purus semper penatibus sit quis. Morbi amet gravida scelerisque
            proin amet morbi.
          </h2>
        </div>
        <div className="mt-[50px] flex gap-4 sm:gap-10 flex-col lg:flex-row px-0">
          <div className="flex-1 rounded-[20px] p-5 flex flex-col bg-gradient-to-b from-[#E9EBED] to-[#FFFFFF]">
            <h3 className="text-[30px] font-bold leading-[120%]">
              Others Tools Price
            </h3>
            <div className="mt-5">
              <div className="flex gap-2.5 py-[15px] border-b items-center border-[#0000004D]">
                <Image
                  src="/assets/asana.svg"
                  alt="project"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-[20px] leading-[120%] text-[#0D0C0A]">
                    Asana
                  </h4>
                  <h5 className="leading-[120%] text=[#666666]">
                    $109.9 per month for 10 users
                  </h5>
                </div>
              </div>
              <div className="flex gap-2.5 py-[15px] border-b items-center border-[#0000004D]">
                <Image
                  src="/assets/harvest.svg"
                  alt="project"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-[20px] leading-[120%] text-[#0D0C0A]">
                    Harvest
                  </h4>
                  <h5 className="leading-[120%] text=[#666666]">
                    $108 per month for 10 users
                  </h5>
                </div>
              </div>
              <div className="flex gap-2.5 py-[15px] border-b items-center border-[#0000004D]">
                <Image
                  src="/assets/harvest.svg"
                  alt="project"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-[20px] leading-[120%] text-[#0D0C0A]">
                    Harvest Forecast
                  </h4>
                  <h5 className="leading-[120%] text=[#666666]">
                    $50 per month for 10 users
                  </h5>
                </div>
              </div>
              <div className="flex gap-2.5 py-[15px] border-b items-center border-[#0000004D]">
                <Image
                  src="/assets/pipedrive.svg"
                  alt="project"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-[20px] leading-[120%] text-[#0D0C0A]">
                    Pipedrive Essential
                  </h4>
                  <h5 className="leading-[120%] text=[#666666]">
                    $149 per month for 10 users
                  </h5>
                </div>
              </div>
              <div className="flex gap-2.5 py-[15px] border-b items-center border-[#0000004D]">
                <Image
                  src="/assets/notion.svg"
                  alt="project"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-[20px] leading-[120%] text-[#0D0C0A]">
                    Notion
                  </h4>
                  <h5 className="leading-[120%] text=[#666666]">
                    $80 per month for 10 users
                  </h5>
                </div>
              </div>
              <div className="flex gap-2.5 py-[15px] border-b items-center border-[#0000004D]">
                <Image
                  src="/assets/spreadsheet.svg"
                  alt="project"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-[20px] leading-[120%] text-[#0D0C0A]">
                    Spreadsheets
                  </h4>
                  <h5 className="leading-[120%] text=[#666666]">Free</h5>
                </div>
              </div>
              <div className="flex gap-2.5 py-[15px] items-center">
                <Image
                  src="/assets/vacation.svg"
                  alt="project"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-[20px] leading-[120%] text-[#0D0C0A]">
                    Vacation tracking app
                  </h4>
                  <h5 className="leading-[120%] text=[#666666]">
                    $15 per month for the account*
                  </h5>
                </div>
              </div>
            </div>
            <button
              className="rounded-[16px] p-5 text-white mt-4"
              style={{
                background:
                  "linear-gradient(151.6deg, #555555 0%, #000000 100%)",
              }}>
              <div className="flex gap-3 flex-col text-left">
                <div className="leading-[120%] text-[30px]">
                  $511.9 per month
                </div>
                <div className="leading-[120%]">
                  for 10 users combined cost, billed yearly
                </div>
              </div>
            </button>
          </div>
          <div className="flex relative">
            <div className="rounded-full p-4 text-[24px] sm:text-[30px] font-bold leading-[36px] shadow-lg m-auto bg-white">
              VS
            </div>
            <div
              className="absolute w-0.5 h-full left-[50%] translate-x-[50%] -z-50"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, #0D0C0A 0%, #FFFFFF 100%)",
              }}></div>
            <div
              className="absolute h-0.5 w-full top-[50%] translate-y-[50%] -z-50"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, #0D0C0A 0%, #FFFFFF 100%)",
              }}></div>
          </div>
          <div
            className="flex-1 rounded-[20px] p-5 flex flex-col mb-auto"
            style={{
              background: "linear-gradient(151.6deg, #555555 0%, #000000 100%)",
            }}>
            <h3 className="text-[30px] font-bold leading-[120%] text-white">
              GrowNext&nbsp;Professional Plan
            </h3>
            <div className="mt-5 text-white">
              <div className="flex gap-2.5 py-2.5 border-b items-center border-[#4C4D51]">
                <Image
                  src="/assets/projectmanage.svg"
                  alt="project"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-[20px] leading-[120%]">
                    Project Management
                  </h4>
                </div>
              </div>
              <div className="flex gap-2.5 py-2.5 border-b items-center border-[#4C4D51]">
                <Image
                  src="/assets/timetracking.svg"
                  alt="project"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-[20px] leading-[120%]">Time Tracking</h4>
                </div>
              </div>
              <div className="flex gap-2.5 py-2.5 border-b items-center border-[#4C4D51]">
                <Image
                  src="/assets/vacationtracing.svg"
                  alt="project"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-[20px] leading-[120%]">
                    Vacation Tracking
                  </h4>
                </div>
              </div>
              <div className="flex gap-2.5 py-2.5 border-b items-center border-[#4C4D51]">
                <Image
                  src="/assets/resourceplanning.svg"
                  alt="project"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-[20px] leading-[120%]">
                    Resource Planning
                  </h4>
                </div>
              </div>
              <div className="flex gap-2.5 py-2.5 border-b items-center border-[#4C4D51]">
                <Image
                  src="/assets/salescrm.svg"
                  alt="project"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-[20px] leading-[120%]">Sales CRM</h4>
                </div>
              </div>
              <div className="flex gap-2.5 py-2.5 border-b items-center border-[#4C4D51]">
                <Image
                  src="/assets/financials.svg"
                  alt="project"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-[20px] leading-[120%]">Financials</h4>
                </div>
              </div>
              <div className="flex gap-2.5 py-2.5 border-b items-center border-[#4C4D51]">
                <Image
                  src="/assets/docs.svg"
                  alt="project"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-[20px] leading-[120%]">Docs</h4>
                </div>
              </div>
              <div className="flex gap-2.5 py-2.5 items-center">
                <Image
                  src="/assets/reporting.svg"
                  alt="project"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col gap-1">
                  <h4 className="text-[20px] leading-[120%]">Reporting</h4>
                </div>
              </div>
            </div>
            <div className="rounded-[16px] py-5 px-[30px] text-black bg-white mt-[22px] nav-center flex-col md:flex-row">
              <div className="flex gap-3 flex-col text-left">
                <div className="leading-[120%] text-[26px] font-semibold">
                  $240 per month
                </div>
                <div className="leading-[120%] text-[#4C4D51]">
                  for 10 users billed yearly
                </div>
              </div>
              <button className="text-lg leading-[120%] px-[1rem] py-[0.5rem] rounded-[32px] text-white bg-gradient-to-b from-[#555555] to-black">
                Try GrowNext
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto text-[#262729] mt-[50px] text-center">
          The comparison above was calculated using the most comparable pricing
          plans as of April 2024
        </div>
      </div>
    </div>
  );
};
