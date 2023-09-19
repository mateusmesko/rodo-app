export default {
    getRequest(state){
        const requestGet = localStorage.getItem('requestList');
        return requestGet ? JSON.parse(requestGet) : [];
    }
};