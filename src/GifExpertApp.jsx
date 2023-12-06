import { useState } from 'react';
import { AddCategory, GifGrid } from './components'; 

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch Man']);

  const onAddCategory = (newCategory) => {

    if ( categories.includes( newCategory ) ) return;

    // Valorant (agregar al listado)
    // categories.push('Valorant');
    // setCategories( cat => [ ...cat, 'Valorant' ] );
    // setCategories( [ ...categories, 'Valorant' ] );
    // console.log( newCategory );
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* input  */}
      <AddCategory
        // setCategories={ setCategories } 
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* Listado de Gifs */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      
        {
          categories.map( ( category ) => (
              <GifGrid 
                key={ category } 
                category={ category }
              />
            ))
        }
        {/* <li>ABC</li>
          <li>123</li>
          <li>XYZ</li> */}
      
      {/* Gif Item */}


    </>
  )
}
