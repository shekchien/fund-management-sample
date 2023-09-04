export const LEVEL = [
  { id: 1, value: 'Very Low' },
  { id: 2, value: 'Low' },
  { id: 3, value: 'Moderate' },
  { id: 4, value: 'High' },
  { id: 5, value: 'Very High' }
]

export const convertDateTime = (date, isShowTime) => {
  if (!date) return
  const dateYear = {
    day: 'numeric',
    year: 'numeric',
    month: 'long'
  }

  const time = {
    hour: '2-digit',
    minute: '2-digit'
  }
  return new Date(date).toLocaleDateString(
    'en-GB',
    isShowTime ? Object.assign(dateYear, time) : date
  )
}
