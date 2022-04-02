import React from 'react'

image.defaultProps = {
    imagePath: './logo192.png'
}

function image(props) {

    return (
        <div>
            <img src={props.imagePath} alt='img'/>
        </div>
    )
}

export default image