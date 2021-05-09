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

export const chooseTypeGround = date => {
  return {
    type: 'typeGround/typeGroundAdded',
    payload: date
  }
}

export const choosePercentWater = date => {
  return {
    type: 'percentWater/percentWaterAdded',
    payload: date
  }
}

export const chooseRootDeep = date => {
  return {
    type: 'rootDeep/rootDeepAdded',
    payload: date
  }
}

export const chooseNitrogen = date => {
  return {
    type: 'nitrogen/nitrogenAdded',
    payload: date
  }
}

export const choosePhosphor = date => {
  return {
    type: 'phosphor/phosphorAdded',
    payload: date
  }
}

export const choosePotassium = date => {
  return {
    type: 'potassium/potassiumAdded',
    payload: date
  }
}

export const chooseTemp = date => {
  return {
    type: 'temp/tempAdded',
    payload: date
  }
}

export const choosePh = date => {
  return {
    type: 'ph/phAdded',
    payload: date
  }
}

export const chooseSnowDeep = date => {
  return {
    type: 'snowDeep/snowDeepAdded',
    payload: date
  }
}

export const chooseWeekTemp = date => {
  return {
    type: 'weekTemp/weekTempAdded',
    payload: date
  }
}

export const chooseYield = date => {
  return {
    type: 'yield/yieldAdded',
    payload: date
  }
}

export const chooseDeadlines = date => {
  return {
    type: 'deadlines/deadlinesAdded',
    payload: date
  }
}

export const choosePercentIil = date => {
  return {
    type: 'percentIil/percentIilAdded',
    payload: date
  }
}

export const choosePercentBadPlants = date => {
  return {
    type: 'badPlants/badPlantsAdded',
    payload: date
  }
}

export const chooseAvgPlantGrow = date => {
  return {
    type: 'avgPlantGrow/avgPlantGrowAdded',
    payload: date
  }
}

export const chooseProjectPok = date => {
  return {
    type: 'projectPok/projectPokAdded',
    payload: date
  }
}
export const chooseUnit = date => {
  return {
    type: 'unit/unitAdded',
    payload: date
  }
}
