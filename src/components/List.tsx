import React  from 'react';
import { topicsState as Props } from "../App";

// import List from '../interfaces/List_interface'
interface IProps{
    topics:Props["topics"]
}
const List: React.FC<IProps> =({topics}) => {
    const renderList =():JSX.Element[] =>{
        return topics.map(topic=>{
            return (
                <li className="List">
                    <div className="List-header">
                        <h2>{ topic.title }</h2>
                    </div>
                    <p className="List-note"> {topic.desc}</p>
                    <p>{topic.lang}</p>
                    <p>{topic.status}</p>
                </li>
            )
        })
    }
    return (
        <ul>
           { renderList()}
        </ul>
    )

}
export default List