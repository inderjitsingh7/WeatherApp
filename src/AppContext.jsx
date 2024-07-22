import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";


export const AppContext = createContext();

function AppContextProvider({ children }) {

    const APIKEY = 'd1845658f92b31c64bd94f06f7188c9c';

    // Your Weather
    const [ClickAccessYW, SetClickAccessYW] = useState(null)
    const [AllDataYW, SetAllDataYW] = useState(null)
    const [ErrorPageYW, SetErrorPageYW] = useState(null)
    const [LoadingYW, SetLoadingYW] = useState(null)

    // Search Weather
    const [ClickSearchSW, SetClickSearchSW] = useState(null)
    const [AllDataSW, SetAllDataSW] = useState(null)
    const [ErrorPageSW, SetErrorPageSW] = useState(null)
    const [LoadingSW, SetLoadingSW] = useState(false)


    // Search Weather Function
    const [ValueChange, SetValueChange] = useState('');

    const [WeatherData, SetWeatherData] = useState('')


    function checkAPI(WeatherData) {
        if (WeatherData.cod == '404') {
            SetLoadingSW(false)
            SetAllDataSW(false)
            SetErrorPageSW(true)
        }
        else {
            SetErrorPageSW(false)
        }
    }

    let ApiResult

    // After Search Btn Click Function Call Get Data;
    async function GetWeatherData(data) {
        if (data == '') {
            return
        }
        else {

            try {
                SetLoadingSW(true)
                SetAllDataSW(false)
                let ApiURL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${APIKEY}&units=metric`);
                ApiResult = await ApiURL.json()
                SetWeatherData(ApiResult)
                console.log(ApiResult)


            } catch (error) {
                SetErrorPageSW(true)
            }

            SetLoadingSW(false)
            SetAllDataSW(true)

            checkAPI(ApiResult)
        }
    }



    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);


    function GrantBtn() {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {

                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);

                },
                (error) => {
                    console.log(error)
                }
            );
        } else {
            console.log('ok')
        }

    }




    function NewCheckApi(WeatherData) {
        if (WeatherData.cod == '404') {
            SetLoadingYW(false)
            SetAllDataYW(false)
            SetErrorPageYW(true)
        }
        else {
            SetErrorPageYW(false)
        }
    }



    let result

    async function getUserData(latitude, longitude) {


        console.log(latitude)
        console.log(longitude)

        if (latitude && longitude == null) {
            return
        }
        try {

            SetLoadingYW(true)
            let newApiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=metric`)
            result = await newApiCall.json()
            SetWeatherData(result)
            console.log(result)

        } catch (error) {
            SetErrorPageYW(false)
            console.log(error)
        }
        SetLoadingYW(false)
        SetAllDataYW(true)

        NewCheckApi(result)

    }








    const value = {
        ClickAccessYW,
        SetClickAccessYW,
        AllDataYW,
        SetAllDataYW,
        ErrorPageYW,
        SetErrorPageYW,
        LoadingYW,
        SetLoadingYW,

        ClickSearchSW,
        SetClickSearchSW,
        AllDataSW,
        SetAllDataSW,
        ErrorPageSW,
        SetErrorPageSW,
        LoadingSW,
        SetLoadingSW,


        ValueChange,
        SetValueChange,
        GetWeatherData,
        WeatherData,
        GrantBtn,
        getUserData,
        latitude,
        setLatitude,
        longitude,
        getUserData,


    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}


export default AppContextProvider;

