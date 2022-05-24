import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const UseUpData = () => {
    const {Id } = useParams();

    const [service, setService] = useState({});
    useEffect(() => {
      const url = `http://localhost:5000/data/${Id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setService(data));
    }, [Id]);
    return [service, setService];

};

export default UseUpData;