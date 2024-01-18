import React from 'react'
import {BallTriangle} from "react-loader-spinner"

export const Loading = () => {
    return (
        <>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="grey"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                
            />
        </>
    )
}
