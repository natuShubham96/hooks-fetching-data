import {useEffect,useState} from 'react';
import axios from 'axios';

export default function App () {
    const [lists,setLists] = useState([])

    useEffect(() => {
axios.get("https://hn.algolia.com/api/v1/search?query=reacthooks").then(response => setLists(response.data.hits));    
},[ ])
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