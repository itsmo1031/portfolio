export const getDateRangeToString = (startedAt: string, endedAt?: string) => {
  return endedAt ? `${startedAt} - ${endedAt}` : `${startedAt} - 현재`;
}
