<template>
  <div>
    <h1>Angebot</h1>
    <hr>

<div class="products">
            <div id="website" class="product material">
                <h2>Wordpress</h2>
                <img class="productthump" src="~/assets/img/websites.svg" alt="">
                <p>Ich berate Webdesigner mit Wordpress. Dabei kann ich dich von der Ersteinrichtung bis zu individuellen komplexen Plugins unterstützen.</p>
                <ul>
                    <li>
                        HTML5, CSS3, JS (ES6)
                    </li>
                    <li>
                        Wordpress
                    </li>
                </ul>
            </div>

            <div id="pwa" class="product material">
                <h2>Fullstack Entwicklung</h2>
                <img class="productthump" src="~/assets/img/webapps.svg" alt="">
                <p>Ich entwickle im MEVN Stack komplexe Apps, Websites oder sogar Spiele.</p>
                <ul>
                    <li>Mongo</li>
                    <li>Express</li>
                    <li>Vue</li>
                    <li>Node</li>
                </ul>
            </div>
        </div>

  </div>
</template>

<script>
export default {
  head: {
    title: "Angebot",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Hi, ich bin Tobias Wust. Ich bin ein reisender Fullstack Entwickler. Ich arbeite mit dem MEVN Stack (Mongo, Express, Vue, Node). Und auch mit Wordpress."
      }
    ]
  }
};
</script>

<style scoped>
ul {
  padding: 0;
}
.product li {
  list-style: none;
  font-weight: bold;
  color: #f68714;
}

.product {
  min-width: 300px;
  width: 40%;
  text-align: center;
  padding: 0px 30px 30px 30px;
  margin: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #f7f7f7;
  transition: all 0.3s;
}

.product p {
  text-align: justify;
}

.productthump {
  margin: auto;
}

.products {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: distribute;
  justify-content: space-around;
}

.product:hover {
  transform: scale(1.1);

  box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.28), 0 4px 14px 0 rgba(0, 0, 0, 0.24),
    0 10px 6px -10px rgba(0, 0, 0, 0.4);
}
</style>