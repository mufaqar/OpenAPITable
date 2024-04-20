import Image from "next/image";
import { Button } from "../Button";
import { twMerge } from "tailwind-merge";

interface DiscussionCardProps {
  profileIcon: string;
  title?: string;
  name: string;
  date: string;
  text?: string;
  subText?: string;
  codeImg?: string;
  showTextEditor: boolean;
  showDivider: boolean;
  showLikes: boolean;
  showCommentsAndRates: boolean;
  showTagsRow: boolean;
  borderLeft?: boolean;
}
export const DiscussionCard = ({
  profileIcon,
  title,
  name,
  date,
  text,
  subText,
  codeImg,
  showTextEditor,
  showDivider,
  showLikes,
  showCommentsAndRates,
  showTagsRow,
  borderLeft,
}: DiscussionCardProps) => {
  return (
    <div
      className={twMerge(
        borderLeft && "ml-[104px] border-4 border-l-[#F09832]",
        "mt-6 py-[25px] px-[30px] rounded-tl-[20px] rounded-br-[20px] bg-white shadow-card",
      )}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image src={profileIcon} width={40} height={40} alt="profile" />
          <div className="flex flex-col ml-[15px]">
            <p className="text-lable text-[#333333]">{name}</p>
            <p className="text-[10px] text-[#333333]">{date}</p>
          </div>
        </div>
        <Image
          className="self-start"
          src={"/oda/open-apis/icons/dots.svg"}
          width={24}
          height={24}
          alt="dots"
        />
      </div>
      {title && (
        <h5 className="text-h5 text-core-blue mt-[15px] mb-[10px]">
          How to patch KDE on FreeBSD?
        </h5>
      )}

      {text && <p className="text-p3 text-core-blue  mb-[15px]">{text}</p>}
      {showTextEditor && (
        <>
          {codeImg && (
            <Image
              className="mb-[10px]"
              src={codeImg}
              width={645}
              height={146}
              alt="code"
            />
          )}

          {subText && (
            <p className="text-p3 text-core-blue mb-[15px]">{subText}</p>
          )}
        </>
      )}
      {showDivider && (
        <div className="flex-1 border-t-[1px] border-gray-200 mb-[10px]"></div>
      )}
      {showLikes && (
        <div className="flex items-center justify-between mb-[20px]">
          <div className="flex items-center">
            <Image
              className="mr-[6.3px]"
              src={"/oda/open-apis/icons/thumb-up.svg"}
              width={14}
              height={14}
              alt="thumb-up"
            />
            <p className="text-[#A9ADB1] font-light text-xs mr-[20px]">12</p>
            <Image
              className="mr-[6.3px]"
              src={"/oda/open-apis/icons/thumb-down.svg"}
              width={14}
              height={14}
              alt="thumb-down"
            />
            <p className="text-[#A9ADB1] font-light text-xs">3</p>
          </div>
          <div className="flex items-center">
            <Image
              className="mr-[5px]"
              src={"/oda/open-apis/icons/two-arrow-up.svg"}
              width={14}
              height={14}
              alt="arrow-up"
            />
            <button className="mr-[20px] bg-transparent text-core-lightBlue font-medium text-xs">
              Hide All Replies (2)
            </button>
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
      )}
      {showTagsRow && (
        <div className="flex items-center justify-between">
          <div className="flex">
            {tagList.map((tag) => {
              return (
                <div className="h-[22px] py-1 px-2 rounded-tl-[8px] rounded-br-[8px] bg-[#e5e9ec] mr-[10px] text-[10px] text-[#333333]">
                  {tag}
                </div>
              );
            })}
          </div>
          {showCommentsAndRates ? (
            <div className="flex items-center">
              <Image
                className="mr-[3.6px]"
                src={"/oda/open-apis/icons/eye.svg"}
                width={15}
                height={15}
                alt="eye"
              />
              <p className="mr-[15px] text-[#333333] text-[13px]">15</p>
              <Image
                className="mr-[3px]"
                src={"/oda/open-apis/icons/message-square.svg"}
                width={15}
                height={15}
                alt="message square"
              />
              <p className="mr-[15px] text-[#333333] text-[13px]">155</p>

              <Image
                className="mr-[3px]"
                src={"/oda/open-apis/icons/arrow-up.svg"}
                width={15}
                height={15}
                alt="message square"
              />
              <p className="mr-[15px] text-[#333333] text-[13px]">125</p>
            </div>
          ) : (
            <Button
              icon={
                <Image
                  src={`/oda/open-apis/icons/arrow-up-white.svg`}
                  width={13}
                  height={13}
                  alt="arrow right"
                />
              }
              className="w-[95px] h-[30px]"
              textSpanStyle="font-black text-xs"
            >
              Vote
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
const tagList = ["TAG", "TAG", "TAG"];
