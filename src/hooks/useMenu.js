import { useEffect } from "react"
import { useState } from "react"

const useMenu = (filterName) => {
    console.log(filterName)
    const [menu, setMenu] = useState([])
    const [filterNameMenu, setfilterNameMenu] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        const loadData = async () => {
            const fetchData = await fetch("menu.json")
            const result = await fetchData.json()
            if (filterName) {
                const filterNameResult = result.filter((item) => item.category === filterName)
                setfilterNameMenu(filterNameResult)
                console.log(filterName)
                setLoading(false)
            } else {
                setMenu(result)
                setLoading(false)
            }
        }

        loadData()

    }, [filterName])

    return [loading, menu, filterNameMenu,]

}

export default useMenu