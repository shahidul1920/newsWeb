export const allNews = async () =>{
    const res = await fetch("https://the-news-portal-server.vercel.app/all-news",{
        next:{
            revalidate: 30
        }
    })
    return res.json()
} 