import React, { useState, useEffect } from 'react';

const dataAttention = [
    {
        title: "* แอล แอนด์ เอ็ม",
        detail: "ลดได้สูงสุด 60 บาท / แถว"
    },{
        title: "* แอล แอนด์ เอ็ม",
        detail: "ลดได้สูงสุด 60 บาท / แถว"
    },{
        title: "* แอล แอนด์ เอ็ม",
        detail: "ลดได้สูงสุด 60 บาท / แถว"
    },{
        title: "* แอล แอนด์ เอ็ม",
        detail: "ลดได้สูงสุด 60 บาท / แถว"
    },{
        title: "* แอล แอนด์ เอ็ม",
        detail: "ลดได้สูงสุด 60 บาท / แถว"
    },{
        title: "* แอล แอนด์ เอ็ม",
        detail: "ลดได้สูงสุด 60 บาท / แถว"
    }
];

function MainAttention() {
    const [attention, setAttention] = useState([]);

    useEffect(()=>{
        setAttention(dataAttention);
    },[]);

    return (
        <div className="main-attention">
            {attention.map((item,i)=> <p key={i}><span className="font-black">{item.title}</span> <span className="font-gray">{item.detail}</span></p>)}
        </div>
    )
}

export default MainAttention;
