import { allNews } from '@/utilis/getAllNews'
import Image from 'next/image'
import React from 'react'

export const Sidebar = async () => {
  const { data } = await allNews()
  return (
    <div className="p-[10px]">
      <div className="offers">

      </div>

      <div className="sidenews">
        {data.slice(1, 5).map((news) => (
          <div className="my-[15px] card bg-base-100 image-full max-w-[100%] overflow-hidden shadow-xl">
            <figure className='max-w-[100%]'>
            <Image className='w-[100%]'
                        src={news.thumbnail_url}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news.title}</h2>
              <p>{news.details.slice(0,60)}.....</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
