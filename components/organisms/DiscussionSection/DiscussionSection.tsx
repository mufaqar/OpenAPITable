"use client";
import {
  DiscussionCard,
  PaginationComponent,
  ReplyCard,
} from "@/components/atoms";
import { LatestTopics } from "../LatestTopics";
import { useState } from "react";

export const DiscussionSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section id="discussion" className="py-10 lg:pt-[96px] bg-light-grey">
      <div className="container">
        <h2 className="text-h2 font-bold text-core-blue mb-[10px]">
          Discussion
        </h2>
        <p className="text-p1 text-core-blue max-w-[900px] mb-6">
          Lorem ipsum dolor sit amet lacinia feugiat tempor. Tellus curabitur
          odio dictumst scelerisque sollicitudin rhoncus sapien.
        </p>
        <p className="text-h5 text-core-blue mb-6">Latest Topics</p>
        <LatestTopics />
        <DiscussionCard
          profileIcon="/oda/open-apis/images/discussion/profile.svg"
          name="Golanginya"
          date="5 min ago"
          showTextEditor={false}
          showDivider={false}
          showLikes={false}
          showCommentsAndRates={true}
          showTagsRow={true}
          title="How to patch KDE on FreeBSD?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla "
        />
        <DiscussionCard
          title="How to patch KDE on FreeBSD?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla "
          profileIcon="/oda/open-apis/images/discussion/profile1.svg"
          name={"Thomas"}
          date="5 min ago"
          showTextEditor={false}
          showDivider={false}
          showLikes={false}
          showCommentsAndRates={true}
          showTagsRow={true}
        />
        <DiscussionCard
          title="How to patch KDE on FreeBSD?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla"
          subText="Posuere arcu arcu consectetur turpis rhoncus tellus. Massa, consectetur massa sit fames nulla eu vehicula ullamcorper. Ante sit mauris elementum sollicitudin arcu sit suspendisse pretium. Nisl egestas fringilla justo bibendum."
          profileIcon="/oda/open-apis/images/discussion/profile1.svg"
          name={"Thomas"}
          date="5 min ago"
          showTextEditor={true}
          showDivider={true}
          showLikes={true}
          showCommentsAndRates={false}
          showTagsRow={true}
          codeImg="/oda/open-apis/images/discussion/code.svg"
        />
        <DiscussionCard
          profileIcon="/oda/open-apis/images/discussion/profile1.svg"
          name={"Thomas"}
          date="5 min ago"
          showTextEditor={true}
          showDivider={true}
          showLikes={true}
          showCommentsAndRates={false}
          showTagsRow={false}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare rutrum amet, a nunc mi lacinia in iaculis. Pharetra ut integer nibh urna. Placerat ut adipiscing nulla lectus vulputate massa, scelerisque. Netus nisl nulla placerat dignissim ipsum arcu."
          subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          borderLeft
          codeImg="/oda/open-apis/images/discussion/code2.svg"
        />
        <ReplyCard />
        <ReplyCard />
        <p className="mt-6 mb-16 flex justify-center underline text-core-blue text-buttonLabel">
          Show more replies
        </p>
        <DiscussionCard
          profileIcon="/oda/open-apis/images/discussion/profile3.svg"
          name="Jamies"
          date="5 min ago"
          showTextEditor={false}
          showDivider={false}
          showLikes={false}
          showCommentsAndRates={true}
          showTagsRow={true}
          title="How to patch KDE on FreeBSD?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla "
        />
        <DiscussionCard
          profileIcon="/oda/open-apis/images/discussion/profile4.svg"
          name="Lola"
          date="5 min ago"
          showTextEditor={false}
          showDivider={false}
          showLikes={false}
          showCommentsAndRates={true}
          showTagsRow={true}
          title="How to patch KDE on FreeBSD?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla "
        />
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};
