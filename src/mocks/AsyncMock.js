const products = [
    {
        id:'01',
        name: 'Random 1',
        description: 'lorem lorem lorem',
        price: 5000,
        stock: 10,
        img:'https://picsum.photos/200',
        category: 'nuevos'
    },
     {
        id:'02',
        name: 'Random 2',
        description: 'lorem lorem lorem',
        price: 25000,
        stock: 18,
        img:'https://i.postimg.cc/K8bH0zkB/darth-vader.png',
        category: 'ofertas'
    },
    {
        id:'03',
        name: 'Random 3',
        description: 'lorem lorem lorem',
        price: 55000,
        stock: 28,
        img:'https://i.postimg.cc/K8m0nHw3/D-NQ-NP-2X-790947-MLU74201862127-012024-F.webp',
        category: 'ofertas'
    },
    {
        id:'04',
        name: 'Random 4',
        description: 'lorem lorem lorem',
        price: 35000,
        stock: 8,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUUM9_LF8P4bqLB5USPHmerlOwS98LxCkGAsrZY2RHQ&s=10',
        category: 'mas vendidos'
    }
]


export const getProducts = ()=> {
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(products)
        },3000)
    })
}
