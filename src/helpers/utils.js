export const scrollToElement = (e, element) => {
    e.preventDefault();
    const el = document.getElementById(element);
    el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

export const replaceStr = (newValue, currentValue, string) => {
    return string.replace(currentValue, newValue);
}

export const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export const formatMoney = (value = 0) => {
    let formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    
    return formatter.format(value);
}

export const roundUp = (num, precision) => {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
}

export const shortState = (A) => {
    let N = [];
	let I = A.toUpperCase();
	return N.ALABAMA = "AL", N.ALASKA = "AK", N.ARIZONA = "AZ", N.ARKANSAS = "AR", N.CALIFORNIA = "CA", N.COLORADO = "CO", N.CONNECTICUT = "CT", N.DELAWARE = "DE", N["WASHINGTON DC"] = "DC", N.FLORIDA = "FL", N.GEORGIA = "GA", N.HAWAII = "HI", N.IDAHO = "ID", N.ILLINOIS = "IL", N.INDIANA = "IN", N.IOWA = "IA", N.KANSAS = "KS", N.KENTUCKY = "KY", N.LOUISIANA = "LA", N.MAINE = "ME", N.MARYLAND = "MD", N.MASSACHUSETTS = "MA", N.MICHIGAN = "MI", N.MINNESOTA = "MN", N.MISSISSIPPI = "MS", N.MISSOURI = "MO", N.MONTANA = "MT", N.NEBRASKA = "NE", N.NEVADA = "NV", N["NEW HAMPSHIRE"] = "NH", N["NEW JERSEY"] = "NJ", N["NEW MEXICO"] = "NM", N["NEW YORK"] = "NY", N["NORTH CAROLINA"] = "NC", N["NORTH DAKOTA"] = "ND", N.OHIO = "OH", N.OKLAHOMA = "OK", N.OREGON = "OR", N.PENNSYLVANIA = "PA", N["RHODE ISLAND"] = "RI", N["SOUTH CAROLINA"] = "SC", N["SOUTH DAKOTA"] = "SD", N.TENNESSEE = "TN", N.TEXAS = "TX", N.UTAH = "UT", N.VERMONT = "VT", N.VIRGINIA = "VA", N.WASHINGTON = "WA", N["WEST VIRGINIA"] = "WV", N.WISCONSIN = "WI", N.WYOMING = "WY", N[I]
}