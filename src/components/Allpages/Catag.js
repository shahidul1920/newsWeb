import { allCatg } from '@/utilis/getAllCat'
import React from 'react'

export default async function Catag() {
    const {data} = await allCatg()
  return (
    <div>
      <div className="heading">
        <h2 className="text-[50px] font-semibold">
          Latest News
        </h2>
      </div>
      <div className="flex bg-hero gap-5">
       {data?.map((e)=>(
        <div className="btn btn-outline my-[2rem] rounded-[25px]">
          {e.title}
        </div>
       ))}
    </div>
    </div>
  )
}
