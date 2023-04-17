import { createContext, useEffect, useState } from "react";
// import reviews from "../data";
import axios from 'axios'


export const AppContext = createContext()

export default function AppContextProvider({ children }) {

    const [userInfos, setUserInfos] = useState([])


    async function getUsersData() {
        try {
            const options = {
                url: "http://localhost:4000/getusersdata",
                method: "GET",
            }

            const data = await axios(options)

            setUserInfos(data.data)
            setData(data.data[0])
            setDataLength(data.data.length)
            setDeductionsLength(data.data[0].deductions.length)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getUsersData()
    }, [])


    const [data, setData] = useState({})

    const [page, setPage] = useState(0)

    const [dataLength, setDataLength] = useState(0)

    const [deductionsLength, setDeductionsLength] = useState(0)


    function handelClick(page) {
        setData(userInfos[page])
        setPage(page)
        setDeductionsLength(userInfos[page].deductions.length)
    }

    const values = {
        data,
        setData,
        page,
        setPage,
        dataLength,
        deductionsLength,
        handelClick,
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}