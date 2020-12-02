export const capitalize = (str) => {
    if(typeof str === 'string') {
        return str.replace(/\b\w/g, c => c.toUpperCase());
    } else {
        return '';
    }
};

const String = {
    capitalize: capitalize()
}
export default String;
