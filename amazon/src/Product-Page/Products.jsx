import { useEffect, useState } from "react";
import "./products.css";
export default function Products() {
    const [data, setData] = useState("");
    const getData = () => {
        return fetch(`http://localhost:8080/data`).then((res) => res.json())
            .then((res) => setData(res));
    };

    useEffect(() => {
    getData();
  }, []);

    // console.log(data);
    return (
        <>
            <div className="grocery">
                {data &&
                    data.map((e) => (
                        <div>
                            <img src={e.image} alt={e.name} />
                            <h3>{e.name}</h3>
                            <p>{e.price}</p>
                            <p>{e.details}</p>
                            <button>Buy Now</button>
                        </div>
                    ))}
            </div>
        </>
    )
}