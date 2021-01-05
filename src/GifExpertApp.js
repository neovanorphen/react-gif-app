import React, { useState } from 'react'; 
import AddCategory from './commponents/AddCategory';
import { GifGrid } from './commponents/GifGrid';

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = (e) => {
    //     setCategories(['HunterXHunter',...categories]);
    //     //setCategories(cats => [...cats,'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            
            <ol>
                { 
                    categories.map(category => (
                        <GifGrid 
                        key= { category }
                        category= { category }/>
                    ))
                }
            </ol>
        </>
        
    );
}

GifExpertApp.propTypes = {
    
}

GifExpertApp.defaultProps = {
    
}
export default GifExpertApp;