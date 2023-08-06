import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:'567efad9bed849c8bea24e933887dd9d'
    }
})