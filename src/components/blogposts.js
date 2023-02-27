import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
import { Link } from 'react-router-dom';
TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

export default function Blog({_id,title,summary,createdAt,cover,author}){
return (
<div className="entry">
<div className="pics">
<Link to={`posts/${_id}`} className="post image">
<img src={"http://localhost:4000/"+cover} alt="some random "/> 
</Link>
</div>
<Link to={`posts/${_id}`} className="title post">
<h2 className="Title">{title}</h2>
</Link>
<p>{summary}</p>
<p>{author.username}</p>
<time><ReactTimeAgo date={Date.parse(createdAt)} locale="en-us"/></time>
</div>);

}