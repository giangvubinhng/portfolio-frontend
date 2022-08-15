import React from 'react';
import './Blogs.css'
import {Card} from 'react-bootstrap';
const Blogs = () => {

	const articles = [{title: 'Welcome', description: 'Giang Nguyen', author: {username: 'Giang'}}, {title: 'Welcome', description: 'Giang Nguyen', author: {username: 'Giang'}}]

	return (
    <div className="blogs-container">
      <div className="posts-container">
        <button type="submit" className="post-button" >
          SHARE STORY
        </button>
	  		{articles.map((article, i) => {
				return (
          <Card className="post" key={i}>
						<Card.Body>
              <div className="post-brief">
                <h1 className="post-title">{ article.title }</h1>
                <p className="post-description">{ article.description }</p>
                <small className="post-info" ><small className="user">{article.author.username}</small> - {article.date}</small>
              </div>
						</Card.Body>
					</Card>
        )
			})}
	    </div>
		</div>
  )
}
export default Blogs;
