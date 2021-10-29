import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer SkAXhlCrAy4tJrGKKv_0oVbkpMTgKCHemg-3m6BrImOAGrHfsGd1nFpVRq_84DKkO66huAgijQdG_Ur59R6y83VXuCR-YIsP6Mha9Bh1IeWQbwRHeeFeO9d2TVZ6YXYx'
    }
});

