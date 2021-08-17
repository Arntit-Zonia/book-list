import React from 'react'

const MyList = ({ book }) => {
    const { title, authors, imageLinks } = book;

    return (
        <div className="my-list-container">
            <div className="book">
                <h3>{title}</h3>
                
                <img src={imageLinks?.thumbnail}/>

                <p>{authors?.toString().replace(",", ", ")}</p>
            </div>

            {/* <button onClick={handleMyListBtn}>Add To My List</button> */}
            {/* <button onClick={handleWishListBtn}>Add To Wishlist</button> */}
        </div>
    )
}

export default MyList;