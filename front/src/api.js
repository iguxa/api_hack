class api {
    getVotes(filter = {}, page = 1, pageSize = null) {
        if(!pageSize) {
            pageSize = 10;
        }
        return new Promise((resolve) => {
            if(typeof(filter.active)!=='undefined') {
                if (filter.active) {
                    resolve([
                        {title: 'Название конкурса', status: true, id: 1},
                        {title: 'Название конкурса', status: true, id: 2},
                        {title: 'Название конкурса', status: true, id: 3},
                    ]);
                } else {
                    resolve([
                        {title: 'Название конкурса', status: false, id: 4},
                        {title: 'Название конкурса', status: false, id: 5},
                        {title: 'Название конкурса', status: false, id: 6},
                        {title: 'Название конкурса', status: false, id: 7},
                        {title: 'Название конкурса', status: false, id: 8},
                        {title: 'Название конкурса', status: false, id: 9},
                        {title: 'Название конкурса', status: false, id: 10},
                    ]);
                }
            } else {
                resolve([
                    {title: 'Название конкурса', status: true, id: 1},
                    {title: 'Название конкурса', status: true, id: 2},
                    {title: 'Название конкурса', status: false, id: 4},
                    {title: 'Название конкурса', status: true, id: 3},
                    {title: 'Название конкурса', status: false, id: 5},
                    {title: 'Название конкурса', status: false, id: 6},
                    {title: 'Название конкурса', status: false, id: 7},
                    {title: 'Название конкурса', status: false, id: 8},
                    {title: 'Название конкурса', status: false, id: 9},
                    {title: 'Название конкурса', status: false, id: 10},
                ]);
            }
        });
    }
}

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {

    }
})
