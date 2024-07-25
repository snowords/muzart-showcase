"use client"

import { useEffect, useState } from "react";
import { createClient } from '@/lib/supabase/client'
import Image from "next/image";
import { getPublicUrl } from '@/lib/supabase/tools'

const supabase = createClient();

function SupabaseDemo() {
  const [countries, setCountries] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getCountries();
    getImages()
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("muzart-space").select();
    console.log('supabase cms', data)
    setCountries(data);
  }

  async function getImages() {
    const { data, error } = await supabase
      .storage
      .from('muzart-public')
      .list()

    console.log('group name', data)
    const groupName = data[1].name

    const imageData = await supabase
      .storage
      .from('muzart-public')
      .list(groupName)


    // https://gdysiwisgypszawhkiha.supabase.co/storage/v1/object/public/muzart-public/group-one/20240702-161631.jpg

    console.log('imageData', imageData.data)
    setImages(getPublicUrl(groupName, imageData.data.name))
  }

  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>
            {country.name}
            <Image
              src={country.avatar}
              alt="avatar"
              height="100"
              width="100"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SupabaseDemo;