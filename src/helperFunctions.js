import moment from "moment";

export const renderDate = (date) =>{
    return moment(date).format("MMMM DD, YYYY")
}