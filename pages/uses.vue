  <template>
  <div>
    <h1>Tobias Wust Uses</h1>
    <hr />
    <section>
      <p>
        Hier findet ihr alles was ich zum Entwickeln benutze. Manchmal ändert sich das natürlich, ich versuche die Liste aber aktuell zu halten. Zur Hardware habe ich auf
        <a
          href="https://wust.me/uses/"
        >https://wust.me/uses/</a> noch ein bisschen was geschrieben. Die Sachen, die ich immer dabei habe markiere ich mit #EDC (Every Day Carry).
      </p>
      <p>Einige Links auf diese Seite sind affiliate Links zu Amazon. Wenn ihr darauf klickt entstehen euch keine extra Kosten aber ich verdiene vielleicht ein paar Cent.</p>
    </section>
    <h2>Hardware</h2>
    <ul>
      <li>
        Mein
        <strong>Laptop</strong> ist ein
        <a href="https://amzn.to/2Jvz3US">Lenovo Thinkpad T480s</a>
        mit 14 Zoll, i7-8550U, 6 GB RAM, 512 GB SSD, NVIDIA GeForce MX150 #EDC
      </li>
      <li>
        Als
        <strong>zweiten Monitor</strong> habe ich einen
        <a href="https://amzn.to/2YillrH">ASUS ZenScreen MB16AC</a> der ist klein und leicht genug um immer in meinem Rucksack dabei zu sein und wird über ein USB-C Kabel mit Strom und Bild versorgt.
      </li>
      <li>
        Seit kurzem habe ich eine
        <strong>mechanische Tastatur</strong>. Zur Zeit das <a href="https://www.keychron.com/products/keychron-k2-mechanical-keyboard">Keychron K2</a>. Mit RGB Backlight und Aluminium Frame. Verbaut sind Cherry Red Switches. Fast perfekt, aber leider z.Z nur englisches Tastaturlayout.
      </li>
      <li>Ich mache zwar viel mit der Tastatur, aber trotzdem habe ich gerne auch eine vernünftige <strong>Maus</strong>. Eine alte <a href="https://amzn.to/2YillrH">Razer Death Adder</a>. #EDC
      </li>
      <li>Den Laptop packe ich immer in eine <strong>Schutzhülle</strong> aus Neopron von <a href="https://amzn.to/2HDtCRV">Amazon</a> #EDC</li>
    </ul>
    <h2>Software</h2>
    <ul>
      <li>Mein <strong>Betriebsystem</strong> ist Windows 10</li>
      <li>Dort installiere ich Software mit <a href="https://chocolatey.org/">Chocolatey</a></li>
      <li>Als <strong>Texteditor</strong> Benutze ich <a href="https://code.visualstudio.com/">VSCode</a> mit dem <strong>Theme</strong> Cobalt2 und der <strong>Schriftart </strong> <a href="https://github.com/source-foundry/Hack">Hack</a></li>
      <li><a href="https://hyper.is/">Hyper</a> ist mein <strong>Terminal</strong>. Dadrin startet bei mir im standard WSL mit zsh. Angereichert mit <a href="http://ohmyz.sh/">Oh my zsh</a>. Das hat das Theme <a href="https://github.com/romkatv/powerlevel10k">Powerline10k</a></li>
      <li>Ich benutz <strong>Docker</strong> für Windows, mit Daemon für mein WSL</li>
      <li>Andere Programme dich benutze sind: Postman, Filezille und Gitkraken.</li>
    </ul>
  </div>
</template>

<script>
export default {
  head: {
    title: "Uses",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Hi, ich bin Tobias Wust - ein reisender Entwickler. Das bedeutet, dass ich in meinem Auto lebe und unterwegs als Fullstack Developer arbeite. Hier findest du meinen Lebenslauf."
      }
    ]
  }
};
</script>

<style scoped>
strong {
  color: #f68714;
}

li {
  list-style: circle;
  margin-bottom: 0.5em;
}
</style>
