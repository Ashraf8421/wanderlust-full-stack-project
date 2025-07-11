// mapboxgl.accessToken = mapToken;

// const map = new mapboxgl.Map({
//   container: "map", // container ID
//   style: "mapbox://styles/mapbox/streets-v12", //style URL
//   center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
//   zoom: 9, // starting zoom
// });

// console.log(coordinates);

// const marker = new mapboxgl.Marker({ color: "red" })
//   .setLngLat(listing.geometry.coordinates)
//   .setPopup(
//     new mapboxgl.Popup({ offset: 25 }).setHTML(
//       `<h4>${listing.title}</h4><p>Exact location provided after booking!</p>`
//     )
//   )
//   .addTo(map);

mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: coordinates,
  zoom: 9,
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      "<h6>Exact location provided after booking!</h6>"
    )
  )
  .addTo(map);
