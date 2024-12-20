import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => { //this runs every re-render, aka any time data changes
        console.log("use Effect ran");
        fetch("http://localhost:8000/blogs") //get request to our database API
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []); //unless theres this [] thing

    //the blogs={blogs} is a prop , being passed into BlogList
    return ( 
        <div className="home">
            { isPending && <div>loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;