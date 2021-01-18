import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <nav>
      <ul style={{display:'flex',flexDirection:'row',listStyleType:'none'}}>
        {pageNumbers.map(number => (
          <li key={number} style={{textDecoration:'none'}}>
            <span style={{cursor:'pointer' , padding:'10px',border:'10px solid white'}} onClick={() => paginate(number)}>
              {number}
            </span>
          </li>
        ))}
      </ul>
      </nav>
  );
};

export default Pagination;