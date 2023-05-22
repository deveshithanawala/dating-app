// Function to format UTC dates into readable format
export const formatDate = (date) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const today = new Date(date);

  return today.toLocaleDateString("en-US", options);
};
