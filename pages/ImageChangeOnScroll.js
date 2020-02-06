import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
    return (
        <div>
            {
                ['bill-gates'/*, 'mark-zuckerberg', 'martin-fowler', 'steve-jobs'*/].map(speaker => {
                    return (
                        <div key={speaker}>
                            <ImageToggleOnScroll primaryImg={'/speakers/bw/' + speaker + '-bw.jpg'}
                                secondaryImg={'/speakers/' + speaker + '.jpg'}
                                alt="" />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ImageChangeOnScroll;