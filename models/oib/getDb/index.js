const path = require('path');
const nedb = require('nedb');

const db = {};
db.work = new nedb({
  filename: path.join(__dirname, '../../../db/oib/work/work.db'),
  autoload: true
});
db.customer = new nedb({
  filename: path.join(__dirname, '../../../db/oib/customer/customer.db'),
  autoload: true
});
db.industry = new nedb({
  filename: path.join(__dirname, '../../../db/oib/industry/industry.db'),
  autoload: true
});
db.news = new nedb({
  filename: path.join(__dirname, '../../../db/oib/news/news.db'),
  autoload: true
});
db.serviceTag = new nedb({
  filename: path.join(__dirname, '../../../db/oib/service-tag/service-tag.db'),
  autoload: true
});
db.customerSliders = new nedb({
  filename: path.join(__dirname, '../../../db/oib/customer-sliders/customer-sliders.db'),
  autoload: true
});
db.about = new nedb({
  filename: path.join(__dirname, '../../../db/oib/about/about.db'),
  autoload: true
});
db.aboutSliders = new nedb({
  filename: path.join(__dirname, '../../../db/oib/about-sliders/about-sliders.db'),
  autoload: true
});
db.user = new nedb({
  filename: path.join(__dirname, '../../../db/oib/user/user.db'),
  autoload: true
});

module.exports = db;
