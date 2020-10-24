export const getFullPricesAndFilings = async (state, entityType) => {
    const ent = entityType ? entityType : 'LLC';
    const data = await fetch(`${process.env.INCFILE_API_URL}/getFullPriceAndFiling?state=${state}&entityType=${ent}`)
        .then(response => response.json());
    return data;
}