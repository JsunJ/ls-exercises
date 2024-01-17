const cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

class Model {
  constructor() {
    this.carCollection = cars;
  }

  createUniqueSelections() {
    let selections = {
      makes: [],
      models: [],
      prices: [],
      years: []
    }

    for (const car of this.carCollection) {
      if (!selections.makes.includes(car.make)) selections.makes.push(car.make);
      if (!selections.models.includes(car.model)) selections.models.push(car.model);
      if (!selections.prices.includes(car.price)) selections.prices.push(car.price);
      if (!selections.years.includes(car.year)) selections.years.push(car.year);
    }

    return selections;
  }

  createFilteredCollection(optionsArr) {
    let newCollection = [];

    this.carCollection.forEach(car => {
      let carValues = Object.values(car);

      if (optionsArr.every(option => {
        return carValues.includes(option);
      })) {
        newCollection.push(car);
      }
    });

    return newCollection;
  }
}

class View {
  constructor() {
    let filtersHtml = document.getElementById('filters_template').innerHTML;
    let carsHtml = document.getElementById('cars_template').innerHTML;
    let carHtml = document.getElementById('car_template').innerHTML;

    this.filtersTmpl = Handlebars.compile(filtersHtml);
    this.carsTmpl = Handlebars.compile(carsHtml);
    Handlebars.registerPartial('car_template', carHtml);
  }

  renderFilters(selectionsObj) {
    let filtersDiv = document.getElementById('filters');
    filtersDiv.innerHTML = this.filtersTmpl({
      makes: selectionsObj.makes,
      models: selectionsObj.models,
      prices: selectionsObj.prices,
      years: selectionsObj.years
    });
  }

  renderCars(collectionObj) {
    let carsDiv = document.getElementById('cars');
    carsDiv.innerHTML = this.carsTmpl({ cars: collectionObj });
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.renderFilters(this.model.createUniqueSelections());
    this.view.renderCars(this.model.carCollection);

    this.filterBtn = document.querySelector('.filter_btn');
    this.filterBtn.addEventListener('click', this.filterHandler);
  }

  filterHandler = event => {
    event.preventDefault();
    let selects = document.querySelectorAll('#filters select');
    let options = [];

    for (let index = 0; index < selects.length; index += 1) {
      if (selects[index].value) {
        if (selects[index].name === 'price' || selects[index].name === 'year') {
          options.push(parseInt(selects[index].value));
        } else {
          options.push(selects[index].value);
        }
      }
    }

    if (options.length === 0) {
      this.view.renderCars(this.model.carCollection);
    } else {
      this.view.renderCars(this.model.createFilteredCollection(options));
    }
  }
}

document.addEventListener('DOMContentLoaded', event => {
  new Controller(new Model(), new View());
});