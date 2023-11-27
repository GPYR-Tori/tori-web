import axios from "axios";

// baseUrl 바꾸면 됨
export const requester = () => axios.create( {baseUrl: 'http://localhost:3000'} );