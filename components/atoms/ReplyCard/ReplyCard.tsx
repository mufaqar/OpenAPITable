import Image from "next/image";

export const ReplyCard = () => {
  return (
    <div className="ml-[160px] mt-6 py-[25px] px-[30px] rounded-tl-[20px] rounded-br-[20px] bg-white shadow-card">
      <p className="text-p3 text-core-blue mb-[15px]">
        <span className="font-bold text-p3 text-core-blue">@unkind</span>, Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ornare rutrum amet, a nunc mi lacinia in iaculis.
        Pharetra ut integer nibh urna.
      </p>

      <div className="flex-1 border-t-[1px] border-gray-200 mb-[10px]"></div>
      <div className="flex items-center justify-between">
        <p className="text-[#808080] font-medium text-p3">by @lazyReplyer</p>
        <div className="flex">
          <Image
            className="mr-[7.3px]"
            src={"/oda/open-apis/icons/corner-right.svg"}
            width={14}
            height={14}
            alt="corner-right"
          />
          <button className="mr-[20px] bg-transparent text-core-lightBlue font-medium text-xs">
            REPLY
          </button>
        </div>
      </div>
    </div>
  );
};
const tagList = ["TAG", "TAG", "TAG"];
