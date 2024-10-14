import { allNews } from '@/utilis/getAllNews'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AllNews = async () => {

    const { data } = await allNews()
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            {data.map((news) => (
                <div className="newsSection p-[1rem] w-[100%]">
                    <Image className='w-[100%]'
                        src={news.thumbnail_url}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />

                    <h2 className="text-xl text-[30px] my-[10px]">{news.title}</h2>
                    <p className='inline-block p-[15px] py-[7px] text-white rounded-[20px] bg-red-400'>{news.category}</p>
                    <p>{news.details.slice(0, 200)}........</p>
                    <Link href={`/${news.category}/${news._id}`}>

                        <button className='btn btn-outline my-[15px] rounded-[25px]'>Reed more</button>

                    </Link>

                </div>
            ))}
        </div>
    )
}

export default AllNews