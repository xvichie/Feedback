import Slider from "@material-ui/core/Slider";
import * as React from 'react';



function SliderComponent() {
    return (
        <>
            <Slider min={0} max={10} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </>
    );
}

export default SliderComponent;
