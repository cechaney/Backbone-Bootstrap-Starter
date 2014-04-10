var ProductView = Backbone.View.extend({

  tagName: "li",

  className: "product",

  events: {
    "click .sticker":          "open"
  },

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {

  }

});