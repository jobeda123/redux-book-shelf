import allBooks from '../fakeData/books.json';

const initialState = {
    readingList: [],
    discoverList: allBooks,
    finishedList: [],
}

const finishedBookReducer =(state=initialState, action) =>{
    switch (action.type){
        case "ADD_TO_FINISHED_LIST":{
            const newState = {
                ...state,
                readingList: [...state.readingList, action.payload]
            };
            return newState;
        }


        default:{
            return state;
        }
    }
};

export default finishedBookReducer;