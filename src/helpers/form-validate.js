export const validEmail = (email) => {
    const reg = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w)+)+)$/i);
    return reg.test(email);
}

export const isUSPhone = (phone)  => {
    const reg = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    return reg.test(phone);
}