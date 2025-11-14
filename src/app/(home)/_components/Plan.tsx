import Image from "next/image";
import { ContentLayout } from "@/components/common/common";
import { Button } from "@/components/ui/button";

export const PlanSection = () => {
  return (
    <ContentLayout>
      <h1 className="text-center text-[40px] md:text-[42px] lg:text-[48px] leading-[120%] font-extrabold from-mild to-dark bg-gradient-to-b bg-clip-text text-transparent">
        Replace multiple tools with GrowNext & save money
      </h1>
      <h2 className="text-center mt-[1rem] text-[20px] leading-[27px] text-secondary max-w-[1070px] mx-auto">
        Replace multiple tools with GrowNext to streamline your work, save time,
        increase productivity, and cut costs. Using one platform also ensures
        full data privacy, control, security, and efficient workflow management.
      </h2>

      <div className="pt-[3rem] flex gap-4 sm:gap-10 flex-col lg:flex-row px-0">
        <div className="flex-1 rounded-default p-5 flex flex-col bg-gradient-to-b from-border to-light">
          <h3 className="text-[30px] font-bold leading-[120%]">
            Others Tools Price
          </h3>
          <div className="mt-5">
            <div className="flex gap-2.5 py-[15px] border-b items-center border-secondary">
              <Image
                src="/assets/asana.svg"
                alt="project"
                width={45}
                height={45}
                priority
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-[20px] leading-[120%] text-dark-foreground">
                  Asana
                </h4>
                <h5 className="leading-[120%] text-secondary">
                  $109.9 per month for 10 users
                </h5>
              </div>
            </div>
            <div className="flex gap-2.5 py-[15px] border-b items-center border-secondary">
              <Image
                src="/assets/harvest.svg"
                alt="project"
                width={45}
                height={45}
                priority
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-[20px] leading-[120%] text-dark-foreground">
                  Harvest
                </h4>
                <h5 className="leading-[120%] text-secondary">
                  $108 per month for 10 users
                </h5>
              </div>
            </div>
            <div className="flex gap-2.5 py-[15px] border-b items-center border-secondary">
              <Image
                src="/assets/harvest.svg"
                alt="project"
                width={45}
                height={45}
                priority
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-[20px] leading-[120%] text-dark-foreground">
                  Harvest Forecast
                </h4>
                <h5 className="leading-[120%] text-secondary">
                  $50 per month for 10 users
                </h5>
              </div>
            </div>
            <div className="flex gap-2.5 py-[15px] border-b items-center border-secondary">
              <Image
                src="/assets/pipedrive.svg"
                alt="project"
                width={45}
                height={45}
                priority
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-[20px] leading-[120%] text-dark-foreground">
                  Pipedrive Essential
                </h4>
                <h5 className="leading-[120%] text-secondary">
                  $149 per month for 10 users
                </h5>
              </div>
            </div>
            <div className="flex gap-2.5 py-[15px] border-b items-center border-secondary">
              <Image
                src="/assets/notion.svg"
                alt="project"
                width={45}
                height={45}
                priority
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-[20px] leading-[120%] text-dark-foreground">
                  Notion
                </h4>
                <h5 className="leading-[120%] text-secondary">
                  $80 per month for 10 users
                </h5>
              </div>
            </div>
            <div className="flex gap-2.5 py-[15px] border-b items-center border-border">
              <Image
                src="/assets/spreadsheet.svg"
                alt="project"
                width={45}
                height={45}
                priority
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-[20px] leading-[120%] text-dark-foreground">
                  Spreadsheets
                </h4>
                <h5 className="leading-[120%] text-secondary">Free</h5>
              </div>
            </div>
            <div className="flex gap-2.5 py-[15px] items-center">
              <Image
                src="/assets/vacation.svg"
                alt="project"
                width={45}
                height={45}
                priority
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-[20px] leading-[120%] text-dark-foreground">
                  Vacation tracking app
                </h4>
                <h5 className="leading-[120%] text-secondary">
                  $15 per month for the account*
                </h5>
              </div>
            </div>
          </div>
          <button className="rounded-default p-5 text-light mt-4 line-gradient">
            <div className="flex gap-3 flex-col text-left">
              <div className="leading-[120%] text-[30px]">$511.9 per month</div>
              <div className="leading-[120%]">
                for 10 users combined cost, billed yearly
              </div>
            </div>
          </button>
        </div>
        <div className="flex relative">
          <div className="rounded-full p-4 text-[24px] sm:text-[30px] font-bold leading-[36px] shadow-lg m-auto bg-light">
            VS
          </div>
          <div className="absolute w-0.5 h-full left-[50%] translate-x-[50%] -z-50 radial-cross" />
          <div className="absolute h-0.5 w-full top-[50%] translate-y-[50%] -z-50 radial-cross" />
        </div>
        <div className="flex-1 rounded-default p-5 flex flex-col mb-auto line-gradient">
          <h3 className="text-[30px] font-bold leading-[120%] text-light">
            GrowNext&nbsp;Professional Plan
          </h3>
          <div className="mt-5 text-light">
            <div className="flex gap-2.5 py-2.5 border-b items-center border-secondary">
              <Image
                src="/assets/projectmanage.svg"
                alt="project"
                width={45}
                height={45}
                priority
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-[20px] leading-[120%]">
                  Project Management
                </h4>
              </div>
            </div>
            <div className="flex gap-2.5 py-2.5 border-b items-center border-secondary">
              <Image
                src="/assets/timetracking.svg"
                alt="project"
                width={45}
                height={45}
                priority
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-[20px] leading-[120%]">Time Tracking</h4>
              </div>
            </div>
            <div className="flex gap-2.5 py-2.5 border-b items-center border-secondary">
              <Image
                src="/assets/vacationtracing.svg"
                alt="project"
                width={45}
                height={45}
                priority
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-[20px] leading-[120%]">
                  Vacation Tracking
                </h4>
              </div>
            </div>
            <div className="flex gap-2.5 py-2.5 border-b items-center border-secondary">
              <Image
                src="/assets/resourceplanning.svg"
                alt="project"
                width={45}
                height={45}
                priority
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-[20px] leading-[120%]">
                  Resource Planning
                </h4>
              </div>
            </div>
            <div className="flex gap-2.5 py-2.5 border-b items-center border-secondary">
              <Image
                src="/assets/salescrm.svg"
                alt="project"
                width={45}
                height={45}
                priority
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-[20px] leading-[120%]">Sales CRM</h4>
              </div>
            </div>
            <div className="flex gap-2.5 py-2.5 border-b items-center border-secondary">
              <Image
                src="/assets/financials.svg"
                alt="project"
                width={45}
                height={45}
                priority
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-[20px] leading-[120%]">Financials</h4>
              </div>
            </div>
            <div className="flex gap-2.5 py-2.5 border-b items-center border-secondary">
              <Image
                src="/assets/docs.svg"
                alt="project"
                width={45}
                height={45}
                priority
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
                priority
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-[20px] leading-[120%]">Reporting</h4>
              </div>
            </div>
          </div>
          <div className="rounded-default py-5 px-[30px] text-dark bg-light mt-[22px] nav-center flex-col md:flex-row">
            <div className="flex gap-3 flex-col text-left">
              <div className="leading-[120%] text-[26px] font-semibold">
                $240 per month
              </div>
              <div className="leading-[120%] text-secondary">
                for 10 users billed yearly
              </div>
            </div>
            <Button size="sm">Try GrowNext</Button>
          </div>
        </div>
      </div>
      <div className="mx-auto text-paragraph mt-[50px] text-center">
        The comparison above was calculated using the most comparable pricing
        plans as of November 2025.
      </div>
    </ContentLayout>
  );
};
