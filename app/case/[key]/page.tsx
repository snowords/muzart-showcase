"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { createClient } from '@/lib/supabase/client'
import { getPublicUrl } from '@/lib/supabase/tools'

const supabase = createClient();

const CasePost = ({
  params
}: {
  params: {
    key: String
  }
}) => {

  const [caseInfo, setCaseInfo] = useState({})
  const [imageList, setImageList] = useState([])

  useEffect(() => {
    if (params && params.key) {
      getCaseInfo();
    } else {
      console.log("params.key is not defined");
    }
  }, [params.key])

  async function getCaseInfo () {
    const { data } = await supabase.from('project').select().eq('id', params.key)
    setCaseInfo(data ? data[0] : {})
  }

  useEffect(() => {
    if (Object.keys(caseInfo).length > 0) {
      getImageList();
    }
  }, [caseInfo])

  const getImageList = async () => {
    const { data } = await supabase
      .storage
      .from('cloud-space')
      .list(caseInfo.group || '', {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
      })

    setImageList(data)
  }

  return (
      <div className="bg-violet-950 px-6">
        <FloatingNav navItems={navItems} />
        <div className="max-w-2xl mx-auto antialiased pt-4 relative mt-36">
          <div className="text-3xl text-center my-6">{caseInfo.name}</div>
          {imageList.map((item, i) => (
            <div key={i}>
              <Image
                priority
                src={getPublicUrl('cloud-space', caseInfo.group, item.name)}
                alt="case image"
                height="1000"
                width="1000"
                className="rounded-lg mb-10 object-cover"
              />
            </div>
          ))}
        </div>
        <Footer />
      </div>
  );
}

export default CasePost