import axios from 'axios'

export const apiClient = axios.create(
    {
        baseURL: 'http://localhost:5000' //#CHANGE
       // baseURL: 'Rest-api-full-stack-h2-env.eba-s3swg8ix.us-east-1.elasticbeanstalk.com /'
    }
);

/* For Best Practices https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables*/
