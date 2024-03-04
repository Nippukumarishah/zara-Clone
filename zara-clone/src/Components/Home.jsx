import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination"
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar  from "./Navbar";
import ArrowBackIsoIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from "./Footer";


const Home = () => {


const Women =[
    {
        path: 'women1',
        img: 'https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-new/subhome-xmedia-09-2//w/188/IMAGE-portrait-vertical-2-fill-b11029a7-e62a-4a39-835d-3fbd0e3ded53-default_0.jpg?ts=1709136295905'
    },
    {
        path: 'women1',
        img: 'https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-collection/subhome-xmedia-09-2//w/188/IMAGE-portrait-vertical-2-fill-9462303b-f19f-40ba-a2bf-4b26e23f5d61-default_0.jpg?ts=1709136628968'
    },
    {
        path: 'women1',
        img: 'https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-dresses/subhome-xmedia-09//w/188/IMAGE-portrait-vertical-2-fill-288c0b53-f393-4f33-9d4f-99ba64b06be6-default_0.jpg?ts=1709137195387'
    },
    {
        path: 'women1',
        img: 'https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-join-life/subhome-xmedia-08//w/188/IMAGE-portrait-vertical-3-default-fill-6d737634-7b59-4777-85c3-12af204864d5-default_0.jpg?ts=1708507407108'
    }
];
 const Men = [
    {
        path: 'men1',
        img: 'https://static.zara.net/photos///contents/mkt/spots/ss24-north-man-new/subhome-xmedia-09//w/1125/IMAGE-portrait-ipad-fill-5b3b201c-53f0-46cf-b1bc-1a2d63344868-default_0.jpg?ts=1709037286502'
    },
    {
        path: 'men1',
        img: 'https://static.zara.net/photos///contents/mkt/spots/ss24-north-man-clarks/subhome-xmedia-08-clarks//w/1125/IMAGE-portrait-ipad-fill-788ea3f4-9c3a-4f14-abbe-927708205505-default_0.jpg?ts=1708690659806'
    },
    {
        path: 'men1',
        img: 'https://static.zara.net/photos///contents/mkt/spots/ss24-north-man-blazers/subhome-xmedia-09//w/1125/IMAGE-portrait-ipad-fill-cf5818d7-4975-48df-8455-c251cbef9edf-default_0.jpg?ts=1709037802656'
    },
    {
        path: 'men1',
        img: 'https://static.zara.net/photos///contents/mkt/spots/ss24-north-man-bags/subhome-xmedia-09//w/1125/IMAGE-portrait-ipad-fill-e73b25ea-2ad8-4195-8a0c-c8cc84b91c93-default_0.jpg?ts=1709038098505'
    }
 ];
 const Kids = [
    {
       path: 'kids1',
       img: 'https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-true-neutrals/subhome-xmedia-08//w/193/IMAGE-portrait-vertical-2-default-fill-14819789-3649-4bfb-b32e-c47eed656340-default_0.jpg?ts=1708675538345' 
    },
    {
        path: 'kids1',
        img: 'https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-babygirl/subhome-xmedia-08//w/193/IMAGE-portrait-vertical-2-default-fill-1f782512-5fc4-4798-abfb-045c5310caf8-default_0.jpg?ts=1708674704412'
        
    },
    {
        path: 'kids1',
        img: 'https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-girl/subhome-xmedia-09//w/193/IMAGE-portrait-vertical-2-default-fill-3da5bbd1-238b-4b43-a1cd-2e5d0c66ff7b-default_0.jpg?ts=1709218452121'
    },
    {
        path: 'kids1',
        img: 'https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-babyboy/subhome-xmedia-08//w/193/IMAGE-portrait-vertical-2-default-fill-947a259a-ded8-4f45-b430-140e66788461-default_0.jpg?ts=1708674776351'
    },
    {
        path: 'kids1',
        img: 'https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-boy/subhome-xmedia-09//w/193/IMAGE-portrait-vertical-2-default-fill-5882f998-44f9-4037-9537-89f2c9847751-default_0.jpg?ts=1709219204838'
    },
    {
        path: 'kids1',
        img: 'https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-mini-newborn/subhome-xmedia-09//w/193/IMAGE-portrait-vertical-2-default-fill-03534c2d-4077-457d-aa55-cd1a8a440fea-default_0.jpg?ts=1709220467572'
    },
    {
        path: 'kids1',
        img: 'https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-mini-baby/subhome-xmedia-09//w/193/IMAGE-portrait-vertical-2-default-fill-601591eb-e39c-4f63-bf0d-2ebf88ed5abb-default_0.jpg?ts=1709219967389'
    }
 ];

 const [activeIndex, setActiveIndex] = useState(0);
 const [indexNo, setIndexNo] = useState(0);
 const category = ['Women', 'Men', 'Kids'];



    return (
        <div>
            <Container activeIndex={activeIndex}>
                <Navbar style={{ display: "none"}} activeIndex={activeIndex} setIndexNo={setIndexNo} />
                    <Swiper
                    direction={"vertical"}
                    slidesPerView={1}
                    mousewheel={true}
                    pagination={{
                        "clickable": true,
                    }}
                    onTouchMove={(e) = setActiveIndex(e.activeIndex===0?1:e.activeIndex===1?2:e.activeIndex)}
                    className="mySwiper"
                    onScroll={(e) => setActiveIndex(e.activeIndex)}
                    >
                        {eval(category[indexNo])?.map((ele, index)=>(
                            <SwiperSlide className="swiper-slide" key={index}>
                                <Link to="{/products}" state={{ query: ele.path }}> 
                                <img src={ele.img} alt={ele.img} className={`main${category[indexNo]}${index}`} />
                                </Link>

                            </SwiperSlide>
                        ))};
                        <div className="nextPrevButtons">
                            {indexNo > 0 ?
                        <button onClick={() => setIndexNo(prev => prev - 1)}>
                            <ArrowBackIsoIcon fontSize="small" />
                            <span>{category[indexNo -1]}</span>
                        </button> 
                        :
                        <span></span>   
                        }
                        {indexNo !== category.length -1 && 
                        <button onClick={() => setIndexNo(prev => prev + 1)}>
                            <span>{category[indexNo + 1]}</span>
                            <ArrowForwardIosIcon fontSize='small' />
                        </button>
                        }
                        </div>
                    </Swiper>
                    
                    
                    </Container>
                    <Footer />
        </div>
    );
}

