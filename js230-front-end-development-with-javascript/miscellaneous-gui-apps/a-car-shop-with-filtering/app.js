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

  createUniqueSelections(cars) {
    let selections = {
      makes: [],
      models: [],
      prices: [],
      years: []
    }

    for (const car of cars) {
      if (!selections.makes.includes(car.make)) selections.makes.push(car.make);
      if (!selections.models.includes(car.model)) selections.models.push(car.model);
      if (!selections.prices.includes(car.price)) selections.prices.push(car.price);
      if (!selections.years.includes(car.year)) selections.years.push(car.year);
    }

    return selections;
  }

  createLimitedSelections(optionsArr) {
    let limitedCarCollection = this.createFilteredCollection(optionsArr);
    return this.createUniqueSelections(limitedCarCollection);
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
    let makeOptionsHtml = document.getElementById('make_options_template').innerHTML;
    let modelOptionsHtml = document.getElementById('model_options_template').innerHTML;
    let priceOptionsHtml = document.getElementById('price_options_template').innerHTML;
    let yearOptionsHtml = document.getElementById('year_options_template').innerHTML;

    Handlebars.registerPartial('car_template', carHtml);
    Handlebars.registerPartial('make_options_template', makeOptionsHtml);
    Handlebars.registerPartial('model_options_template', modelOptionsHtml);
    Handlebars.registerPartial('price_options_template', priceOptionsHtml);
    Handlebars.registerPartial('year_options_template', yearOptionsHtml);

    this.filtersTmpl = Handlebars.compile(filtersHtml);
    this.carsTmpl = Handlebars.compile(carsHtml);
    this.makeOptionsTmpl = Handlebars.compile(makeOptionsHtml);
    this.modelOptionsTmpl = Handlebars.compile(modelOptionsHtml);
    this.priceOptionsTmpl = Handlebars.compile(priceOptionsHtml);
    this.yearOptionsTmpl = Handlebars.compile(yearOptionsHtml);
  }

  updateFilterOptions(changedOption, selectionsObj) {
    let makeSelect = document.getElementById('make_select');
    let modelSelect = document.getElementById('model_select');
    let priceSelect = document.getElementById('price_select');
    let yearSelect = document.getElementById('year_select');

    switch(changedOption) {
      case 'make':
        modelSelect.innerHTML = this.modelOptionsTmpl({ models: selectionsObj.models });
        priceSelect.innerHTML = this.priceOptionsTmpl({ prices: selectionsObj.prices });
        yearSelect.innerHTML = this.yearOptionsTmpl({ years: selectionsObj.years });
        break;
      case 'model':
        makeSelect.innerHTML = this.makeOptionsTmpl({ makes: selectionsObj.makes });
        priceSelect.innerHTML = this.priceOptionsTmpl({ prices: selectionsObj.prices });
        yearSelect.innerHTML = this.yearOptionsTmpl({ years: selectionsObj.years });
        break;
      case 'price':
        makeSelect.innerHTML = this.makeOptionsTmpl({ makes: selectionsObj.makes });
        modelSelect.innerHTML = this.modelOptionsTmpl({ models: selectionsObj.models });

        break;
      case 'year':
        makeSelect.innerHTML = this.makeOptionsTmpl({ makes: selectionsObj.makes });
        modelSelect.innerHTML = this.modelOptionsTmpl({ models: selectionsObj.models });
        priceSelect.innerHTML = this.priceOptionsTmpl({ prices: selectionsObj.prices });
        break;
    }
  }

  preserveChosenValues(valuesObj) {
    let selects = document.querySelectorAll('select');

    selects.forEach(select => {
      if (valuesObj[select.name]) {
        let option = select.querySelector(`option[value="${valuesObj[select.name]}"`);
        option.selected = 'selected';
      } else {
        let option = select.querySelector('option');
        option.selected = 'selected';
      }
    });
  }

  resetSingleFilterOptions(valuesObj, selectionsObj) {
    let selectName = Object.keys(valuesObj).filter(key => valuesObj[key])[0];
    let makeSelect = document.getElementById('make_select');
    let modelSelect = document.getElementById('model_select');
    let priceSelect = document.getElementById('price_select');
    let yearSelect = document.getElementById('year_select');
      
    switch(selectName) {
      case 'make':
        makeSelect.innerHTML = this.makeOptionsTmpl({ makes: selectionsObj.makes });
        break;
      case 'model':
        modelSelect.innerHTML = this.modelOptionsTmpl({ models: selectionsObj.models });
        break;
      case 'price':
        priceSelect.innerHTML = this.priceOptionsTmpl({ prices: selectionsObj.prices });
        break;
      case 'year':
        yearSelect.innerHTML = this.yearOptionsTmpl({ years: selectionsObj.years });
        break;
    }
  }

  resetFilterOptions(selectionsObj) {
    let makeSelect = document.getElementById('make_select');
    let modelSelect = document.getElementById('model_select');
    let priceSelect = document.getElementById('price_select');
    let yearSelect = document.getElementById('year_select');

    makeSelect.innerHTML = this.makeOptionsTmpl({ makes: selectionsObj.makes });
    modelSelect.innerHTML = this.modelOptionsTmpl({ models: selectionsObj.models });
    priceSelect.innerHTML = this.priceOptionsTmpl({ prices: selectionsObj.prices });
    yearSelect.innerHTML = this.yearOptionsTmpl({ years: selectionsObj.years });
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

    this.view.renderFilters(this.model.createUniqueSelections(
                              this.model.carCollection));
    this.view.renderCars(this.model.carCollection);

    this.filtersDiv = document.getElementById('filters');
    this.filterBtn = document.querySelector('.filter_btn');

    this.bindEvents();
  }

  bindEvents() {
    this.filtersDiv.addEventListener('change', this.optionChangeHandler);
    this.filterBtn.addEventListener('click', this.filterHandler);
  }

  optionChangeHandler = event => {
    if (event.target.tagName === 'SELECT') {
      event.preventDefault();
      let selects = document.querySelectorAll('#filters select');
      let options = [];
      let selections = {};
  
      for (let index = 0; index < selects.length; index += 1) {
        if (selects[index].value) {
          if (selects[index].name === 'price' || selects[index].name === 'year') {
            options.push(parseInt(selects[index].value));
          } else {
            options.push(selects[index].value);
          }
        }
      }

      selects.forEach(select => {
        selections[select.name] = select.value;
      });

      if (options.length === 0) {
        this.view.resetFilterOptions(this.model.createUniqueSelections(
                                      this.model.carCollection));
      } else if (options.length === 1) {
        // restore all unique options when a single selection is in use whether
        // going from 0 selections to 1, or going from >1 to 1
        this.view.updateFilterOptions(event.target.name,
          this.model.createLimitedSelections(options), selections);
        this.view.resetSingleFilterOptions(selections, this.model.createUniqueSelections(
                                            this.model.carCollection));
        this.view.preserveChosenValues(selections);
      } else {
        this.view.updateFilterOptions(event.target.name,
          this.model.createLimitedSelections(options), selections);
        this.view.preserveChosenValues(selections);
      }
    }
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