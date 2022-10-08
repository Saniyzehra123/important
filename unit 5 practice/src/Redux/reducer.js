export const counterReducer = (store,{type, payload}) => {

    switch(type){
        case 'ADD_COUNT':
            return {
                ...store,
                count: store.count + payload
            }
    //     case 'SUB_COUNT':
    //         return {
    //             ...store,
    //             count: store.count - 1
    //         }
        default:
            return store;
      }
}