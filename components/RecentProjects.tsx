import { cn } from "@/lib/utils";
import React from "react";
import { useRouter } from 'next/navigation'
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BackgroundGradient } from "./ui/BackgroundGradient"
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import Image from "next/image";

const RecentProjects = () => {
  const router = useRouter()
  const goCasePage = (key: string) => {
    router.push(`/case/${key}`)
  }

  return (
    <div>
      <div className="m-20">
        <h1 className="heading">
          项目{" "}
          <span className="text-purple">集合</span>
        </h1>
      </div>
      <div className="flex max-w-4xl mx-auto flex-col">
        <Tabs aria-label="Dynamic tabs" items={tabs} size="lg">
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <BackgroundGradient className="rounded-[22px] p-4 bg-white dark:bg-zinc-900">
                <Card>
                  <CardBody>
                    <div>{item.content}</div>
                    <BentoGrid className="max-w-4xl mx-auto">
                      {projectLists.map((list, i) => (
                        <BentoGridItem
                          key={i}
                          title={list.title}
                          description={list.description}
                          header={list.header}
                          icon={list.icon}
                          onClick={() => goCasePage(list.title)}
                          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                      ))}
                    </BentoGrid>
                  </CardBody>
                </Card>  
              </BackgroundGradient>
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  );
}
const tabs = [
  {
    id: "photos",
    label: "Photos",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: "music",
    label: "Music",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "videos",
    label: "Videos",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];
const Skeleton = () => {
  return (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image
      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
      alt="avatar"
      height="100"
      width="100"
      className="w-full h-full"
    />
  </div>
  )
};
const projectLists = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];


export default RecentProjects