import React from 'react';
import ArticleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
const ArticlesListPage = () => (
    <>
        <h1>Articles</h1>
        <ArticlesList articles={ArticleContent} />

    </>
);
export default ArticlesListPage;