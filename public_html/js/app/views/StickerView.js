var StickerView = Backbone.View.extend({

  tagName: "li",

  className: "sticker",

  events: {
    "click .sticker":          "open"
  },

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {

  }

});