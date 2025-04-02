import axios from "axios";
import { AdventureCardType } from "../types/AdventureCardType"
import { SignUpFormType } from "../types/auth_types/SignUpFormType";

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
                progress: 57
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
                progress: 57
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
                progress: 57
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
                progress: 57
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
                progress: 57
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
                progress: 57
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
                progress: 57
            },
        ]

        return response;
    },

    createAdventure: async (userId: string, adventure: AdventureCardType) => {
        //mock
        let random = Math.floor(Math.random() * 10)
        let response;
        console.log(random)

        if (random > 4) {
            response = { status: 201, cardId: `fjmwpijg39j3r-${Math.random() * 50000}` }
        } else {
            response = { status: 500 }
        }

        return response;
    },

    signup: async (formData: SignUpFormType) => {
      const res = await axios.post('http://127.0.0.1:3000/auth/signup', formData)

      if (res.status !== 200) {
        throw new Error('Error creating account')
      }

      return true;
    },
    
    validateEmail: async (email: string) => {
      await axios.post('http://127.0.0.1:3000/auth/validate-email', { email })
    },

    validateToken: async (email: string, token: string) => {
      const res = await axios.post('http://127.0.0.1:3000/auth/validate-token', { email, token });

      if (res.status !== 200) {
        return false;
      }
      return true;
    }
})