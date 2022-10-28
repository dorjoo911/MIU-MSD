/*
Algorithm InsertionSort(arr)
Input Array arr
Output elements in arr are in sorted order
for i  1 to arr.length - 1 do
j  i
insertElem  arr[i]
while 0 < j ˄ insertElem < arr[j - 1] do
arr[j]  arr[j - 1] // shift element to right
j  j – 1
arr[j]  insertElem
*/
function insertionSort(arr) {
  for (let i = 1; i <= arrlength; i++) {
    let j = i;
    let insertElem = arr[i];
    while (0 < j && insertElem < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j = j - 1;
      arr[j] = insertElem;
    }
  }
}
/*
Algorithm heapsort(arr)
Input Array arr
Output elements in arr are in sorted order
buildHeap (arr) // build the heap from bottom up O(n)
end  arr.length-1 O(1)
while end > 0 do O(n)
swapElements(arr, 0, end) // move max to end of heap O(n)
end  end - 1 // decrease size of the heap O(n)
downHeap(arr, 0, end) // restore heap-order O(n log n)

*/
function heapSort(arr) {
  buildHeap(arr);
  let end = arr.lenght - 1;
  while (end > 0) {
    swapElements(arr, 0, end);
    end = end - 1;
    downHeap(arr, 0, end);
  }
}
function buildHeap(arr) {
  let last = arr.lenght - 1;
  let next = last;
  while (next > 0) {
    downHeap(arr, parent(next), last);
    next = next - 2;
  }
}
function parent(i) {
  return floor((i - 2) / 2);
}
function downHeap(H, i, last) {
  let property = false;
  while (!property) {
    let maxIndex = indexOfMax(H, i, last);
    if (maxIndex != i) {
      swapElements(H, maxIndex, i);
      i = maxIndex;
    } else {
      property = true;
    }
  }
}
function swapElements(H, j, k) {
  let temp = H[j];
  H[j] = H[k];
  H[k] = temp;
}
function indexOfMax(A, r, last) {
  let largest = r;
  let left = 2 * r + 1;
  let right = left + 1;
  if (left <= last && A[left] > A[largest]) {
    largest = right;
  }
  if (right <= last && A[right] > A[largest]) {
    largest = right;
  }
  return largest;
}

/* ******************************************** */
function ShellSort(arr) {
  let maxGap = floor((arr.lenght - 1) / 3);
  let h = 1;
  while (h <= maxGap) {
    h = h * 3 + 1;
  }
  while (0 < h) {
    segmentInsertionSort(arr, h);
    h = (h - 1) / 3;
  }
}
function segmentInsertionSort(arr, gap) {
  for (let i = gap; i < arr.lenght; i++) {
    let j = i;
    let insertElem = arr[i];
    while (j > gap && insertElem < arr[j - gap]) {
      arr[j] = arr[j - gap];
      j = j - gap;
    }
    arr[j] = insertElem;
  }
}

module.export = { ShellSort, heapSort, insertionSort };
