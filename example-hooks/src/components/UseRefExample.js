import React, { useRef, useEffect } from 'react'

function UseRefExample() {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <br />
            <div> This is the useRef example - put the focuc on the input</div>
            <input ref={inputRef} />
        </div>
    )
}

export default UseRefExample