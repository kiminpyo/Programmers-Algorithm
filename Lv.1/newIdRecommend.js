function solution(new_id) {
    //1. lowerCase
    const  lowerId= new_id.toLowerCase()
   //2. exception 
  const exception = lowerId.replace(/[^a-z0-9-_.]/gm, "")
//3. edit dubbleDot
  const editDot = exception.replace(/\.{2,}/gm,".")
   //4.remove first/last dot
  let editDot2 = editDot.replace(/^\.|\.$/gm,"")
  //5. empty
 editDot2.length == 0? editDot2= 'a': editDot2      
    //6. remove over 16length
    editDot2.length >= 16 ? editDot2 = editDot2.slice(0,15) : editDot2
    console.log( editDot2)
    //7. last dot 
    let removeLastDot= editDot2.replace(/\.$/,"")
        console.log(removeLastDot)
    //8.
    if(removeLastDot.length === 1 ) removeLastDot = removeLastDot[0]+removeLastDot[0]+removeLastDot[0]
    if(removeLastDot.length === 2)  removeLastDot = removeLastDot[0]+removeLastDot[1]+removeLastDot[1];
    return removeLastDot

    }