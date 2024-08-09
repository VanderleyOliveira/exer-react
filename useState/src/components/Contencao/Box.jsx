import React from "react";

export default function Box(props) {
    return (
        <>
            <p>{props.site}</p>
            {props.children}
            {props.children[2]}
        </>
    )
}