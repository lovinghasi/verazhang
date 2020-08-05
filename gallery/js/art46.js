
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'verazhangartstore.myshopify.com',
      storefrontAccessToken: '9326dac06b4042a3508bb669c4f28022',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '5153734230061',
        node: document.getElementById('product-component-1596664182289'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "title": {
        "font-weight": "normal"
      },
      "button": {
        "font-family": "Avant Garde, sans-serif",
        "color": "#000000",
        ":hover": {
          "color": "#000000",
          "background-color": "#a7c3d4"
        },
        "background-color": "#b9d9eb",
        ":focus": {
          "background-color": "#a7c3d4"
        }
      }
    },
    "buttonDestination": "checkout",
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Buy now"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Avant Garde, sans-serif",
        "color": "#000000",
        ":hover": {
          "color": "#000000",
          "background-color": "#a7c3d4"
        },
        "background-color": "#b9d9eb",
        ":focus": {
          "background-color": "#a7c3d4"
        }
      },
      "title": {
        "font-weight": "normal"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-family": "Avant Garde, sans-serif",
        "color": "#000000",
        ":hover": {
          "color": "#000000",
          "background-color": "#a7c3d4"
        },
        "background-color": "#b9d9eb",
        ":focus": {
          "background-color": "#a7c3d4"
        }
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Avant Garde, sans-serif",
        "background-color": "#b9d9eb",
        ":hover": {
          "background-color": "#a7c3d4"
        },
        ":focus": {
          "background-color": "#a7c3d4"
        }
      },
      "count": {
        "color": "#000000",
        ":hover": {
          "color": "#000000"
        }
      },
      "iconPath": {
        "fill": "#000000"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
