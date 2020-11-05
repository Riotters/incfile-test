export const getFullPricesAndFilings = async (state, entityType) => {
    const ent = entityType ? entityType : 'LLC';
    const data = await fetch(`${process.env.INCFILE_API_URL}/getFullPriceAndFiling?state=${state}&entityType=${ent}`)
        .then(response => response.json());
    return data;
}

export const getAnnualReportDueDate = async (formData) => {
    const data = await fetch(`http://api.cool/api/v1/getAnnualReportDueDate`, {
        method: 'POST',
        body: formData,
    }).then(res => res.json());

    return data;
}

export const postHSForm = (formData) => {
    const data = fetch(`${process.env.INCFILE_API_URL}/hubspot/postForm`, {
        method: 'POST',
        body: formData,
    }).then(res => res.json());

    return data;
}

export const getAggregrateReviews = () => {
    const data = fetch(`${process.env.SHOPPER_ENDPOINT}/aggregates/reviews/${process.env.SHOPPER_SITE_ID}?token=${process.env.SHOPPER_TOKEN}&xml=false`).then(response => response.json());

    return data;
}

export const getReviews = async (page = 0) => {
    const data = await fetch(`${process.env.SHOPPER_ENDPOINT}/reviews/${process.env.SHOPPER_SITE_ID}?token=${process.env.SHOPPER_TOKEN}&rating=1%2C2%2C3%2C4%2C5&sort=newest&limit=20&page=${page}&test=false&xml=false`)
        .then(response => response.json());

    return data;
}
