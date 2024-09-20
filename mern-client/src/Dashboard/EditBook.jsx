import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";

const EditBook = () => {
  const {id}=useParams();
  const {authorName,imageURL,category,bookDescription,bookTitle,bookPDFURL,price}=useLoaderData();
  const bookCategories=[
    "Fantasy",
    "Science Fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Horror",
    "Historical Fiction",
    "Dystopian",
    "Literary Fiction",
    "Magical Realism",
    "Autobiography",
    "Memoir",
    "Biography",
    "History",
    "Science",
    "Philosophy",
    "Travel",
    "Politics",
    "Psychology",
    "Middle Grade",
    "Young Adult (YA)",
    "Mythology",
    "Religion",
    "Travel",
    "Culture",
    "Food",
    "Comics",
    "Others"
  ]

  const [selectedBookCategory,setSelectedBookCategory]=useState(bookCategories[0]);

  const handelChangeSelectedValue=(event)=>{
    //console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  const handelUpdate=(event)=>{
    event.preventDefault();
    const form=event.target;

    const bookTitle=form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageURL=form.imageURL.value;
    const category=form.categoryName.value;
    const bookDescription=form.bookDescription.value;
    const price=form.price.value;
    const bookPDFURL=form.bookPDFURL.value;

    //console.log(bookTitle);

    const updateBookObj={
      bookTitle,authorName,imageURL,category,bookDescription,price,bookPDFURL
    }

    //console.log(bookObj);
    fetch(`http://localhost:5000/book/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(updateBookObj)
    }).then(res=>res.json()).then(data=>{
      alert("Book Updated Successfully !!!");
    });
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update your book data</h2>
      
      <form onSubmit={handelUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">

        {/*First Row */}
        {/*Book title */}
        <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" defaultValue={bookTitle} placeholder="Book Title" required />
        </div>

        {/*Author Name */}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="text" defaultValue={authorName} placeholder="Author Name" required />
        </div>
      </div>

      {/*Second Row */}
      {/*Book image URL */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book image URL" />
        </div>
        <TextInput id="imageURL" name='imageURL' type="text" defaultValue={imageURL} placeholder="Book image URL" required />
        </div>

        {/*Category */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Category" />
          </div>

          <select name="categoryName" id="inputState" className='w-full rounded' value={selectedBookCategory} onChange={handelChangeSelectedValue}>
            {
              bookCategories.map((Option)=> <option key={Option} value={Option}>{Option}</option>)
            }
          </select>
        </div>
      </div>

      {/*Third Row */}
      {/*Book Description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' defaultValue={bookDescription} placeholder="Leave a comment..." required rows={5} />
        {/*<TextInput id="bookDescription" type="text" placeholder="name@flowbite.com" required />*/}
      </div>

      {/*Book pdf URL */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name="bookPDFURL" type="text" defaultValue={bookPDFURL} placeholder="Book PDF URL" required />
      </div>

      {/*Price of the Book */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Price of the Book" />
        </div>
        <TextInput id="price" type="number" defaultValue={price} placeholder="Price of the Book" required />
      </div>

      <div className='lg:mt-5'>
        <Button type="submit" className='mt-5'>
          Upload Book
        </Button>
      </div>
    </form>
    
    </div>
  )
}

export default EditBook
