export type ImageConfig = {
    position: string
    width: string
    aspectRatio: string
    src: string
    alt?:string
}

export type TimelineEntry = {
    id: string
    year: string
    images: string
}

export const TIMELINE_ENTRIES = [
    {
         id:"entry-2024",
        year:"2024",
        images:[
            {
                position:"left-0 top-0",
                width:"xl:w-[25vw] w-[40vw]",
                aspectRatio:"aspect-video",
                src:'/assets/VithiHomePage.png',
                alt:"project-4"
            },
             {
                position:"xl:top-0 md:top-50 top-10 right-0",
                width:"xl:w-[300px] md:w-[350px] w-[150px]",
                aspectRatio:"aspect-video",
                src:'/assets/Laverne.png',
                alt:"project-5"
            }, {
                position:"xl:top-100  md:top-180 top-100 right-0",
                width:"xl:w-[400px] md:w-[350px] w-[150px]",
                aspectRatio:"aspect-video",
                src:'/images/Amaiya.png',
                alt:"project-6"
            },
            
        ]
    },
    {
        id:"entry-2025",
        year:"2025",
        images:[
            {
                position:"top-0 left-0",
                width:"xl:w-[20vw] w-[40vw]",
                aspectRatio:"aspect-video",
                src:'/assets/CSOD.png',
                alt:"project-1"
            },
             {
                position:"bottom-0 left-1/10",
                width:"xl:w-[215.625px] md:w-[200px] w-[100px]",
                aspectRatio:"aspect-square",
                src:'/assets/QrPage.png',
                alt:"project-2"
            }, {
                position:"top-0 right-0",
                width:"xl:w-[215.625px] md:w-[200px] w-[100px]",
                aspectRatio:"aspect-[3/4]",
                src:'/images/Abhinav-bharath.png',
                alt:"project-3"
            },
            {
                position:"bottom-0 xl:right-20 right-0",
                width:"xl:w-[215.625px] md:w-[200px]  w-[100px]",
                aspectRatio:"aspect-[3/4]",
                src:'/assets/taika.png',
                alt:"project-3"
            },
             {
                position:"left-50 xl:top-60 md:top-80 top-40",
                width:"xl:w-[300px] md:w-[250px] w-[100px]",
                aspectRatio:"aspect-video",
                src:'/assets/Gitoo.png',
                alt:"project-3"
            },
        ]
    },
    
    //  {
    //      id:"entry-1984",
    //     year:"1984",
    //     images:[
    //         {
    //             position:"left-0 top-0",
    //             width:"w-[20vw]",
    //             aspectRatio:"aspect-video",
    //             src:'/assets/c2.jpg',
    //             alt:"project-7"
    //         },
    //          {
    //             position:"bottom-0 left-1/10",
    //             width:"w-[215.625px]",
    //             aspectRatio:"aspect-square",
    //             src:'/assets/decimal.jpg',
    //             alt:"project-8"
    //         }, {
    //             position:"top-0 right-0",
    //             width:"w-[215.625px]",
    //             aspectRatio:"aspect-[3/4]",
    //             src:'/assets/locomotive.png',
    //             alt:"project-9"
    //         },
    //     ]
    // }
]

export const getYear = ()=> TIMELINE_ENTRIES.map(entry=>entry.year);