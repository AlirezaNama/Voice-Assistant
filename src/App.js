import React, {useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

// API key: 312800ce07b1435dba88d194ea557102
const alanKey = 'c8fb6fbd5464157973623c8c05f76ee22e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles})=>{
                if(command === "newHeadlines"){
                    setNewsArticles(articles);
                }
            }
        })
    },[])

    return(
        <div>
            <h1>Alan AI News</h1>
        </div>
    );
}


export default App;