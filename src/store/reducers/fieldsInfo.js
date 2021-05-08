const initialState = {

    culture: "",
    strain: "",
    lastCulture: "",
    seedDate: "",
    harvestDate: "",
}

export const fieldInfoReducer = (state = initialState, action) => {
    switch (action) {
        case 'culture/cultureAdded':
            return {
                ...state,
                culture: action.payload
            }
        case 'strain/strainAdded':
            return {
                ...state,
                strain: action.payload
            }
        case 'lastCulture/lastCultureAdded':
            return {
                ...state,
                lastCulture: action.payload
            }
        case 'seedDate/seedDateAdded':
            return {
                ...state,
                seedDate: action.payload
            }
        case 'harvestDate/harvestDateAdded':
            return {
                ...state,
                harvestDate: action.payload
            }
        default:
            return state
    }
}
