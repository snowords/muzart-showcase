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

  useEffect(() => {
    getTypeList()
  }, []);

  const getTypeList = async () => {
    const { data } = await supabase.from('project-type').select('*')

    const result: any = await supabase.from('project').select('*')
    const formatList = data.map(t => {
      const groupList = result.data.filter(a => a.typeId === t.key)
      return {
        key: t.key,
        label: t.label,
        groupList
      }
    });

    console.log('formatList', formatList)
    setTypeList(formatList)
  }

  const router = useRouter()
  const goCasePage = (key: string) => {
    router.push(`/case/${key}`)
  }

  return (
    <div id="projects">
      <div className="m-20">
        <h1 className="heading">
          项目{" "}
          <span className="text-purple">集合</span>
        </h1>
      </div>
      <div className="flex max-w-4xl mx-auto flex-col">
        <Tabs size="lg">
        {
          typeList.map(tabData => (
            <Tab key={tabData.key} title={tabData.label}>
              <BackgroundGradient className="rounded-[22px] p-4 bg-white dark:bg-zinc-900">
                <Card>
                  <CardBody>
                    <BentoGrid className="max-w-4xl mx-auto">
                      {tabData.groupList?.length > 0 ? tabData.groupList.map((list, i) => (
                        <BentoGridItem
                          key={list.id}
                          title={list.name}
                          cover={
                            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
                              <Image
                                src={getPublicUrl('cloud-space', list.group, list.cover)}
                                alt="cover"
                                height="1000"
                                width="1000"
                                style={{
                                  objectFit: 'cover',
                                }}
                              />
                            </div>
                          }
                          onClick={() => goCasePage(list.key || '1')}
                          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                      )) : null}
                    </BentoGrid>
                  </CardBody>
                </Card>  
              </BackgroundGradient>
            </Tab>
            
          ))
        }

        </Tabs>
      </div>
    </div>
  );
}
export default RecentProjects  