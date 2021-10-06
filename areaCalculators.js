function calculateRectangleArea(length, width) {
  let rectangleArea = length * width;

  if (rectangleArea == -rectangleArea) {
    return undefined;
  } else {
    return rectangleArea;
  }
}
console.log(calculateRectangleArea(10, 20));

function calculateTriangleArea(base, height) {
  let triangleArea = (base * height) / 2;
  if (triangleArea == -triangleArea) {
    return undefined;
  } else {
    return triangleArea;
  }
}

console.log(calculateTriangleArea(10, 20));

function calculateCircleArea(radius) {
  let circleArea = Math.PI * (radius * radius);
  if (radius < 0) {
    return undefined;
  } else {
    return circleArea;
  }
}
console.log(calculateCircleArea(20));
