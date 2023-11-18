import { useEffect, useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Filter from "./components/filter/Filter";
import Navbar from "./components/navbar/Navbar";
import useData from "./hooks/UseData";
import { useFetchData } from "./hooks/UseFetchData";
import { FilteredValueProps, apartmentProps } from "./types/type";



const Home = () => {
    const { data } = useFetchData('http://localhost:3000/house')
    const apartmentData = useData()
    const [filteredData, setFilteredData] = useState<apartmentProps[]>()
    useEffect(() => {
        data && apartmentData.setData(data)
        data && setFilteredData(data)
    }, [data])


    function filteredValue({ minPrice, maxPrice,minFloor,maxFloor, selectValue,funcType }: FilteredValueProps) {
        console.log(maxPrice, minPrice, selectValue)
        if(funcType){
            const roomNumbers = selectValue.map(selectValue => selectValue.value);
            setFilteredData(apartmentData.data.filter(item => 
                    (minPrice ? item.price >= minPrice : true) && 
                    (maxPrice ? item.price <= maxPrice : true) &&
                    (minFloor ? item.floor >= minFloor : true) &&
                    (maxFloor ? item.floor <= maxFloor : true) &&
                    (roomNumbers.length ? roomNumbers.includes(item.rooms) || (roomNumbers.includes(6) && item.rooms > 5) : true)
                  ))
        }
        else{
            setFilteredData(apartmentData.data)
        }
    }
    return (
        <>
            <Navbar />
            <main>
                <Container className="pt-20 pb-10">
                    <div className="pt-6 w-full overflow-visible">
                        <Filter filteredValue={filteredValue}/>
                    </div>
                    <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4">
                        {filteredData ? filteredData.map((item) => {
                            return <Card key={item.id} {...item} />
                        }) : 'Loading...'}
                    </div>
                </Container>
            </main>
        </>
    );
}

export default Home;