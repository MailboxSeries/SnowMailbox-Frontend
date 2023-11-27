import {instance} from './axios';

export default {
    getHomeData: async (ownerId: string) => {
        const response = await instance.get(`/api/v1/user/${ownerId}/user-info`);
        return {
            ...response.data,
        };
    },
};
