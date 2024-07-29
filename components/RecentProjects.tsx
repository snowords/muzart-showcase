"use client"
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
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
import { createClient } from '@/lib/supabase/client'
import { getPublicUrl } from '@/lib/supabase/tools'

const supabase = createClient();

const RecentProjects = () => {

  const [typeList, setTypeList] = useState([])
  const [projectList, setProjectList] = useState([])

  useEffect(() => {
    getTypeList()
    getProjectList()
  }, []);

  const getTypeList = async () => {
    const { data } = await supabase.from('project-type').select('*')
    console.log('supabase cms', data)
    setTypeList(data)
  }

  const getProjectList = async () => {
    const { data } = await supabase.from('project').select('*')
    console.log('project data', data)
    setProjectList(data)
  }

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
        <Tabs aria-label="Dynamic tabs" items={typeList} size="lg">
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <BackgroundGradient className="rounded-[22px] p-4 bg-white dark:bg-zinc-900">
                <Card>
                  <CardBody>
                    <BentoGrid className="max-w-4xl mx-auto">
                      {projectList.map((list, i) => (
                        <BentoGridItem
                          key={i}
                          title={list.name}
                          cover={
                            <Image
                              src={getPublicUrl('cloud-space', list.group, list.cover)}
                              alt="cover"
                              height="1000"
                              width="1000"
                              style={{
                                objectFit: 'cover',
                              }}
                            />
                          }
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
const Skeleton = () => {
  return (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image
      src={getPublicUrl('cloud-space', item.group, item.cover)}
      alt="cover"
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