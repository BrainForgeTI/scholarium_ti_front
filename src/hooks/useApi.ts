import { AdventureCardType } from "../types/AdventureCardType"

export const useApi = () => ({
    getUserAdventures: async (userId: string): Promise<AdventureCardType[]> => {
        // chamada mockada
        const response: AdventureCardType[] = [
            {
                id: '8428ry428ohohr2',
                image: 'https://th.bing.com/th/id/OIP.TM0OTN2mHyuByxuolBTEKQHaHk?rs=1&pid=ImgDetMain',
                title: 'Aventura de React',
                colorFrom: '#DE9673',
                colorTo: '#E06527',
                character: {
                    imageUrl: 'https://media.discordapp.net/attachments/838520690726010993/1353736029655535646/WhatsApp_Image_2025-02-23_at_14.07.16__1_-removebg-preview_2_1.png?ex=67e2bc6c&is=67e16aec&hm=279c2a0a9952b1789ace57b5ccbd28aafb362a838bcfa4d8854f0b83a4d7c9e3&=&format=webp&quality=lossless&width=84&height=88',
                    name: 'Marcão',
                    level: 50
                },
                progress: 57,
                chapters: []
            },

            {
                id: 'idno2hr83hgc43',
                image: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png',
                title: 'Aventura de Java',
                colorFrom: '#86B8B9',
                colorTo: '#26B6B8',
                character: {
                    imageUrl: 'https://media.discordapp.net/attachments/838520690726010993/1353736029655535646/WhatsApp_Image_2025-02-23_at_14.07.16__1_-removebg-preview_2_1.png?ex=67e2bc6c&is=67e16aec&hm=279c2a0a9952b1789ace57b5ccbd28aafb362a838bcfa4d8854f0b83a4d7c9e3&=&format=webp&quality=lossless&width=84&height=88',
                    name: 'Calabreso',
                    level: 157
                },
                progress: 57,
                chapters: []
            },
            {
                id: 'idnojj2287424hr83h43',
                image: 'https://th.bing.com/th/id/OIP.STVU4fmmXjJFCyIHW1L6jgHaHt?rs=1&pid=ImgDetMain',
                title: 'Aventura de Java',
                colorFrom: '#86B8B9',
                colorTo: '#26B6B8',
                character: {
                    imageUrl: 'https://media.discordapp.net/attachments/838520690726010993/1353736029655535646/WhatsApp_Image_2025-02-23_at_14.07.16__1_-removebg-preview_2_1.png?ex=67e2bc6c&is=67e16aec&hm=279c2a0a9952b1789ace57b5ccbd28aafb362a838bcfa4d8854f0b83a4d7c9e3&=&format=webp&quality=lossless&width=84&height=88',
                    name: 'Calabreso',
                    level: 157
                },
                progress: 57,
                chapters: []
            },
            {
                id: 'id28-323no2hr83h43',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042',
                title: 'Aventura de Java',
                colorFrom: '#86B8B9',
                colorTo: '#26B6B8',
                character: {
                    imageUrl: 'https://media.discordapp.net/attachments/838520690726010993/1353736029655535646/WhatsApp_Image_2025-02-23_at_14.07.16__1_-removebg-preview_2_1.png?ex=67e2bc6c&is=67e16aec&hm=279c2a0a9952b1789ace57b5ccbd28aafb362a838bcfa4d8854f0b83a4d7c9e3&=&format=webp&quality=lossless&width=84&height=88',
                    name: 'Calabreso',
                    level: 157
                },
                progress: 57,
                chapters: []
            },
            {
                id: 'id7tno2hr84553h43',
                image: 'https://th.bing.com/th/id/OIP.BMXxh0nGocZLZfbY8m17UwHaHa?rs=1&pid=ImgDetMain',
                title: 'Aventura de Java',
                colorFrom: '#86B8B9',
                colorTo: '#26B6B8',
                character: {
                    imageUrl: 'https://media.discordapp.net/attachments/838520690726010993/1353736029655535646/WhatsApp_Image_2025-02-23_at_14.07.16__1_-removebg-preview_2_1.png?ex=67e2bc6c&is=67e16aec&hm=279c2a0a9952b1789ace57b5ccbd28aafb362a838bcfa4d8854f0b83a4d7c9e3&=&format=webp&quality=lossless&width=84&height=88',
                    name: 'Calabreso',
                    level: 157
                },
                progress: 57,
                chapters: []
            },
            {
                id: 'idno2hr84557ti3h43',
                image: 'https://th.bing.com/th/id/OIP.xpoORYpm1DwR4H1K3SfKtwHaHa?w=500&h=500&rs=1&pid=ImgDetMain',
                title: 'Aventura de Java',
                colorFrom: '#86B8B9',
                colorTo: '#26B6B8',
                character: {
                    imageUrl: 'https://media.discordapp.net/attachments/838520690726010993/1353736029655535646/WhatsApp_Image_2025-02-23_at_14.07.16__1_-removebg-preview_2_1.png?ex=67e2bc6c&is=67e16aec&hm=279c2a0a9952b1789ace57b5ccbd28aafb362a838bcfa4d8854f0b83a4d7c9e3&=&format=webp&quality=lossless&width=84&height=88',
                    name: 'Calabreso',
                    level: 157
                },
                progress: 57,
                chapters: []
            },
            {
                id: 'idno2hgkgr84553h43',
                image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png',
                title: 'Aventura de Java',
                colorFrom: '#86B8B9',
                colorTo: '#26B6B8',
                character: {
                    imageUrl: 'https://media.discordapp.net/attachments/838520690726010993/1353736029655535646/WhatsApp_Image_2025-02-23_at_14.07.16__1_-removebg-preview_2_1.png?ex=67e2bc6c&is=67e16aec&hm=279c2a0a9952b1789ace57b5ccbd28aafb362a838bcfa4d8854f0b83a4d7c9e3&=&format=webp&quality=lossless&width=84&height=88',
                    name: 'Calabreso',
                    level: 157
                },
                progress: 57,
                chapters: []
            },
        ]

        return response;
    },

    createAdventure: async (userId: string, adventure: AdventureCardType) => {

        //mock
        let random = Math.floor(Math.random() * 10)
        let response;

        if (random > 4) {
            response = { status: 201, cardId: `fjmwpijg39j3r-${Math.random() * 50000}` }
        } else {
            response = { status: 500 }
        }

        return response;
    },

    getAdventure: async (adventureId: string) => {
        //mock
        return {
            // id: 'idno2hgkgr84553h43',
            // image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png',
            // title: 'Aventura de Java',
            // colorFrom: '#86B8B9',
            // colorTo: '#26B6B8',
            // character: {
            //     imageUrl: 'https://media.discordapp.net/attachments/838520690726010993/1353736029655535646/WhatsApp_Image_2025-02-23_at_14.07.16__1_-removebg-preview_2_1.png?ex=67e2bc6c&is=67e16aec&hm=279c2a0a9952b1789ace57b5ccbd28aafb362a838bcfa4d8854f0b83a4d7c9e3&=&format=webp&quality=lossless&width=84&height=88',
            //     name: 'Calabreso',
            //     level: 157
            // },
            // progress: 57



            id: 'idno2hgkgr84553h43',
            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png',
            title: 'Aventura de Java',
            colorFrom: '#86B8B9',
            colorTo: '#26B6B8',
            character: null,
            progress: 57,
            chapters: [
                {
                    id: 'r333rwf',
                    expanded: true,
                    notes: 'fdsafaç~mfa fam fçsm fçsm sçma fsm af',
                    title: 'React Hooks',
                    topics: [
                        {
                            id: '3j54prij',
                            completed: true,
                            name: 'Entender qual a necessidade de uilizar React Hooks'
                        },
                        {
                            id: '3423432543',
                            completed: true,
                            name: 'Pesquisar em qual contexto esse hook é utilizado'
                        },
                        {
                            id: '3j243243prij',
                            completed: true,
                            name: 'Verificar se é possível fazer miojo utilizando hooks'
                        },
                        {
                            id: '3jp2354rij',
                            completed: false,
                            name: 'Realizar um projeto prático utilizando hooks de forma diversa'
                        },
                        {
                            id: '3j23p3534rij',
                            completed: false,
                            name: 'Avaliar o funcionamento e enxergar melhorias e boas práticas'
                        }
                    ]
                },
                {
                    id: 'rçwijf3',
                    expanded: false,
                    notes: 'fdsafaç~mfa fam fçsm fçsm sçma fsm af',
                    title: 'React Hooks',
                    topics: [
                        {
                            id: '3jprij',
                            completed: true,
                            name: 'Estudar o básico'
                        },
                        {
                            id: '3423543',
                            completed: false,
                            name: 'Estudar o básico'
                        },
                        {
                            id: '3j243prij',
                            completed: true,
                            name: 'Estudar o básico'
                        },
                        {
                            id: '3jp54rij',
                            completed: false,
                            name: 'Estudar o básico'
                        },
                        {
                            id: '3jp3534rij',
                            completed: false,
                            name: 'Estudar o básico'
                        }
                    ]
                }
            ]
        }
    },

    changeChapterTopicCompleted: async () => {
        let random = Math.floor(Math.random() * 10)
        let response;

        if (random > 4) {
            response = { status: 200 }
        } else {
            response = { status: 500 }
        }

        return response
    }
})