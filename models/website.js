var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WebsitesSchema = new Schema({
 Website: String,
 SiteTitle: String,
 FooterNote: String
});

module.exports = mongoose.model('Website', WebsitesSchema);