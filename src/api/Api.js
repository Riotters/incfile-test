export const getFullPricesAndFilings = async (state, entityType) => {
    const ent = entityType ? entityType : 'LLC';
    const data = await fetch(`${process.env.INCFILE_API_URL}/getFullPriceAndFiling?state=${state}&entityType=${ent}`)
        .then(response => response.json());
    return data;
}

export const getAnnualReportDueDate = async (formData) => {
    const data = await fetch(`${process.env.INCFILE_API_URL}/getAnnualReportDueDate`, {
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

export const getReviews = async (page, limit, sort) => {
    const data = await fetch(`${process.env.SHOPPER_ENDPOINT}/reviews/${process.env.SHOPPER_SITE_ID}?token=${process.env.SHOPPER_TOKEN}&rating=1%2C2%2C3%2C4%2C5&sort=${sort}&limit=${limit}&page=${page}`)
        .then(response => response.json());

    return data;
}

export const submitContactForm = async (formData) => {
    const data = await fetch(`${process.env.INCFILE_API_URL}/handleContactForm`, {
        method: 'POST',
        body: formData,
    }).then(res => res.json());

    return data;
}

export const signupFreeTaxConsultation = async (formData) => {
    const data = await fetch(`${process.env.INCFILE_API_URL}/signup-free-tax-consultation`, {
        method: 'POST',
        body: formData,
    }).then(res => res.json());

    return data;
}


export const getRelatedPosts = async (categoryId, limit = 9) => {
    const data = await fetch(`${process.env.INCFILE_API_URL}/posts/by-category?categoryId=${categoryId}&limit=${limit}`)
        .then(response => response.json());
    
    return data;
}

export const getPhoneStatus = async () => {
    const data = await fetch(`${process.env.INCFILE_API_URL}/util/check-phone-show-status`)
        .then(response => response.json());
    
    return data;
}