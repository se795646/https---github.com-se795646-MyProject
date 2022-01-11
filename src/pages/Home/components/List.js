import Item from './Item'

const List = ({listData}) =>{
    
    console.log('listData', listData)

    return <div className="list">
        {
            listData.map(item => <Item />)            
        }
    </div>
}
export default List 