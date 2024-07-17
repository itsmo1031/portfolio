export const getDateRangeToString = (startedAt: string, endedAt?: string) => {
  if (startedAt === endedAt) {
    return startedAt;
  }
  return endedAt ? `${startedAt} - ${endedAt}` : `${startedAt} - 현재`;
}
