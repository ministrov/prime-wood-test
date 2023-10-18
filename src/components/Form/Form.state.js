export const INITIAL_STATE = {
  isValid: {
    title: true,
    price: true,
    date: true
  },
  values: {
    title: '',
    price: '',
    date: ''
  },
  isFormReadyToSubmit: false
}

export function formReducer(state, action) {
  switch(action.type) {
    case 'SUBMIT': {
      const titleValidity = state.values.title?.trim().length;
      const priceValidity = state.values.price?.trim().length;
      const dateValidity = state.values.date;

      return {
        ...state,
        isValid: {
          title: titleValidity,
          price: priceValidity,
          date: dateValidity
        },
        isFormReadyToSubmit: titleValidity && priceValidity && dateValidity
      }
    }
  }
}