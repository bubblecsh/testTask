import React, {useState} from "react";


const Search = ({setQuery}) => {
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.currentTarget.value)
    }

    return (
        <div className={'search_container'}>
            <input type='text' placeholder='Type here...' onChange={handleChange} value={input} />
            <button onClick={() => setQuery(input)}>Search</button>
        </div>
    )
}

export default Search