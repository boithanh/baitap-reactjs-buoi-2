import React, { useState } from 'react'
import no from '../assets/pink_bow_2.png'

const arrGlass = [
    {
        "id": 1,
        "price": 30,
        "wear": "/glassesImage/v1.png",
        "unwear": "/glassesImage/g1.jpg",
        "name": "GUCCI G8850U",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        "select": "v1.png"
    },
    {
        "id": 2,
        "price": 50,
        "wear": "/glassesImage/v2.png",
        "unwear": "/glassesImage/g2.jpg",
        "name": "GUCCI G8759H",
        "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eligendi doloribus",
        "select": "v2.png"
    },
    {
        "id": 3,
        "price": 30,
        "wear": "/glassesImage/v3.png",
        "unwear": "/glassesImage/g3.jpg",
        "name": "DIOR D6700HQ",
        "desc": "ut et labore doloremque maxime voluptatem soluta explicabo pariatur rerum tenetur deserunt ",
        "select": "v3.png"
    },
    {
        "id": 4,
        "price": 70,
        "wear": "/glassesImage/v4.png",
        "unwear": "/glassesImage/g4.jpg",
        "name": "DIOR D6005U",
        "desc": "going through the cites of the word",
        "select": "v4.png"
    },
    {
        "id": 5,
        "price": 40,
        "wear": "/glassesImage/v5.png",
        "unwear": "/glassesImage/g5.jpg",
        "name": "PRADA P8750",
        "desc": "anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Intern ",
        "select": "v5.png"
    },
    {
        "id": 6,
        "price": 60,
        "wear": "/glassesImage/v6.png",
        "unwear": "/glassesImage/g6.jpg",
        "name": "PRADA P9700",
        "desc": "first true generator on the Internet. It uses a dictionary of over 200",
        "select": "v6.png"
    },
    {
        "id": 7,
        "price": 80,
        "wear": "/glassesImage/v7.png",
        "unwear": "/glassesImage/g7.jpg",
        "name": "FENDI F8750",
        "desc": "ipsum dolor sit amet.., comes from a line in section 1.10.32.",
        "select": "v7.png"
    },
    {
        "id": 8,
        "price": 100,
        "wear": "/glassesImage/v8.png",
        "unwear": "/glassesImage/g8.jpg",
        "name": "FENDI F8500",
        "desc": "passage, and going through the cites of the word in classical ",
        "select": "v8.png"
    },
    {
        "id": 9,
        "price": 60,
        "wear": "/glassesImage/v9.png",
        "unwear": "/glassesImage/g9.jpg",
        "name": "FENDI F4300",
        "desc": "making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of ",
        "select": "v9.png"
    },
    {
        "id": 10,
        "price": 999,
        "wear": "/glassesImage/v5.png",
        "unwear": "/glassesImage/g3.jpg",
        "name": "PRADA P8999",
        "desc": "versions from the 1914 translation by H. Rackham.",
        "select": "v5.png"
    }
];

const BodyComponent = () => {
    const [chooseGlass, setChooseGlass] = useState("");
    const [price, setPrice] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    return (
        <section className='main_content relative pt-28'>
            <div className='result'>
                <div className="container">
                    <div className="w-6/12 model_item grid grid-cols-2 grid-rows-1 gap-48 mx-auto">
                        <div className='model_img rounded-xl'>
                            <img src={`/glassesImage/${chooseGlass}`} alt="" />
                            <div className='info_glass rounded-xl'>
                                <h2>{name}</h2>
                                <h3>{price && "Price " + price + " $"}</h3>
                                <p>{desc}</p>
                            </div>
                        </div>
                        <div className="model_img rounded-xl"></div>
                    </div>
                    <div className="detail_glass py-16">
                        <div className="w-8/12 grid gap-4 grid-cols-5 grid-rows-1 mx-auto bg-purple-100 p-5 rounded-lg">

                            {arrGlass.map((item, index) => {
                                let { select, name, desc, price, wear } = item;
                                return (
                                    <button className='px-3 py-2' key={index} onClick={() => {
                                        setChooseGlass(select);
                                        setName(name);
                                        setDesc(desc);
                                        setPrice(price);
                                    }}>
                                        <img src={wear} />
                                        <img id="bow" src={no} width={50} height={50} alt="" />
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default BodyComponent