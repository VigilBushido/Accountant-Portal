// Formate date correctly to a string
function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric'};
    //let formattedDate = new Date(date).toLocaleDateString(undefined, options);
    //let newDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    //
    const formattedDate = new Date(date).setDate(date.getDate() + 1);
    return new Date(formattedDate).toLocaleDateString(undefined, options);
}

// Capitalize the first letter
function capitalize(str: string): string {
    if (str.length === 0){
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export {formatDate, capitalize};