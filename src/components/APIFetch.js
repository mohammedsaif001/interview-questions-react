import React, { useEffect, useState } from 'react'

const APIFetch = () => {
    const [data, setData] = useState([])
    const [searchText, setsearchText] = useState("")
    const [filteredData, setfilteredData] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                let res = await fetch("https://jsonplaceholder.typicode.com/todos")
                let data = await res.json()
                return data
            } catch (error) {
                console.error(error)
            }
        }
        fetchData().then((data) => {
            setData(data)
            setfilteredData(data)
        })
    }, [])

    const handleChange = (e) => {
        console.log(e.target.value)
        setsearchText(e.target.value)
        let filter = filteredData.filter((data) => {
            return data.title.includes(e.target.value)
        })
        e.target.value ? setfilteredData(filter) : setfilteredData(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let filter = filteredData.filter((data) => {
            return data.title.includes(searchText)
        })
        console.log(searchText, filter)
        searchText === "" ? setfilteredData(data) : setfilteredData(filter)
    }

    // console.log(filteredData.length)

    return (
        <div><h1>APIFetch from URL</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" onChange={handleChange} value={searchText} />
                <button type="submit">Search</button>
            </form>
            {filteredData.length === 0 && <div>Empty</div>}
            <ol>
                {filteredData?.map((data) => <li style={{ margin: "2px 2px", textAlign: "start" }} key={data.id}>{data.title}</li>)}
            </ol>
        </div >
    )
}

export default APIFetch