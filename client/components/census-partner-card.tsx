import Link from "next/link";

function CensusPartnerCard() {
  return (
    <div className="w-[1210px] h-[543px] pl-[921px] pr-[64.54px] pt-[38px] pb-[469px] bg-white/opacity-10 rounded-[49.16px] backdrop-blur-[224.73px] justify-end items-center inline-flex">
      <div className="w-[224.46px] h-9 relative shadow flex-col justify-start items-start flex">
        <div className="w-[232px] h-[35px] bg-cyan-950 rounded-lg" />

        <div className="w-[224.46px] h-9  relative shadow flex-col justify-start items-start inline-flex">
          <div className="w-[224.46px] h-9 pl-[35px] pr-[34.46px] pt-[8.27px] pb-[8.73px] bg-cyan-950 rounded-lg shadow justify-center items-center inline-flex">
            <div className="text-lime-200 text-lg font-normal font-['Px Grotesk'] leading-[18.61px]">
              <Link
                href={"https://1zlrvuskgmr.typeform.com/to/f8D8DKvd"}
                className="text-lime-200 text-lg content-center font-normal font-['Px Grotesk'] leading-[18.61px]"
              >
                Support or Partner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CensusPartnerCard;
