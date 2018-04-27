import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', maxHeight: '40em', border: 'solid black .15em', marginTop: '2em'}}>
            { props.children }
        </div>
    )
}

export default Scroll;