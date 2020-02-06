import React, {useState, useRef, useEffect} from 'react';

const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {
    const imageRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        setInView(isInView());
        setIsLoading(false);
        return (() => {
            window.removeEventListener('scroll', scrollHandler);
        });
    }, [isLoading]);

    const [inView, setInView] = useState(false);

    const scrollHandler = () => {
        setInView(() => {
            return isInView();
        });
    }

    const isInView = () => {
        if(imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
    }

    return isLoading ? null : (
        <img src={inView ? secondaryImg : primaryImg}
            style={{width: '350px', height: '350px' }}
            ref={imageRef} />
    );
}

export default ImageToggleOnScroll;