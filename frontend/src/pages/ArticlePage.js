import React,{useState,useEffect} from 'react';
import ArticleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';

const ArticlesPage = ({ match }) => {
    const name = match.params.name;
    const article = ArticleContent.find(article =>
        article.name === name);
    //react hooks
    const [articleInfo,setArticleInfo] = useState({upvotes:0,comments:[]});
    useEffect(()=>{
        const fetchData = async () =>{
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
            console.log(body.comments);
        }
        fetchData();
        
    },[name]);

    if (!article) return <NotFoundPage />
    const otherArticles = ArticleContent.filter(article => article.name !==name);    
    return (
        <>
            <h1>{article.title}</h1>
            <p>This post has been upvoted {articleInfo.upvotes} times</p>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <CommentsList comments={articleInfo.comments} />
            <h3>Other Articles:</h3>
            <ArticlesList articles={otherArticles} />
        </>
    );
}
export default ArticlesPage;