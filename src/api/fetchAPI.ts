// API calls for rockets and crew members

export const getRockets = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');
    const json = await response.json();
    return json;
  } catch (error) {
    return error
  }
};

export const getCrewMembers = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/crew');
    const json = await response.json();
    return json;
  } catch (error) {
    return error
  }
};
