export function filterTypeOfSeries(response, type) {
  if (type === "characters") {
    return response.filter((item) => item.category === "Breaking Bad" || item.category === "Breaking Bad, Better Call Saul");
  } else if (type === "episodes" || type === "quotes") {
    return response.filter((item) => item.series === "Breaking Bad" );
  } else {
    return response;
  }
}
