function distanceFromHqInBlocks(pickupLocation) {
  if (pickupLocation < 42) {
    return (42 - pickupLocation);
  } else {
    return (pickupLocation - 42);
  }
}
function distanceFromHqInFeet(pickupLocation) {
  return (distanceFromHqInBlocks(pickupLocation) * 264);
}
function distanceTravelledInFeet(pointA, pointB) {
  if (pointA > pointB) {
    return (pointA - pointB) * 264;
  } else {
    return (pointB - pointA) * 264;
  }
}
function calculatesFarePrice(pointA, pointB) {
  if (distanceTravelledInFeet(pointA, pointB) <= 400) {
    return 0;
  } else if (distanceTravelledInFeet(pointA, pointB) > 400
    && distanceTravelledInFeet(pointA, pointB) < 2000) {
    return (distanceTravelledInFeet(pointA, pointB) - 400)* 0.02;
  } else if (distanceTravelledInFeet(pointA, pointB) >= 2000
    && distanceTravelledInFeet(pointA, pointB) < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}