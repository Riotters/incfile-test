export const getFullPricesAndFilings = async (state) => {
    const data = await fetch(`http://api.cool/api/v1/getFullPriceAndFiling?state=${state}`)
        .then(response => response.json());
    return data;
}