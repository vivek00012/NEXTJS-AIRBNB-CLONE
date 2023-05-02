'use client'
import React from "react";


interface MenuItemsProps {
    onMenuClick:()=>void;
    label:string
}
const MenuItem:React.FC<MenuItemsProps>=({onMenuClick,label})=>{
  return (<div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold" onClick={onMenuClick}>
    {label}
  </div>)
}

export default MenuItem;