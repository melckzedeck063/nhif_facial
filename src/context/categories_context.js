import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getClientCategories } from '../store/actions/category_actions';

const CategoriesContext = React.createContext(undefined);

function CategoriesProvider( {children} ) {

    const [renders, setRenders] = useState(0);
    const dispatch = useDispatch();
    const categories = useSelector(state => state.Categories);
    console.log(categories);

    setTimeout(() => {
        if (renders < 4) {
            setRenders( renders + 1 )
        }
    }, 500);
    // console.log(renders);

    useEffect(() => {
        if (categories && !categories.client_categories && renders < 3) {
            dispatch( getClientCategories("type_product",0,100) )
        }
    })
    

    const name= "melckzedeck"
    const values = {
        name,
        data: categories && categories.client_categories ? categories.client_categories : ""
    }

    return (
      <>
        <CategoriesContext.Provider value={"cotton"} >
                     {children}
        </CategoriesContext.Provider>
      </>
  )
}

export {CategoriesContext ,CategoriesProvider}