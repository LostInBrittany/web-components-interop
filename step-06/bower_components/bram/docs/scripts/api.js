const anchorify = require('./lib/anchorify');
const marked = require('marked');
const fs = require('fs');
const cheerio = require('cheerio');
const highlight = require('./lib/highlight');

function getAPI() {
  let pth = `${__dirname}/../../README.md`;
  let src = fs.readFileSync(pth, 'utf8');

  let res = marked(src);
  let $ = cheerio.load(`<body>${res}</body>`);

  let inAPI = false;
  $('body').children().each((idx, el) => {
    let $el = $(el);
    if(!inAPI) {
      if(el.tagName === 'h2' && $el.attr('id') === 'api') {
        inAPI = true;
      } else {
        $el.remove();
      }
    } else {
      if(el.tagName === 'h2') {
        $el.remove();
        inAPI = false;
      }
    }
  });

  highlight($);
  anchorify($);

  return $('body').html();
}

function fillTemplate(str) {
  let pth = `${__dirname}/../template.html`;
  let src = fs.readFileSync(pth, 'utf8');

  let $ = cheerio.load(src);

  let styles = $('<link>')
    .attr('rel', 'stylesheet')
    .attr('href', './styles/api.css');
  $('head').append(styles);
  $('#main').replaceWith(str);
  return $.html();
}

let apiStr = getAPI();
let out = fillTemplate(apiStr).trim();
console.log(out);
