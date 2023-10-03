// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { pagination } from './AdminReducer/action';

// const Pagination = () => {
//     const [page, setPage] = useState(1);
//     const dispatch = useDispatch();

//     // Get the 'destinations' state and 'totalItems' from your Redux store
//     const destinations = useSelector((store) => store.adminReducer.destinations);
//     const isLoading = useSelector((store) => store.adminReducer.isLoading);
//     const isError = useSelector((store) => store.adminReducer.isError);
//     const totalItems = useSelector((store) => store.adminReducer.totalItems);
    
//     const itemsPerPage = 5; // Set the number of items to display per page
//     const totalPages = Math.ceil(totalItems / itemsPerPage);

//     useEffect(() => {
//         const paramObj = {
//             _page: page,
//             _limit: itemsPerPage, // Adjust the parameter to limit items per page
//         };
//         dispatch(pagination(paramObj));
//     }, [page]); 

//     const handlePageClick = (pageNumber) => {
//         setPage(pageNumber);
//     };

//     const renderPageNumbers = () => {
//         const pageNumbers = [];
//         // const maxButtonsToShow = 5; // Change this to your desired number of buttons to show

//         for (let i = page - 2; i <= page + 2; i++) {
//             if (i > 0 && i <= totalPages) {
//                 pageNumbers.push(
//                     <button style={{width:"20px",backgroundColor:"blue" , marginLeft:"10px"}}
//                         key={i}
//                         onClick={() => handlePageClick(i)}
//                         className={i === page ? 'active' : ''}
//                     >
//                         {i}
//                     </button>
//                 );
//             }
//         }

//         return pageNumbers;
//     };

//     return (
//         <div>
//             {isLoading ? (
//                 "Loading"
//             ) : (
//                 <>
//                     {destinations && (
//                         <div>
//                             <ul>
//                                 {destinations.map((item) => (
//                                     <button key={item.id}>{item.name}</button>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
//                     <div className="pagination">
//                         {renderPageNumbers()}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Pagination;
