import React , {useState} from 'react';
interface IProps{
    topics:{
        title:string
        desc?:string
        status:boolean
        lang:number
    }[]
}