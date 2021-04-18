const prependZero = (num: number): string => `0${num}`.slice(-2)
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

function getDateWithOffset(unixTime: number, offsetInSeconds: number): Date {
  const now = new Date()
  const localOffsetInSeconds = now.getTimezoneOffset() * 60

  return new Date(
    new Date(unixTime * 1000).getTime() +
      (offsetInSeconds + localOffsetInSeconds) * 1000
  )
}

export function getTimezoneTime(
  unixTime: number,
  offsetInSeconds: number
): string {
  const dateWithOffset = getDateWithOffset(unixTime, offsetInSeconds)

  return `${prependZero(dateWithOffset.getHours())}:${prependZero(
    dateWithOffset.getMinutes()
  )}`
}

export function getTimezoneWeekDay(
  unixTime: number,
  offsetInSeconds: number
): string {
  const dateWithOffset = getDateWithOffset(unixTime, offsetInSeconds)

  return weekDays[dateWithOffset.getDay()]
}

export function getTimezoneMonthDate(
  unixTime: number,
  offsetInSeconds: number
): string {
  const dateWithOffset = getDateWithOffset(unixTime, offsetInSeconds)

  return `${dateWithOffset.getDate()} ${months[dateWithOffset.getMonth()]}`
}
