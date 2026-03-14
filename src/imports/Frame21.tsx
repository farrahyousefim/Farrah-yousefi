import img14B74Fab6F4E42C28Fe6Ce40C0B95Cc81 from "@/assets/510e6da15114f66607b05bf127afff2ef59fde10.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Lustria:Regular',sans-serif] items-center leading-[normal] not-italic relative shrink-0 text-[36px] text-white w-[309px] whitespace-pre-wrap">
      <p className="relative shrink-0 w-full">Farrah Yousefi</p>
      <p className="relative shrink-0 w-full">Product Designer</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-black content-stretch flex gap-[10px] items-start left-[335px] px-[24px] py-[16px] top-[286px] w-[372px]">
      <Frame />
      <div className="absolute left-[328px] size-[17px] top-[80px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <circle cx="8.5" cy="8.5" fill="var(--fill-0, white)" id="Ellipse 1" r="8.5" />
        </svg>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex items-center relative size-full">
      <div className="absolute bg-[#0c0e10] h-[379px] left-[-34px] top-[112px] w-[67px]" />
      <div className="absolute left-[334.5px] size-[60px] top-[213px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <circle cx="30" cy="30" fill="var(--fill-0, black)" id="Ellipse 1" r="30" />
        </svg>
      </div>
      <div className="h-[526px] relative shrink-0 w-[394.5px]" data-name="14B74FAB-6F4E-42C2-8FE6-CE40C0B95CC8 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img14B74Fab6F4E42C28Fe6Ce40C0B95Cc81} />
      </div>
      <Frame1 />
    </div>
  );
}