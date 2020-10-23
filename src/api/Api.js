export const getFullPricesAndFilings = async (state) => {
    const data = await fetch(`${process.env.INCFILE_API_URL}/getFullPriceAndFiling?state=${state}`)
        .then(response => response.json());
    return data;
}