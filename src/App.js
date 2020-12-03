import {useEffect,useState} from 'react';
import axios from 'axios';

export default function App () {
    const [lists,setLists] = useState([])


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
},[])

const getData = async () => {
    const result = await axios.get("https://hn.algolia.com/api/v1/search?query=reacthooks")

    setLists(result.data.hits)
}

    return (
        <div>
            {lists.map(data => <ul>
                <li> 
                    <a href={data.url}>{data.title}</a>
                </li>
            </ul>
            )}
        </div>
    )
} 