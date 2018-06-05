<template>
  <div>
    <h1>Angebot</h1>
    <hr>

<div class="products">
            <div id="website" class="product material">
                <h2>Websites</h2>
                <img class="productthump" src="~/assets/img/websites.svg" alt="">
                <p>Ich erstelle für dich eine <strong>Internetseite</strong>. Dabei wähle ich anhand deiner Anforderungen die für dich beste Technologie aus. Du musst selbst davon keine Ahnung haben aber ich arbeite mit:</p>
                <ul>
                    <li>
                        HTML5, CSS3, JS
                    </li>
                    <li>
                        Vue.js
                    </li>
                    <li>
                        Wordpress
                    </li>
                </ul>
                <p>Danach kann ich dich bei deiner <strong>SEO</strong> (Suchmaschinenoptimierung) unterstützen.</p>
            </div>

            <div id="pwa" class="product material">
                <h2>Progressive Webapps</h2>
                <img class="productthump" src="~/assets/img/webapps.svg" alt="">
                <p>Ich entwickle für dich HTML5 Apps. Diese können online oder offline funktionieren, am Desktop oder auch Mobil. Dafür verwende ich je nach Anforderung:</p>
                <ul>
                    <li>
                        Vanilla JS (ES6)
                    </li>
                    <li>
                        Vue.js
                    </li>
                    <li>
                        Cordova
                    </li>                    
                </ul>
            </div>

            <!-- <div class="product material">
                <h2>Minigames</h2>
                <img class="productthump" src="~/assets/img/games.svg" alt="">
                <p> Du hast eine Idee für ein Spiel, bist Grafiker, der seine gemalten Figuren zum Leben erwecken will oder möchtest ein Spiel mit deinem Firmenlogo? Ich erstelle für dich <strong>2D Spiele</strong> für den Browser, Mobil (Android) oder Desktop.</p>
                <ul>
                    <li>
                        Phaser.io
                    </li>
                    <li>
                        Construct 2
                    </li>
                </ul>
            </div> -->

            <div id="abap" class="product material">
                <h2>SAP ABAP</h2>
                <img class="productthump" src="~/assets/img/sap.svg" alt="">
                <p> Inhouse SAP-Programmierer lohnen sich nicht für dein Unternehmen und ganze SAP Berater sind zu teuer für eine Aufgabe? Ich bringe einige Jahre Erfahrung in der ABAP Entwicklung mit und zusammen mit dir kann ich spezielle Reports für dein SAP-System erstellen. </p>
            </div>

            <!-- <div class="product material">
                <h2>Außerdem</h2>
                <p>Ich habe ein großes <strong>Netzwerk</strong> aus professionellen Grafikdesignern, Linuxnerds und Programmierern jeder Art. Wenn ich dir selbst nicht helfen kann, dann profitierst du von meinen Connections.
                </p>
            </div> -->
        </div>

  </div>
</template>

<script>
export default {};
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
</style>