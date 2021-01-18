import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Posts from '../components/posts'
import Pagination from '../components/pagination'
import Search from '../components/search'


export default function Container() {
    const [value, setValue] = useState('')
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [isFiltered,setIsFiltered] = useState(false)
    const [postsPerPage] = useState(4);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://autonom8-react.herokuapp.com/');
            setPosts(res.data);
        };
        fetchPosts();
    }, []);

    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = isFiltered ? filteredPosts.slice(indexOfFirstPost, indexOfLastPost) :posts.slice(indexOfFirstPost, indexOfLastPost);

    
    const paginate = pageNumber => setCurrentPage(pageNumber);


    const handleChange = (e) => {
        setValue(e.target.value)
        setIsFiltered(true)
        setFilteredPosts(posts.filter((data) => {
            const regex = new RegExp(`${e.target.value}`, 'gi');
            return data.language.match(regex);
        }))
    }

    return (
        <div>
            <Search onChange={handleChange} value={value} />
            { filteredPosts.length > 0 ? <Posts data={currentPosts} /> : <Posts data={currentPosts} />}
            <div style={{marginTop:'20px'}}>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={isFiltered ? filteredPosts.length : posts.length}
                paginate={paginate}
            />
            </div>
        </div>
    )
}