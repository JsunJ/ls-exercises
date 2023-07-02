function triangle(int) {
  let height = 1;
  let lineLength = 1;

  while (height <= int && lineLength <= int) {
    console.log(' '.repeat(int - lineLength) + '*'.repeat(lineLength));
    height += 1;
    lineLength += 1;
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********