"use strict"
var EntityFactory = function() {
    var e = function(text) {
        if (text) {
            var kv = JSON.parse(text);
            for (var k in kv) {
                this[k] = kv[k];
            }
        }
    };

    e.prototype = {
        toString: function() {
            return JSON.stringify(this);
        }
    };

    return e;
};

var Tea = EntityFactory();

var TeaMarket function() {
    LocalContractStorage.defineMapProperty(this, "inventory", {
        parse: function(text) {
            return new Tea(text);
        },
        stringify: function(obj) {
            return obj.toString();
        }
    });
}

TeaMarket.prototype = {
    init: function() {
        this.tea_capacity = 0;
    },

    post: function(tea_name, tags, desc, price, contact, contact_price) {
        var tea = new Tea();
        tea.name = tea_name;
        tea.tags = tags;
        tea.desc = desc;
        tea.price = price;
        tea.contact = contact;
        tea.contact = contact_price;
        tea.owner = Blockchain.transaction.from;
        tea.date = new Date().getTime();
        tea.post_id = this.tea_capacity;
        this.inventory.put(this.tea_capacity, tea);
        this.tea_capacity += 1;

        return "successful"
    },
}
module.exports = TeaMarket;
