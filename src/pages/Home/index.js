import { useState } from 'react'

import Edit from './components/Edit'
import List from './components/List'
import './index.css'


const Home = () =>{
    
    const [Data, setData] = useState([1,2,3])

    return <div className='app'>
    <Edit />
    <List listData={Data}/>
    </div>
}
export default Home 