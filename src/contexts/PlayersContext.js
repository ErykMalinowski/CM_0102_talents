import React, { createContext, useEffect, useState } from 'react';

import {db} from "../firebase/firebase";

export const PlayersContext = createContext();

const PlayersContextProvider = (props) => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const unsubscribe = db.collection('talents').orderBy("name")
          .onSnapshot(snapshot => {
            // console.log(snapshot)
            if (snapshot.size) {
              const temp = []
              snapshot.forEach(doc => temp.push({ id: doc.id, ...doc.data() }))
              setPlayers(temp)
            }
            setLoading(false);
          })
    
        return () => {
          unsubscribe();
        }
      }, [])

    return (
        <PlayersContext.Provider value={{ players, loading }}>
            {props.children}
        </PlayersContext.Provider>
    );
}
   
export default PlayersContextProvider;