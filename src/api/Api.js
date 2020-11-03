export const getFullPricesAndFilings = async (state, entityType) => {
    const ent = entityType ? entityType : 'LLC';
    const data = await fetch(`http://api.cool/api/v1/getFullPriceAndFiling?state=${state}&entityType=${ent}`)
        .then(response => response.json());
    return data;
}

export const postHSForm = (formData) => {
    const data = fetch(`http://api.cool/api/v1/hubspot/postForm`, {
        method: 'POST',
        body: formData,
    }).then(res => res.json());

    return data;
}