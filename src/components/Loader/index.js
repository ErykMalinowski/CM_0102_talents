import React from 'react'

export const Loader = (props) => {
    const { src, alt } = props;

    return (
        <img src={src} alt={alt} />
    )
}
