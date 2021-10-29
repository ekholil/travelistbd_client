import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <CCarousel controls>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="https://i.ibb.co/3T1w0GB/banner1.jpg" alt="slide 1" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h1 className="fs-1">Lets Explore our Awesome Beauty</h1>
                    
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="https://i.ibb.co/DC2J9XX/banner2.jpg" alt="slide 2" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h1 className="fs-1">Get Lost in the world of Beauty</h1>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="https://i.ibb.co/Zfhp56D/banner3.jpg" alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h1 className="fs-1">Don't Stuck at Home </h1>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="https://i.ibb.co/k0xmGCw/banner4.jpg" alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h1 className="fs-1">Make Your Ideas Possible</h1>
                    </CCarouselCaption>
                </CCarouselItem>
                </CCarousel>
        </div>
    );
};

export default Banner;