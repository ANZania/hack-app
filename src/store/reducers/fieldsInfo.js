const initialState = {
  culture: "",
  strain: "",
  lastCulture: "",
  seedDate: "",
  harvestDate: "",
  typeGround: '',
  percentWater: '',
  rootDeep: '',
  nitrogen: '',
  phosphor: '',
  potassium: '',
  temp: '',
  ph: '',
  snowDeep: '',
  weekTemp: {},
  yield: {},
  deadlines: '',
  percentIil: '',
  badPlants: '',
  avgPlantGrow: '',
  projectPok: '',
  unit: ''
}

export const groundReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case 'typeGround/typeGroundAdded':
      return {
        ...state,
        typeGround: action.payload
      }
    case 'percentWater/percentWaterAdded':
      return {
        ...state,
        percentWater: action.payload
      }
    case 'rootDeep/rootDeepAdded':
      return {
        ...state,
        rootDeep: action.payload
    }
    case 'nitrogen/nitrogenAdded':
      return {
        ...state,
        nitrogen: action.payload
      }
    case 'phosphor/phosphorAdded':
      return {
        ...state,
        phosphor: action.payload
      }
    case 'potassium/potassiumAdded':
      return {
        ...state,
        potassium: action.payload
      }
    case 'temp/tempAdded':
      return {
        ...state,
        temp: action.payload
      }
    case 'ph/phAdded':
      return {
        ...state,
        ph: action.payload
      }
    case 'snowDeep/snowDeepAdded':
      return {
        ...state,
        snowDeep: action.payload
      }
    case 'weekTemp/weekTempAdded':
      return {
        ...state,
        weekTemp: action.payload
      }
    case 'yield/yieldAdded':
      return {
        ...state,
        yield: action.payload
      }
    case 'deadlines/deadlinesAdded':
      return {
        ...state,
        deadlines: action.payload
      }
    case 'percentIil/percentIilAdded':
      return {
        ...state,
        percentIil: action.payload
      }
    case 'badPlants/badPlantsAdded':
      return {
        ...state,
        badPlants: action.payload
      }
    case 'avgPlantGrow/avgPlantGrowAdded':
      return {
        ...state,
        avgPlantGrow: action.payload
      }
    case 'projectPok/projectPokAdded':
      return {
        ...state,
        projectPok: action.payload
      }
    case 'unit/unitAdded':
      return {
        ...state,
        unit: action.payload
      }
    default:
      return state
  }
}
