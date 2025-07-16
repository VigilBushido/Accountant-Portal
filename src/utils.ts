function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric'};
    //let formatedDate = new Date(date).toLocaleDateString(undefined, options);
    //let newDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    //
    const formattedDate = new Date(date).setDate(date.getDate() + 1);
    const currentDate = new Date(formattedDate).toLocaleDateString(undefined, options)
    return currentDate;
}

export {formatDate};