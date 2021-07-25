import types from './types'

const setToken = item => ({
  type: types.SET_TOKEN, item
})

const setCalendar = item => ({
  type: types.SET_CALENDAR, item
})

const exportedObject = {
    setToken,
    setCalendar,
};

export default exportedObject