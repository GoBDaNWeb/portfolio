import {SiNextdotjs, SiRedux, SiSupabase, SiTailwindcss, SiFirebase} from 'react-icons/si'
import {FaReact, FaVuejs, FaNodeJs} from 'react-icons/fa'

export const projects = [
    {
        id: '1',
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
        id: '2',
        img: 'fullstack-blog',
        title: 'BOGDAN BLOG',
        methods: [
            {
                title: 'React js',
                icon: <FaReact className='text-[#5ED3F3]'/>,
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
        status_message: 'Для просмотра приложения сервер прийдется запускать локально'
    },
    {
        id: '3',
        img: 'crypto',
        title: 'Crypto Hunter',
        methods: [
            {
                title: 'React js',
                icon: <FaReact className='text-[#5ED3F3]'/>,
            },
            {
                title: 'Tailwind',
                icon: <SiTailwindcss className='text-[#35B3EB]'/>
            }, 
        ],
        description: 'Crypto Tracker Приложение',
        link_github_front: 'https://github.com/GoBDaNWeb/crypto-react-app',
        link_github_back: '',
        link_live_demo: 'https://crypto-react-app-eight.vercel.app/',
        status: 1,
        status_message: ''
    },
    {
        id: '4',
        img: 'todosh',
        title: 'Todosh',
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
        description: 'Realtime Task Manager - создание таблиц задач для команд',
        link_github_front: 'https://github.com/GoBDaNWeb/todosh-app',
        link_github_back: '',
        link_live_demo: 'https://todosh-app.vercel.app/',
        status: 2,
        status_message: 'в приложении будет меняться дизайн и добавляться новый функционал/адаптивность'
    },
    {
        id: '5',
        img: 'weather',
        title: 'Weather',
        methods: [
            {
                title: 'Next js',
                icon:  <SiNextdotjs className='text-[#1C252C]'/>,
            },
            {
                title: 'Tailwind',
                icon: <SiTailwindcss className='text-[#35B3EB]'/>
            }, 
        ],
        description: 'Приложение для просмотра прогноза погоды',
        link_github_front: 'https://github.com/GoBDaNWeb/WeatherApp',
        link_github_back: '',
        link_live_demo: 'https://weather-app-phi-eight.vercel.app/',
        status: 1
    },
    {
        id: '6',
        img: 'movies',
        title: 'Movie',
        methods: [
            {
                title: 'Vue js',
                icon: <FaVuejs className='text-[#3FB27F]'/>,
            },
            {
                title: 'Fairbase',
                icon: <SiFirebase className='text-[#F29D0D]'/>,
            }, 
            {
                title: 'Tailwind',
                icon: <SiTailwindcss className='text-[#35B3EB]'/>
            }, 
        ],
        description: 'Приложение для просмотра рейтинга фильмов и сериалов',
        link_github_front: 'https://github.com/GoBDaNWeb/vue-movie-app',
        link_github_back: '',
        link_live_demo: null,
        status: 3,
        status_message: 'из-за того что я использовал в написании приложения Firebase, который заблокирован на территории РФ в данное время, приложение не работает так как запланировано.'
    },
    {
        id: '7',
        img: 'kiwi',
        title: 'Kiwi',
        methods: [
            {
                title: 'Vue js',
                icon: <FaVuejs className='text-[#3FB27F]'/>,
            },
            {
                title: 'Fairbase',
                icon: <SiFirebase className='text-[#F29D0D]'/>,
            }, 
            {
                title: 'Tailwind',
                icon: <SiTailwindcss className='text-[#35B3EB]'/>
            }, 
        ],
        description: 'Realtime приложение по типу Twitter',
        link_github_front: 'https://github.com/GoBDaNWeb/Kiwi',
        link_github_back: '',
        link_live_demo: null,
        status: 3,
        status_message: 'из-за того что я использовал в написании приложения Firebase, который заблокирован на территории РФ в данное время, приложение не работает так как запланировано.'
    },
]