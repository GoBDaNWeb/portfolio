import {SiNextdotjs, SiRedux, SiSupabase, SiTailwindcss, SiFirebase, SiTypescript} from 'react-icons/si'
import {FaReact, FaVuejs, FaNodeJs} from 'react-icons/fa'

export const projects = [
    {
        id: '1',
        img: 'gallery',
        title: 'Pin Gallery',
        methods: [
            {
                title: 'React js',
                icon: <FaReact className='text-[#5ED3F3]'/>,
            },
            {
                title: 'TypeScript',
                icon: <SiTypescript className='text-[#0174C1]'/>
            },
            {
                title: 'Redux',
                icon: <SiRedux className='text-[#6F45B1]'/> ,
            },
            {
                title: 'Node js',
                icon: <FaNodeJs className='text-[#84BB00]'/>
            }, 
            {
                title: 'Tailwind',
                icon: <SiTailwindcss className='text-[#35B3EB]'/>,
            }, 
        ],
        description: 'Fullstack приложение по типу pinterest',
        link_github_front: 'https://github.com/GoBDaNWeb/fullstack-pin-gallery-frontend',
        link_github_back: 'https://github.com/GoBDaNWeb/fullstack-pin-gallery-backend',
        link_live_demo: 'https://fullstack-pin-gallery-frontend.vercel.app/',
        status: 3,
        status_message: 'Приложение может долго грузиться из-за бесплатного хостинга сервера'
    },
    {
        id: '2',
        img: 'intercourse',
        title: 'Intercourse',
        methods: [
            {
                title: 'Next js',
                icon:  <SiNextdotjs className='text-[#1C252C]'/>,
            },
            {
                title: 'Redux',
                icon: <SiRedux className='text-[#6F45B1]'/> ,
            },
            {
                title: 'Supabase',
                icon: <SiSupabase className='text-[#3BC389]'/>,
            },
            {
                title: 'Tailwind',
                icon: <SiTailwindcss className='text-[#35B3EB]'/>,
            }, 
        ],
        description: 'Realtime Chat приложение на подобии Telegram',
        link_github_front: 'https://github.com/GoBDaNWeb/intercourse-app',
        link_github_back: '',
        link_live_demo: 'https://intercourse-app.vercel.app/',
        status: 1,
        status_message: ''
    },
    {
        id: '3',
        img: 'fullstack-blog',
        title: 'BOGDAN BLOG',
        methods: [
            {
                title: 'React js',
                icon: <FaReact className='text-[#5ED3F3]'/>,
            },
            {
                title: 'TypeScript',
                icon: <SiTypescript className='text-[#0174C1]'/>
            },
            {
                title: 'Redux',
                icon: <SiRedux className='text-[#6F45B1]'/> ,
            },
            {
                title: 'Node js',
                icon: <FaNodeJs className='text-[#84BB00]'/>
            }, 
        ],
        description: 'Небольшое FullStack приложение - блог',
        link_github_front: 'https://github.com/GoBDaNWeb/fullstack-blog-react-frontend',
        link_github_back: 'https://github.com/GoBDaNWeb/fullstack-blog-react-backend',
        link_live_demo: 'https://fullstack-blog-react-frontend.vercel.app/',
        status: 3,
        status_message: 'Приложение может долго грузиться из-за бесплатного хостинга сервера'
    },
    {
        id: '4',
        img: 'deshi-livery',
        title: 'DisheLivery',
        methods: [
            {
                title: 'React js',
                icon: <FaReact className='text-[#5ED3F3]'/>,
            },
            {
                title: 'TypeScript',
                icon: <SiTypescript className='text-[#0174C1]'/>
            },
            {
                title: 'Redux',
                icon: <SiRedux className='text-[#6F45B1]'/> ,
            },
        ],
        description: 'Приложение для заказа еды',
        link_github_front: 'https://github.com/GoBDaNWeb/deshi-livery',
        link_github_back: '',
        link_live_demo: 'https://deshi-livery.vercel.app/',
        status: 1,
        status_message: ''
    },
]