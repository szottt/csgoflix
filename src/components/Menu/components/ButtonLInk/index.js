import React from 'react'

function ButtonLink(props) {
// props => { className: "é o valor que alguem passar" }

return (
    <a href={props.href} className={props.className}>
        {props.children}
    </a>
)
}
export default ButtonLink