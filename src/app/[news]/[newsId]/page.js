import { singleNews } from '@/utilis/singleNews'
import Image from 'next/image';
import React from 'react'

const SingleNews = async ({ params }) => {
    console.log(params);

    const { data } = await singleNews(params.newsId)
    return (
        <div className="flex gap-[2rem] max-w-[100%] my-[2rem]">

            <div className="image">
                <Image className='max-w-[600px]'
                    src={data.thumbnail_url}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>

            <div className="details grid gap-4">
                <h2 className="text-2xl text-[38px]">{data.title}</h2>
                <p>{data.details}</p>
            </div>

        </div>
    )
}

export default SingleNews