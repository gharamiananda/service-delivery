import React, { useEffect, useState } from 'react';
import axios from 'axios';






const useServices = (number) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("service.json")
            .then(res => res.json())
            .then(data => {
                const requireReview = data.slice(0, number)
                setServices(requireReview);
                //  console.log(requireReview);
            })
    }, [])

    return [services, setServices]

};

export default useServices;