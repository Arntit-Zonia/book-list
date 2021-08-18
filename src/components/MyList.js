import React from 'react'

const MyList = ({ myList, setMyList }) => {
    const handleRemoveBook = (e) => {
        console.log("Removing book from my list");

        const filteredBooks = myList?.filter((book, i) => i !== Number(e.target.previousElementSibling.id));

        setMyList(filteredBooks);
    }

    return (
        (myList?.map((data, i) => (
            <div className="my-list-container" key={i}>
                <div className="book" id={i}>
                    <h3>{data.title}</h3>
                    
                    <img src={data.imageLinks.thumbnail}/>
    
                    <p>{data.authors?.toString().replace(",", ", ")}</p>
                </div>

                <button onClick={handleRemoveBook}>Remove Book</button>
            </div>
        )))
    )
}

export default MyList;