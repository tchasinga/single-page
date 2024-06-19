import React from 'react'
import managerdata from '../Data/dating.js'

export default function Today() {
  return (
    <div className="">
         {
            managerdata.map((people)=>(
                <div className="">
                    <div className="">
                        <h1 className="text-slate-800 uppercase text-4xl font-bold ">{people.Concept}</h1>
                        {people.Lines}
                        <p className="text-sm text-slate-700">{people.detailing}</p>
                    </div>
                    <div className="">
                        <h1 className="text-slate-800 uppercase text-[300px] font-bold ">{people.Mynumber}</h1>
                    </div>
                </div>
            ))
         }
    </div>
  )
}
