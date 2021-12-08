import React, { useState } from 'react'
import { topicsState as Props } from "../App";

interface IProps {
    setTopics: React.Dispatch<React.SetStateAction<Props["topics"]>>
    topics: Props["topics"]
}

const AddToList: React.FC<IProps> = ({setTopics, topics}) => {

    const [input, setInput] = useState({
        title: "",
        desc: "",
        status: "",
        lang: ""
    }) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(!input.title || !input.status) return

        setTopics([
            ...topics,
            {
                title: input.title,
                desc: input.desc,
                status: input.status,
                lang: parseInt(input.lang),
            }
        ]);

        setInput({
            title: "",
            desc: "",
            status: "",
            lang: ""
        })
    }

    return (
        <div className="AddToList">
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="title"
                value={input.title}
                placeholder="Title"
            />
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="desc"
                value={input.desc}
                placeholder="Description"
            />
            <textarea
                onChange={handleChange}
                className="AddToList-input"
                name="status"
                value={input.status}
                placeholder="Status"
            />
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="lang"
                value={input.lang}
                placeholder="Language"
            />
            <button
                onClick={handleClick}
                className="AddToList-btn"
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList
