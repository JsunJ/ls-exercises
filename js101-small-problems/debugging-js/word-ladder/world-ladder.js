// Upon first glance, Gemma's code below looks like it should work.
// But it throws a TypeError, saying: Cannot read property 'forEach' of
// undefined. Why is that?

let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

// Line 5 is not terminated with a semi colon.