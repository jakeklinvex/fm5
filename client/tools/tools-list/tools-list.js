/* global instantsearch */

function initSearch(opts) {
  var search = instantsearch({
    appId: opts.appId,
    apiKey: opts.apiKey,
    indexName: opts.indexName,
    urlSync: true
  });

  var widgets = [
    instantsearch.widgets.searchBox({
      container: '#search-input',
      placeholder: 'Search Biblical Content',

    }),


    instantsearch.widgets.hits({
      container: '#hits',
      hitsPerPage: 10,
      templates: {
        item: getTemplate('hit'),
        empty: getTemplate('no-results')
      }
    }),
    instantsearch.widgets.stats({
      container: '#stats'
    }),
    instantsearch.widgets.sortBySelector({
      container: '#sort-by',
      autoHideContainer: true,
      indices: [{
        name: opts.indexName, label: 'Most relevant'
      }, {
        name: opts.indexName + '_price_asc', label: 'Lowest price'
      }, {
        name: opts.indexName + '_price_desc', label: 'Highest price'
      }]
    }),
    instantsearch.widgets.pagination({
      container: '#pagination',
      scrollTo: '#search-input'
    }),
    instantsearch.widgets.refinementList({
      container: '#persons',
      attributeName: 'persons',
      limit: 15,
      operator: 'or',
      templates: {
        header: getHeader('People')
      }
    }),
    instantsearch.widgets.refinementList({
      container: '#bible',
      attributeName: 'bible.book',
      limit: 10,
      operator: 'or',
      templates: {
        header: getHeader('Bible Content')
      }
    }),
    /*instantsearch.widgets.rangeSlider({
      container: '#type',
      attributeName: 'type',
      templates: {
        header: getHeader('Type')
      }
    }),*/
    instantsearch.widgets.refinementList({
      container: '#topics',
      attributeName: 'topics',
        checkbox: false,
      limit: 10,
      operator: 'or',
      templates: {
        header: getHeader('Topic')
      }

    }),

     /* instantsearch.widgets.refinementList({
      container: '#type',
      attributeName: 'type',
      limit: 10,
      operator: 'or',
      templates: {
        header: getHeader('Type')
      }
    }),*/

      instantsearch.widgets.refinementList({
      container: '#authors',
      attributeName: 'authors',
      limit: 10,
      operator: 'or',
      templates: {
        header: getHeader('Author')
      }
    }),

      instantsearch.widgets.refinementList({
      container: '#source',
      attributeName: 'types',
      limit: 10,
      operator: 'or',
      templates: {
        header: getHeader('Type')
      }
    }),

      instantsearch.widgets.refinementList({
      container: '#churches',
      attributeName: 'churches',
      limit: 10,
      operator: 'or',
      templates: {
        header: getHeader('Church')
      }
    }),

       instantsearch.widgets.refinementList({
      container: '#cities',
      attributeName: 'cities',
      limit: 10,
      operator: 'or',
      templates: {
        header: getHeader('City')
      }
    }),




  ];

  widgets.forEach(search.addWidget, search);
  search.start();
}

function getTemplate(templateName) {
  return document.querySelector('#' + templateName + '-template').innerHTML;
}

function getHeader(title) {
  return '<h5>' + title + '</h5>';
}

this.initSearch = initSearch;
