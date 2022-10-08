import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });
    // Create add and remove functions here that changes the
    // state.

    // const [book,setBook]=useState(10)

    // const handelBook=(value)=>{
    //     setBook(book+value)
    // }

    const [book,setBook] = useState(10)

    const handelBook=(value)=>{
      if(value==-1 && book==0 ){
        return
      }
      setBook(book+value)
    }

    const [note,setNotebook] = useState(13)

    const handelNote=(value)=>{
      if(value==-1 && note==0){
        return
      }
      setNotebook(note+value)
    }
    const [pen,setPens]= useState(40)

    const handelPen=(value)=>{
      setPens(pen + value)
    }

    const [inkpen,setInkpen]= useState(73)
    const handelInkpen=(value)=>{
      setInkpen(inkpen+value)
    }


  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton"  onClick={()=> handelBook(1)}>+</button>
        <button className="circlularButton"   onClick={()=> handelBook(-1)}>-</button>
        <span>{book}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={ ()=>{
          handelNote(1)
        }}>+</button>
        <button className="circlularButton" onClick={ ()=>{
          handelNote(-1)}}>-</button>
        <span>{note}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>{
          handelPen(1)
        }}>+</button>
        <button className="circlularButton" onClick={()=>{
          handelPen(-1)
        }}>-</button>
        <span>{pen}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=>{  handelInkpen(1)}}>+</button>
        <button className="circlularButton"  onClick={()=>{  handelInkpen(-1)}}>-</button>
        <span>{inkpen}</span>
      </div>
            {/*calculate total and show it*/}
      total: {0}
      <div className="total">
         {book+note+pen+inkpen}
      </div>
    </div>
  );
};
