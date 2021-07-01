import React from 'react'
import { ItemMenu as Menu } from '../common'
import './table.style.css'

const Stock = ({children}) => (<>
    <h1>Blog</h1>
    <Menu/>
    {children}
</>)

export default Stock