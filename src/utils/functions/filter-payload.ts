export const filterPayload = (payload: any) => {
  const filteredPayload = Object.fromEntries(
    Object.entries(payload).filter(
      ([key, value]) => value !== undefined && value !== null && value
    )
  );
  return filteredPayload;
};
