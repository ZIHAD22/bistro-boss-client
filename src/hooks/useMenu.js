import { useEffect } from "react"
import { useState } from "react"

const useMenu = (filter) => {
    const [menu, setMenu] = useState([])
    const [filterMenu, setFilterMenu] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        const loadData = async () => {
            const fetchData = await fetch("menu.json")
            const result = await fetchData.json()
            if (filter) {
                const filterResult = result.filter((item) => item.category === filter)
                setFilterMenu(filterResult)
                setLoading(false)
            } else {
                setMenu(result)
                setLoading(false)
            }
        }

        loadData()

    }, [])

    return [loading, menu, filterMenu,]

}

export default useMenu