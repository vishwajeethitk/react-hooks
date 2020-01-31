import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="/speakers/bw/bill-gates-bw.jpg" 
                                    secondaryImg="/speakers/bill-gates.jpg"
                                    alt="" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="/speakers/bw/steve-jobs-bw.jpg" 
                                    secondaryImg="/speakers/steve-jobs.jpg"
                                    alt="" />
        </div>
    );
}

export default ImageChangeOnMouseOver;