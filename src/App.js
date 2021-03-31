import React, {useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards'; 
import useStyles from './styles.js';



//my newsapi.org API key: 312800ce07b1435dba88d194ea557102
const alanKey = 'c8fb6fbd5464157973623c8c05f76ee22e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1); //index of article that currently be reading
    const classes = useStyles();

    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles})=>{
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);   
                } else if (command === 'highlight'){
                    setActiveArticle((prevActiveArticle)=> prevActiveArticle+1); 
                }
            }
        })
    },[])

    return(
        <div>
            <div className={classes.logoContainer}>
                <img src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg" className={classes.alanLogo} alt="Alan Logo" />
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </div>
    );
}


export default App;