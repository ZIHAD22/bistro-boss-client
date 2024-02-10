const loadData = async (URL, setData, setReEffect) => {
    const allMenu = await fetch(URL);
    const result = await allMenu.json();
    if (result[0]._id) {
        setData(result)
        setReEffect(true)
    }
};

export default loadData