import React from 'react';

export default function Popup(props) {
    if (!props.visible) {
        return (
            <div></div>
        )
    }
    return (
        <div className="flex justify-center items-center top-0 right-0 absolute w-screen h-screen">
            <div onClick={props.closeFunction} className="top-0 right-0 absolute w-screen h-screen bg-black opacity-50"></div>
            <div className="z-10 bg-white text-black opacity-100 p-24 rounded w-1/2">
                <h1 className="font-bold">Thank you for using our React Component Inspector!</h1>
                <br></br>
                <p>You can copy or write code in the gray box on the left, then watch the component be rendered on the right.</p>
                <br></br>
                <p>For security reasons, we don't support functions as props, so 'on' functions won't work yet, but we plan to enable that feature in the future.</p>
            </div>
        </div>
    )
}