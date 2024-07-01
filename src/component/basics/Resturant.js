 import React,{useState} from 'react'
 import "./style.css"
 import Menu from './menuapi'
 import MenuCard from './MenuCard'
 import Navbar from './Navbar'

 const uniqueList =[
  ...new Set(                 // ... called as speade operator for unique data without repeted.
    Menu.map((curElem)=>{
  return curElem.category;
 })
 ),
 "All",
];
console.log(uniqueList);
 
 const Resturant = () => {
  const[menuData, setMenuData]=useState(Menu);
  const[menuList, setMenuList]=useState(uniqueList);


  const filterItem=(category)=>{
  if(category==='All'){
    setMenuData(Menu);
    return;//it is for all section from navbar
  }


    const updatedList=Menu.filter((curElem)=>{
           return curElem.category === category;
    });//navbar's category  element will show only 

    
    setMenuData(updatedList);//then set menu according to updatedlist
  };
   return (

     <> 
     <Navbar filterItem={filterItem} menuList={menuList}/>
     <MenuCard menuData={menuData}/>
     
     </>
   );
 }

 
export default Resturant;


