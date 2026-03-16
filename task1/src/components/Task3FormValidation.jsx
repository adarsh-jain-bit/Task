import React, { useState } from 'react'

const Task3FormValidation = () => {

     const [data , setData] = useState({
    name : "",
    email : "",
    mobile : ""
  })
  const [user , SetUser] = useState({})
const [error , setError] = useState({})
  const handleValidate = () => {

    let error = {};
const {name , email , mobile} = data
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let isValid = email.match(regex);

    if(!name.trim().length){
      error.name = "please enter the name"
    }

    if(!email.trim().length){
      error.email = "please enter the  email"
    }else if(!isValid){
         error.email = "please enter the valid email"
    }
    if(!mobile.trim().length){
      error.mobile = "please enter the correct mobile"
    }else if(mobile.length != 10){
      error.mobile = "please enter the valid mobile"
    }

    return error
  }

  const handleSubmit = (e) => {
e.preventDefault();

const HasError = handleValidate();

if(Object.keys(HasError).length >0){
  setError(HasError)
  return;
}

setError({})
setData({
   name : "",
    email : "",
    mobile : ""
})
SetUser(data)
console.log(data)


  }

  console.log("user",user)

  const handleInput = (e) => {
    setData({
      ...data , 
    [e.target.name] : e.target.value
    })
  }
console.log(data)


  return (
      <>
   <form action="" onSubmit={handleSubmit} className=' flex flex-col justify-center w-[50%] mx-auto'>
    <label htmlFor="Name">
      Name : 
    </label>
    <input type="text" name="name" className='border border-1 px-2 ms-2' value={data.name} onChange={(e) => handleInput(e)} placeholder="please Enter Name"  />
    <div >{error.name && <p style={{color : "red"}}>{error.name}</p>}</div>
    <br />
    <label htmlFor="Email">
      email :
    </label>
    <input type="email"  className='border border-1 px-2 ms-2' name="email" value={data.email}  onChange={(e) =>handleInput(e)}  placeholder="please Enter Email"  />
     <div>{error.email && <p style={{color : "red"}} >{error.email}</p>}</div>
    <br />
    <label htmlFor="Name">
      Mobile :
    </label>
    <input type="text" name="mobile"  className='border border-1 px-2 ms-2' value={data.mobile} onChange={(e) =>handleInput(e)}  placeholder="please Enter Mobile No"  />
     <div>{error.mobile && <p style={{color : "red"}}>{error.mobile}</p>}</div>
<br />
    <input type="submit" value="Submit" className='bg-blue-500 rounded-md w-30 py-2 text-white mx-auto' />
   <div className='mt-5'> show Data</div>
{Object.keys(user).length > 0 ?
   <>
    <p>name  : {user.name}</p>
    <p>email : {user.email} </p>
    <p>mobile : {user.mobile} </p>
   </> : "no user found"

} 
   </form>
   </>
  )
}

export default Task3FormValidation