function print(payload) {
  console.log(payload);
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];

const boxes2 = [
  { l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 },
];

const boxes3 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
];

const boxes4 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
];

function fitsInOneBox(boxes) {
  let newBoxes = boxes3.slice();
  let arr2D = [];

  newBoxes.forEach((box) => {
    arr2D.push({ lw: box.l * box.w, h: box.h });
  });

  arr2D.sort((a, b) => a.lw - b.lw);
  print(arr2D);

  let boolList = [];
  let lw = [];
  let h = [];
  for (let i = 0; i < arr2D.length; i++) {
    lw.push(arr2D[i].lw);
    h.push(arr2D[i].h);
  }
  console.log(lw, h);
  for (let i = 0; i < arr2D.length - 1; i++) {
    boolList.push(arr2D[i].lw < lw[i + 1] && arr2D[i].h <= h[i + 1]);
    // print(h[i + 1] > arr2D[i].h);
  }
  console.log(boolList.indexOf(false), boolList);
  if (boolList.indexOf(false) == 1 || boolList.indexOf(false) == 0) {
    return false;
  }
  return true;
}
print(fitsInOneBox(boxes));
