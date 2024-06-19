"use client"

import React from 'react';
import { motion } from 'framer-motion';
import managerdata from '../Data/dating.js';

export default function Today() {
    return (
        <div>
            {
                managerdata.map((people, index) => (
                    <motion.div
                        className="border-b-2 flex items-center justify-between align-middle reversingflex flex-wrap border-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 1 }}
                        key={index}
                    >
                        <div>
                            <h1 className="text-slate-800 py-2 uppercase text-4xl font-bold border-2">{people.Concept}</h1>
                            {people.Lines}
                            <p className="text-sm text-slate-700 pt-2 max-w-lg border-2">{people.detailing}</p>
                        </div>
                        <div className="text-transparent bg-cover bg-clip-text" style={{ backgroundImage: `url(${people.bgGround})` }}>
                            <h1 className="uppercase text-[300px] font-black">{people.Mynumber}</h1>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    );
}