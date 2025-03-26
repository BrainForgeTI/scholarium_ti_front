import { AdventureCardType } from "../types/AdventureCardType"

export const useApi = () => ({
    getUserAdventures: async (userId: string): Promise<AdventureCardType[]> => {
        // chamada mockada
        const response: AdventureCardType[] = [
            {
                id: '8428ry428ohohr2',
                imageUrl: 'https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png',
                title: 'Aventura de React',
                colorFrom: '#000000',
                colorTo: '#6A0000',
                character: {
                    imageUrl: 'https://media.discordapp.net/attachments/838520690726010993/1353736029655535646/WhatsApp_Image_2025-02-23_at_14.07.16__1_-removebg-preview_2_1.png?ex=67e2bc6c&is=67e16aec&hm=279c2a0a9952b1789ace57b5ccbd28aafb362a838bcfa4d8854f0b83a4d7c9e3&=&format=webp&quality=lossless&width=84&height=88',
                    name: 'Marcão',
                    level: 50
                },
                progress: 57
            },

            {
                id: 'idno2hr83h43',
                imageUrl: 'https://seeklogo.com/images/J/Java-logo-6BBEB11CBA-seeklogo.com.png',
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
                id: 'idno22424hr83h43',
                imageUrl: 'https://seeklogo.com/images/J/Java-logo-6BBEB11CBA-seeklogo.com.png',
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
                id: 'id2323no2hr83h43',
                imageUrl: 'https://seeklogo.com/images/J/Java-logo-6BBEB11CBA-seeklogo.com.png',
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
                id: 'idno2hr84553h43',
                imageUrl: 'https://seeklogo.com/images/J/Java-logo-6BBEB11CBA-seeklogo.com.png',
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
                id: 'idno2hr84553h43',
                imageUrl: 'https://seeklogo.com/images/J/Java-logo-6BBEB11CBA-seeklogo.com.png',
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
                id: 'idno2hr84553h43',
                imageUrl: 'https://seeklogo.com/images/J/Java-logo-6BBEB11CBA-seeklogo.com.png',
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
    }
})