const Container = styled.div`
width: 100%;
height: 100vh;
position:absolute;
cursor:pointer;
z-index: -5;
.mySwiper{
    width: 100%;
    height: 100%;
}
.swiper-slide{
    width: 100%;
    height: 100vh;
}
.swiper-slide img{
    width: 100%;
    height:100vh;
    object-fit:fill;
}
.swiper-pagination-bullet-active{
    background-color: #000 !important;
}
.swiper-pagination{
    margin-top:250px !important;
}
.nextPrevButtons{
    width:100%;
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:space-between;
    z-index:5;
    top:45vh;
}
.nextPrevButtons>button{
    background-color:transparent;
    border:none;
    display:flex;
    align-items:center;
    font-weight:200;
    color:${(props) => (props.activeIndex % 2 === 0 ? "white" : "black")};
}
.nextPrevButtons>button svg{
    font-size:30px;
    fill:${(props) =>(props.activeIndex % 2 === 0 ? "white" : "black")};
}
@media only screen and (min-width: 769px) and (max-width:1110px){
    .swiper-slide img{
        object-fit:cover;
    }
}
@media only screen and (min-width: 481px) and (max-width: 768px){
    .swiper-slide img{
        object-fit:cover;
    }
}
@media only screen and (min-width: 320px) and (max-width:480px){
    .swiper-slide img{
        object-fit:cover;
    }
    .swiper-slide .mainWomen4{
        transform: rotate(90deg);
        object-fit: contain;
        width:100vh;
        object-position: 0px 100%;
        background-color: #e3edea;
    }
    .swiper-slide .mainWomen6{
        transform: rotate(-90deg);
        object-fit: contain;
        width:100vh;
        object-position: 0px 15%;
        background-color: #c2d5e4;
    }
    .swiper-slide .mainMen1{
        object-position:60% 0%;
    }
    .swiper-slide .mainKids2{
        object-position:71% 0%;
    }

}
@media only screen and (max-width: 320px){
    .swiper-slide img{
        object-fit:cover;
    }
}
`
export default Home;