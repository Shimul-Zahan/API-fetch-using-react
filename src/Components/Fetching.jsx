import React, { useEffect, useState } from 'react'

const Fetching = () => {

    const [data, setData] = useState([]);


    const getData = async () => {
        const fetching = await fetch(`https://api.github.com/users`);
        const data = await fetching.json();
        setData(data)
    }


    useEffect(() => {
        getData();
    }, [])


  return (
      <div className='container bg-black mx-auto flex justify-center items-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-20'>
              {data.map(dat => {
                  return (
                      <div>
                          <div className="card w-80 bg-base-100 shadow-xl">
                              <figure className="px-10 pt-10">
                                  <img src="{ dat.avatar_url }" className="rounded-xl" />
                              </figure>
                              <div className="card-body items-center text-center">
                                  <h2 className="card-title">{ dat.login }</h2>
                                  <p> Node ID: {dat.node_id }</p>
                                  
                              </div>
                          </div>
                      </div>
                  )
              })}
          </div>
      </div>
  )
}

export default Fetching