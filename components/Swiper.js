import Image from 'next/image'
import Slider from "react-slick";
import { useRef } from 'react';


function Swiper() {
	const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        lazyLoad: false,
        autoplay: true,
        autoplaySpeed: 4100,
        cssEase: "ease-in-out",
    };

    return (
        <Slider ref={sliderRef} {...settings} className="content-slider min-h-screen">
            <div className="slide-block">
                <img src="/img/family.png" className="family opacity-0 lg:opacity-100" />
                <div className="container">
                    <div className="slide-block__content slide--1 slide__soon pr-0 lg:pr-96">
                        <div className="slide__subhead">
                            <span>Osebna zavarovanja</span>
                        </div>
                        <div className="slide__head pr-0 lg:pr-32">
                            <span>Svetujemo vam pri izbiri odličnih produktov s katerimi zagotovite socialno varnost vam in vašim najbližjim. Predstavimo pa vam tudi produkte s katerimi lahko primerno varčujete za vaše cilje.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slide-block">
                <div className="container">
                <div className="slide-block__content slide--1 slide__soon pr-0 lg:pr-96">
                        <div className="slide__subhead">
                            <span>Premoženjska zavarovanja</span>
                        </div>
                        <div className="slide__head">
                            <span>Ponujamo vam kvalitetne produkte s katerimi zavarujete vaše premoženje z optimalno visokimi zavarovalnimi kritji za praktično vse nevarnosti, ki ogrožajo vaše premoženje.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slide-block">
                <img src="/img/zaposlitev.png" className="svetovanje opacity-0 lg:opacity-100" />
                <div className="container">
                <div className="slide-block__content slide--1 slide__soon pr-0 lg:pr-96">
                        <div className="slide__subhead">
                            <span>Svetovanje</span>
                        </div>
                        <div className="slide__head pr-0 lg:pr-64">
                            <span>Ponujamo vam individualno svetovanje na področju osebnih in premoženjskih zavarovanj. Z veseljem vam bomo svetovali o pravilni izbiri produktov, ki jih potrebujete glede na vaše želje in potrebe.</span>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Swiper;