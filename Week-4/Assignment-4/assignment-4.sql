-- 1. Write an SQL statement to select all articles with their author’s email.
SELECT article.id, email, title, content
FROM article
INNER JOIN user ON article.author_id = user.id;

-- 2. Write another SQL statement to select articles from 7th to 12th sorted by id.
SELECT article.id, user.email, article.title, article.content
FROM article
INNER JOIN user ON article.author_id = user.id
WHERE article.id BETWEEN 7 AND 12
ORDER BY article.id;