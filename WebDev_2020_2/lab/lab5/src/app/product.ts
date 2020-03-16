export interface IProduct {
    id: number;
    category_id: number;
    description: string,
    price: number,
    count: number,
    image: string,
    name: string;
}

export const products: IProduct[] = [
    {
        id: 131,
        category_id: 1,
        name: 'Lion',
        description: 'It is the lead of animal',
        price: 100,
        count: 12,
        image: 'image_image'
    },    
    {
        id: 132,
        category_id: 1,
        name: 'Harry Potter',
        description: 'This film is about magic world and amazing persons who can change smth...',
        price: 100,
        count: 12,
        image: 'image_image'
    },
    {
        id: 133,
        category_id: 1,
        name: 'Levsha',
        description: 'The film is about boxer and about his life',
        price: 100,
        count: 12,
        image: 'image_image'
    },
    {
        id: 134,
        category_id: 1,
        name: 'Harley Queen',
        description: 'Film is about Jokers girl',
        price: 100,
        count: 12,
        image: 'image_image'
    },
    {
        id: 135,
        category_id: 1,
        name: '1917',
        description: 'Film about World War',
        price: 100,
        count: 12,
        image: 'image_image'
    },    
    {
        id: 136,
        category_id: 1,
        name: 'King of Rings',
        description: 'The film is about goblins and people who want to take a trone',
        price: 100,
        count: 12,
        image: 'image_image'
    },
    {
        id: 137,
        category_id: 1,
        name: 'Strelok',
        description: 'About a sniper who kills persons',
        price: 100,
        count: 12,
        image: 'image_image'
    },
    {
        id: 138,
        category_id: 1,
        name: 'Kuxnia',
        description: 'About kitchen :)',
        price: 100,
        count: 12,
        image: 'image_image'
    },
    {
        id: 139,
        category_id: 1,
        name: 'Avengers',
        description: 'About superheroes who helps the whole world and protect them',
        price: 100,
        count: 12,
        image: 'image_image'
    },    
    {
        id: 140,
        category_id: 1,
        name: 'Batman',
        description: 'About the exciting person who become a superman at night and simple person in simple day!',
        price: 100,
        count: 12,
        image: 'image_image'
    },

]



    // ['egg', 'bread','butter', 'sugar', 'salt', 'apple','bananas', 'lemon', 'tea','cookie']
    // ['nexia', 'volvo', 'toyota', 'lexus','mazda','subaru','skoda','lamborghini','bugatti','ford']
    // ['asus', 'mac', 'acer','hp','iphone', 'samsung', 'huawei', 'meizu','lg', 'bosh']
    // ['Lion','Harry Potter', 'Levsha','Harley Queen', '1917', 'King of Rings','Strelok','Kuxnia','Avengers','Batman']