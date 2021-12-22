import React, { useEffect, useState } from 'react';
import Web3 from 'web3'
import axios from 'axios';
import Transaction from './Transaction';
import { motion, AnimatePresence } from 'framer-motion';


const Portfolio = () => {

    const web3 = new Web3(window.ethereum);
    const [transactions, setTransactions] = useState([]);
    const [w3Id, setW3Id] = useState("");
    const [showTransactions, setShowTransactions] = useState(false);

    useEffect(() => {
        web3.eth.getAccounts().then((acc) => {
            setW3Id(acc[0].trim());
            axios(`/api/wallet/${acc[0]}`).then((data) => {
                setTransactions(data['data']);
            })
        })
    }, [])

    const container = {
        show: {
          opacity: 1,
          transition: {
            when: 'beforeChildren',
            staggerChildren: 2,
            staggerDirection: 1,
            delayChildren: 1
          }
        },
        hidden: {
            opacity: 0,
            transition: {
                when: 'afterChildren',
                staggerChildren: 2, 
                staggerDirection: 1
            }
        }
      }

    return (
        <div className="flex h-screen w-screen flex-col absolute items-center">
            <button className="rounded-xl flex text-center justify-center tracking-wide text-2xl font-bold w-3/4 p-4 max-w-5xl shadow-xl ring-4 ring-yellow-400" 
                style={{minWidth: '800px', marginTop:'10%'}} 
                onClick={() => {setShowTransactions(!showTransactions)}}>
                    Transactions
            </button>
            <AnimatePresence className="flex">
                {showTransactions && (
                    <motion.ul id="collapseTrans" 
                        className="flex-col flex mt-5 w-3/4 max-w-5xl overflow-y-scroll" 
                        style={{ minWidth: '800px', marginTop: '20px'}}
                        variants={container}
                        initial={{opacity: 0}}
                        animate="show"
                        exit="hidden">
                            {
                                transactions.map(trans =>
                                            <Transaction props={trans} w3={web3} w3Id={w3Id} />     
                                )
                            }
                    </motion.ul>)
                }
            </AnimatePresence>
        </div>
    )
}

export default Portfolio;