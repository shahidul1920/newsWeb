import { allCatg } from '@/utilis/getAllCat'
import React from 'react'

export default async function Catag() {
    const {data} = await allCatg()
  return (
    <div className='p-[5px]'>
      <div className="heading">
        <h2 className="text-[50px] font-semibold">
          Latest News
        </h2>
      </div>
      <div className="flex my-[2rem] bg-hero max-w-[100%] flex-wrap gap-5">
       {data?.map((e)=>(
        <div className="btn btn-outline rounded-[25px]">
          {e.title}
        </div>
       ))}
    </div>
    </div>
  )
}
