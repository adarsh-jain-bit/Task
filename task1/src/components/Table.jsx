import React, { useState } from 'react'


const Table = ({data}) => {
    console.log(data)
     const [searchVal, setSearchVal] = useState("");
     const [users, setUsers] = useState(data);
const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);

         function handleSearchClick() {
        if (searchVal === "") { setUsers(data); return; }
        // console.log("users",users)
        const filterBySearch = users.filter((item) => {
            if (item.name.toLowerCase().includes(searchVal.toLowerCase())) { return item; }
        })
        console.log("fil",filterBySearch)
        setUsers(filterBySearch);
    }
       
    function NextPage() {
        setCurrentPage(prevPage => prevPage + 1);
    }

    function PrevPage() {
        setCurrentPage(prevPage => prevPage - 1);
    }


  return (
  <>
    <div
  className="relative flex flex-col max-w-7xl mx-auto h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border" >
      <div className='py-4 pt-20 mx-auto'>
      <div className="relative flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
    >
      <path
        fillRule="evenodd"
        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
        clipRule="evenodd"
      />
    </svg>
    <input
      className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      onChange={e => setSearchVal(e.target.value)}
      placeholder="search Name"
    />
    <button
      className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
      type="button"
      onClick={handleSearchClick}
    >
      Search
    </button>
  </div>
      </div>
  <table className="w-full text-left table-auto min-w-max">
    <thead>
      <tr>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Name
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Email
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Mobile
          </p>
        </th>
      </tr>
    </thead>
    <tbody>

        {users.slice((currentPage - 1) * itemsPerPage , ((currentPage - 1) * itemsPerPage) + itemsPerPage)?.map((val) => (
   <tr key={val.id}>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {val.name}
          </p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {val.email}
          </p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {val.phone}
           </p>
        </td>
        
      </tr>

        ))}
   
   
    </tbody>
  </table>
  <div className='mx-auto pt-4'>
    <div className="flex space-x-1">
  <button className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
  onClick={() =>PrevPage()}
  >
      Prev
  </button>
  

  <button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
  onClick={() =>NextPage()}
  >
      Next
  </button>
</div>

  </div>
</div>
  </>
  )
}

export default Table