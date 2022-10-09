import React, { useState, useEffect } from 'react';
import './css/style.css';

const Tempapp = ()=>{
    const [city,setCity] = useState(null);
    const [search, setSearch] = useState("kolhapur");

    useEffect( ()=>{
        const fetchAPI = async() =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7927905e6a2aa0f9701d39edd78c1ff4&units=metric`
            const response = await fetch(url);
            
            const resJson = await response.json();
            // console.log(resJson)
            setCity(resJson.main);
        };
        fetchAPI();
    }, [search] )
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        value={search}
                        className="inputField"
                        onChange={(event) => { setSearch(event.target.value) }} />
                </div>

                {
                    !city ? 
                    (
                        <p className="errorMsg">No data found</p>
                    ) 
                    : 
                    (
                        <div>
                                <div className="info">
                                    <h3 className="location">
                                        <i className="fa-solid fa-cloud-sun"></i>{search}
                                    </h3>
                                    <h1 className="temp">
                                        {city.temp} °C
                                    </h1>
                                    <h3 className="tempmin_max">Min : {city.temp_min} °C  || Max : {city.temp_max} °C</h3> 
                                </div>
                                <div className="wave -one"></div>
                                <div className="wave -two"></div>
                                <div className="wave -three"></div>
                        </div>
                    )
                }
                <span style={{ fontWeight:"bold", color: "black", position: "fixed",  left: 0,  bottom: 0, width: "100%",  textAlign: "center"}}>	&#169; Prathmesh Sarate</span>
            </div>
        </>
    )
}
export default Tempapp;