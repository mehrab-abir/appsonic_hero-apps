import React, { useEffect, useState } from 'react';
import axios from 'axios'

const useAppData = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        axios.get('/appData.json')
        .then(data => setApps(data.data))
        .catch(err => console.log("Error: ",err))
        .finally(()=>setLoading(false))
    },[])
    return [apps,loading];
};

export default useAppData;