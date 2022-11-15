function toQueryString(obj) {
    let string = [];
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            obj[key].forEach(element => {
                string.push(key + "=" + element)
            });
        } else {
            string.push(key + "=" + obj[key])
        }
    }


    return string.join('&');
}