import {useEffect,useState,useRef} from 'react';
import axios from 'axios';

export default function App () {
    const [lists,setLists] = useState([])
    const [query,setQuery] = useState("reacthooks")
    const [loading,setLoading] = useState(false)

    const searchInputRef = useRef()


    //Using .then for promise resolution

//     useEffect(() => {
// axios.get("https://hn.algolia.com/api/v1/search?query=reacthooks").then(response => setLists(response.data.hits));    
// },[ ])

//Using async await for promise resolution

//using async as part of useEffect will give us a warning, hence create a separate async function and call it inisde useEffect

// useEffect(async () => {
//     const result = await axios.get("https://hn.algolia.com/api/v1/search?query=reacthooks")

//     setLists(result.data.hits)
// })

useEffect(() => {
    getData()
},[query])  // adding a value in second array arg of useEffect works like componentUpdate, based on the values added in this array, render will be called

const getData = async () => {
    setLoading(true)
    const result = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`)

    setLists(result.data.hits)
    setLoading(false)
}

    return (
        <div>
            {loading && <div>Loading</div>}
            <div>
            <input ref={searchInputRef} type="text"  onChange={event => event.target.value===""? setQuery("reacthooks"):setQuery(event.target.value)}/>
            <button onClick={() => searchInputRef.current.focus()}>Focus Search Box!!!</button>
            </div>
            {lists.map(data => <ul>
                <li> 
                    <a href={data.url}>{data.title}</a>
                </li>
            </ul>
            )}

        </div>
    )
} 