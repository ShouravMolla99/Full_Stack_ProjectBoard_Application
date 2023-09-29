import { GET_PROJECT_TASKS } from "../actions/types";


const initialState = {
    project_task: []
};

export default function (state = initialState, actions) {
    switch (actions.type) {

        case GET_PROJECT_TASKS:
            return {
                ...state,
                project_task: actions.payload
            };
        default:
            return state;
    }
}