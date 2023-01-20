function Products(){
    const [fake, setFake] = useState([]);
    console.log(fake);
    useEffect(() => {
      Fakeapi();
    }, []);


    const Fakeapi=async()=>{
        const res = await fetch(`https://fakestoreapi.com/products`);
        const JsonData = await res.json();
        setFake(JsonData);
    }


    return(
        <div>
            
        </div>
    )
}
export default Products;