import React from 'react'
import managerdata from '../Data/dating.js'

export default function Today() {
    return (
        <div className="">
            {
                managerdata.map((people) => (
                    <div className="flex items-center justify-between align-middle reversingflex">
                        <div className="">
                            <h1 className="text-slate-800 py-2 uppercase text-4xl font-bold ">{people.Concept}</h1>
                            {people.Lines}
                            <p className="text-sm text-slate-700 pt-2 max-w-lg">{people.detailing}</p>
                        </div>
                        <div className="text-transparent bg-cover bg-clip-text" style={{ backgroundImage: `url(${people.bgGround})` }}>
                            <h1 className="uppercase text-[300px] font-black">{people.Mynumber}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}