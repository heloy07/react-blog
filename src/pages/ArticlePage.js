import React from 'react';
import ArticleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
const ArticlesPage = ({ match }) => {
    const name = match.params.name;
    const article = ArticleContent.find(article =>
        article.name === name);
    if (!article) return <h1>Article not found</h1>
    const otherArticles = ArticleContent.filter(article => article.name !==name);    
    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <h3>Other Articles:</h3>
            <ArticlesList articles={otherArticles} />
        </>
    );
}
export default ArticlesPage;