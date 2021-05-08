export const chooseCulture = text => {
    return {
        type: 'culture/cultureAdded',
        payload: text
    }
}
export const chooseStrain = text => {
    return {
        type: 'strain/strainAdded',
        payload: text
    }
}
export const chooseLastCulture = text => {
    return {
        type: 'lastCulture/lastCultureAdded',
        payload: text
    }
}
export const chooseSeedDate = date => {
    return {
        type: 'seedDate/seedDateAdded',
        payload: date
    }
}
export const chooseHarvestDate = date => {
    return {
        type: 'harvestDate/harvestDateAdded',
        payload: date
    }
}
