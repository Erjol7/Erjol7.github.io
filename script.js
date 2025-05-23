document.addEventListener("DOMContentLoaded", function () {
  // Elementet për modal
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeModal = document.querySelector(".modal .close");

  // Butoni kryesor "Testim"
  const testimBtn = document.getElementById("testim-btn");

  // Kur klikohet butoni "Testim", ngarkohet kuizi i plotë (të katër pjesët)
  testimBtn.addEventListener("click", function () {
    modalBody.innerHTML = quizContent; // quizContent po vijon më poshtë
    modal.style.display = "block";
    addFormListener(); // Shton event listener për butonin Finish të kuizit
  });

  // Mbyll modalin kur klikohet shenja "×"
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Mbyll modalin edhe kur klikohet jashtë përmbajtjes së modalit
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Përmbajtja e kuizit si një variabël e vetme që përfshin të katër pjesët
  const quizContent = `
    <form id="quiz-form">
      <!-- Pjesa 1: Pyetjet me përgjigje të hapura (Perkufizo termat dhe plotëso vendet bosh) -->
      <section id="section-1">
        <h3>1. Perkufizo termat</h3>
        <fieldset>
          <legend>1. Perkufizo termat</legend>
          <label>a) Kromozom: <input type="text" name="term1" placeholder="Shkruaj përgjigjen"></label>
          <label>b) Gjen: <input type="text" name="term2" placeholder="Shkruaj përgjigjen"></label>
          <label>c) Kromozome homologe: <input type="text" name="term3" placeholder="Shkruaj përgjigjen"></label>
          <label>d) Fenotip: <input type="text" name="term4" placeholder="Shkruaj përgjigjen"></label>
          <label>e) Kodominanca: <input type="text" name="term5" placeholder="Shkruaj përgjigjen"></label>
          <label>f) Cikel qelizor: <input type="text" name="term6" placeholder="Shkruaj përgjigjen"></label>
          <label>g) Interfaza: <input type="text" name="term7" placeholder="Shkruaj përgjigjen"></label>
          <label>h) Hemofili: <input type="text" name="term8" placeholder="Shkruaj përgjigjen"></label>
          <label>i) ARN: <input type="text" name="term9" placeholder="Shkruaj përgjigjen"></label>
        </fieldset>
        <fieldset>
          <legend>2. Plotëso vendet bosh</legend>
          <p>Cikli qelizor përbëhet nga ____ dhe ____.</p>
          <input type="text" name="blank1" placeholder="Përgjigje 1">
          <input type="text" name="blank2" placeholder="Përgjigje 2">
          <p>____ përbëhet nga 3 faza të cilat janë: ____ , ____ , ____ , ____.</p>
          <input type="text" name="blank3" placeholder="Përgjigje 1">
          <input type="text" name="blank4" placeholder="Përgjigje 2">
          <input type="text" name="blank5" placeholder="Përgjigje 3">
          <input type="text" name="blank6" placeholder="Përgjigje 4">
          <p>Ne ____ e mitozës, kromozomet ____, membrana berthamore ____, berthama ____ dhe formohet teresisht ____ ____.</p>
          <input type="text" name="blank7" placeholder="Përgjigje 1">
          <input type="text" name="blank8" placeholder="Përgjigje 2">
          <input type="text" name="blank9" placeholder="Përgjigje 3">
          <input type="text" name="blank10" placeholder="Përgjigje 4">
          <input type="text" name="blank11" placeholder="Përgjigje 5">
          <p>Ne ____ kromozomet vendosen në ____ ____ të qelizës.</p>
          <input type="text" name="blank12" placeholder="Përgjigje 1">
          <input type="text" name="blank13" placeholder="Përgjigje 2">
          <input type="text" name="blank14" placeholder="Përgjigje 3">
          <p>Ne ____ ndodh ndarja e ____.</p>
          <input type="text" name="blank15" placeholder="Përgjigje 1">
          <input type="text" name="blank16" placeholder="Përgjigje 2">
          <p>Një kromozom përfaqëson një ____.</p>
          <input type="text" name="blank17" placeholder="Përgjigje">
          <p>Kromozomet vendosen drejt ____ të ____.</p>
          <input type="text" name="blank18" placeholder="Përgjigje 1">
          <input type="text" name="blank19" placeholder="Përgjigje 2">
          <p>Ne ____ ndodh ____.</p>
          <input type="text" name="blank20" placeholder="Përgjigje 1">
          <input type="text" name="blank21" placeholder="Përgjigje 2">
          <p>____ membrana berthamore zhduket ____ ____.</p>
          <input type="text" name="blank22" placeholder="Përgjigje 1">
          <input type="text" name="blank23" placeholder="Përgjigje 2">
          <input type="text" name="blank24" placeholder="Përgjigje 3">
          <p>Ne fund ndodh ____.</p>
          <input type="text" name="blank25" placeholder="Përgjigje">
        </fieldset>
      </section>

      <!-- Pjesa 2: Pyetjet e teorisë dhe emërtimit -->
      <section id="section-2">
        <h3>2. Teori dhe Emërtim</h3>
        <fieldset>
          <legend>Formulo ligjin e dyte të Mendeleit</legend>
          <input type="text" name="law" placeholder="Shkruaj ligjin">
        </fieldset>
        <fieldset>
          <legend>Emerto pjesët e figurave</legend>
          <p>a) Pjesa e figurës (përgjigje: kromozomi X dhe kromozomi Y):</p>
          <input type="text" name="part_a" placeholder="Shkruaj përgjigjen">
          <p>b) Pjesa tjetër (përgjigje: Kariotip femeror):</p>
          <input type="text" name="part_b" placeholder="Shkruaj përgjigjen">
        </fieldset>
      </section>

      <!-- Pjesa 3: Pyetje me alternativa dhe plotëso -->
      <section id="section-3">
        <h3>3. Multiple Choice & Plotëso</h3>
        <fieldset>
          <legend>a) Cili është materiali gjenetik që përcakton karakteristikat trasheguese të organizmat? <em>(P:ii)</em></legend>
          <label><input type="radio" name="q3a" value="0"> ARN</label>
          <label><input type="radio" name="q3a" value="1"> ADN</label>
          <label><input type="radio" name="q3a" value="2"> m-ARN</label>
          <label><input type="radio" name="q3a" value="3"> t-ARN</label>
        </fieldset>
        <fieldset>
          <legend>b) Cili shkencëtar hodhi bazat e trashegimit? <em>(P:ii)</em></legend>
          <label><input type="radio" name="q3b" value="0"> Charles Darwin</label>
          <label><input type="radio" name="q3b" value="1"> Gregor Mendel</label>
          <label><input type="radio" name="q3b" value="2"> Francis Crick</label>
          <label><input type="radio" name="q3b" value="3"> James Watson</label>
        </fieldset>
        <fieldset>
          <legend>c) Cili është roli i kromozomeve në qelizë? <em>(P:ii)</em></legend>
          <label><input type="radio" name="q3c" value="0"> Prodhimi i energjisë</label>
          <label><input type="radio" name="q3c" value="1"> Ruajtja e informacionit gjenetik</label>
          <label><input type="radio" name="q3c" value="2"> Transporti i molekulave</label>
          <label><input type="radio" name="q3c" value="3"> Shkatërrimi i substancave të dëmshme</label>
        </fieldset>
        <fieldset>
          <legend>d) Cili është rezultati i një kryqëzimi midis dy individëve heterozigotë për një tipar të dhënë? <em>(P:iiii)</em></legend>
          <label><input type="radio" name="q3d" value="0"> 100% homozigotë</label>
          <label><input type="radio" name="q3d" value="1"> 50% heterozigotë dhe 50% homozigotë</label>
          <label><input type="radio" name="q3d" value="2"> 75% homozigotë dhe 25% heterozigotë</label>
          <label><input type="radio" name="q3d" value="3"> 25% homozigotë dominues, 50% heterozigotë, dhe 25% homozigotë recesiv</label>
        </fieldset>
        <fieldset>
          <legend>e) Cili është roli i ARN-së në qelizë? <em>(P:i)</em></legend>
          <label><input type="radio" name="q3e" value="0"> Ruajtja e informacionit gjenetik</label>
          <label><input type="radio" name="q3e" value="1"> Prodhimi i proteinave</label>
          <label><input type="radio" name="q3e" value="2"> Shkatërrimi i substancave të dëmshme</label>
          <label><input type="radio" name="q3e" value="3"> Transporti i energjisë</label>
        </fieldset>
        <fieldset>
          <legend>f) Cili është roli i kromozomeve seksuale tek njerëzit? <em>(P:ii)</em></legend>
          <label><input type="radio" name="q3f" value="0"> Përcaktimi i tipareve të trashëguara</label>
          <label><input type="radio" name="q3f" value="1"> Përcaktimi i gjinisë së individit</label>
          <label><input type="radio" name="q3f" value="2"> Prodhimi i energjisë për qelizën</label>
          <label><input type="radio" name="q3f" value="3"> Ruajtja e proteinave në qelizë</label>
        </fieldset>
        <fieldset>
          <legend>g) Jepen bazat e ADN A; T; G; A. Si do të jetë renditja e bazave në antikodonin e t-ARN? <em>(P:ii)</em></legend>
          <label><input type="radio" name="q3g" value="0"> U; A; C; U</label>
          <label><input type="radio" name="q3g" value="1"> A; U; C; A</label>
          <label><input type="radio" name="q3g" value="2"> A; T; G; A</label>
          <label><input type="radio" name="q3g" value="3"> T; A; C; T</label>
        </fieldset>
        <fieldset>
          <legend>h) Numri i kromozomeve haploide të lepujt është 22. Gjej sa është numri i kromatideve që ka një qelizë e trurit? <em>(P:i)</em></legend>
          <label><input type="radio" name="q3h" value="0"> 88</label>
          <label><input type="radio" name="q3h" value="1"> 44</label>
          <label><input type="radio" name="q3h" value="2"> 20</label>
          <label><input type="radio" name="q3h" value="3"> 22</label>
        </fieldset>
        <fieldset>
          <legend>j) Qeliza diploide tek elefantet kanë 56 kromozome. Sa kromozome autosome janë në një gamet? <em>(P:ii)</em></legend>
          <label><input type="radio" name="q3j" value="0"> 28</label>
          <label><input type="radio" name="q3j" value="1"> 27</label>
          <label><input type="radio" name="q3j" value="2"> 26</label>
          <label><input type="radio" name="q3j" value="3"> 54</label>
        </fieldset>
        <fieldset>
          <legend>m) Një qelizë në profazën I të mejozës ka 12 kromatide. Sa tetrade ka qelizë në mejozën 1? <em>(P:i)</em></legend>
          <label><input type="radio" name="q3m" value="0"> 3</label>
          <label><input type="radio" name="q3m" value="1"> 6</label>
          <label><input type="radio" name="q3m" value="2"> 12</label>
          <label><input type="radio" name="q3m" value="3"> 24</label>
        </fieldset>
        <!-- Plotëso pjesa për Stacionin 3 -->
        <fieldset>
          <legend>2. Plotëso</legend>
          <p>a) Enzima që merr pjesë në transkriptim: <input type="text" name="q3_2a" placeholder="Përgjigje"></p>
          <p>b) Dy enzimat që marrin pjesë në replikim:</p>
          <p>1. <input type="text" name="q3_2b1" placeholder="Përgjigje"></p>
          <p>2. <input type="text" name="q3_2b2" placeholder="Përgjigje"></p>
        </fieldset>
      </section>

      <!-- Pjesa 4: Pyetje të hapura (open) -->
      <section id="section-4">
        <h3>4. Pyetje të Hapura</h3>
        <fieldset>
          <legend>Cfare është translatimi dhe si ndodh?</legend>
          <textarea name="q4_1" rows="3" placeholder="Shkruaj përgjigjen"></textarea>
        </fieldset>
        <fieldset>
          <legend>Pershkruaj replikimin dhe kodin gjenetik</legend>
          <textarea name="q4_2" rows="3" placeholder="Shkruaj përgjigjen"></textarea>
        </fieldset>
        <fieldset>
          <legend>Cfare janë sëmundjet recesive të lidhura me gjenin X-seksual, cilat janë dhe veçoritë e tyre?</legend>
          <textarea name="q4_3" rows="3" placeholder="Shkruaj përgjigjen"></textarea>
        </fieldset>
        <fieldset>
          <legend>Bej krahasimin e ADN dhe ARN</legend>
          <textarea name="q4_4" rows="3" placeholder="Shkruaj përgjigjen"></textarea>
        </fieldset>
        <fieldset>
          <legend>Pershkruaj mejozën 2</legend>
          <textarea name="q4_5" rows="3" placeholder="Shkruaj përgjigjen"></textarea>
        </fieldset>
        <h4>Për ushtrimet shtesë (shkruani përgjigjet në fletë – nuk gjykohen automatik):</h4>
        <fieldset>
          <legend>a) Në një molekulë ADN përmban 500 timine nucleotide. Numri i lidhjeve hidrogjenore midis dy zinxhirëve të saj është 2200. Sa nukleotide ka gjithsej kjo molekulë ADN-je?</legend>
          <input type="text" name="q4_a" placeholder="Përgjigje">
        </fieldset>
        <fieldset>
          <legend>b) Në një molekulë ADN-je, sasia e Adenines është sa dyfish i Guanines. Kjo molekulë ka 1200 nukleotide. Përcaktoni numrin e LH në këtë molekulë ADN-je.</legend>
          <input type="text" name="q4_b" placeholder="Përgjigje">
        </fieldset>
        <fieldset>
          <legend>c) Në një familje, babai është normal kurse nëna daltonike. Sa është mundësia që të linde një vajzë daltonike dhe nga cili prej gjysherëve një djale nuk merr asnjë kromozom të çiftit të seksit?</legend>
          <input type="text" name="q4_c" placeholder="Përgjigje">
        </fieldset>
        <fieldset>
          <legend>d) Një nga vargjet e ADN-së e ka masën molare 31050 g/mol. Përcaktoni masën molare të proteinës së koduar sipas kësaj ADN-je, duke ditur se masa molare e një nukleotidi është 345 g/mol dhe masa molare e një aminoacidi është 100 g/mol.</legend>
          <input type="text" name="q4_d" placeholder="Përgjigje">
        </fieldset>
      </section>

      <!-- Butoni Finish i vetëm për të dërguar testin -->
      <button type="button" id="submit-testim">Finish</button>
      <div id="result" class="result"></div>
    </form>
  `;

  // Shton event listener për butonin "Finish" të kuizit
  function addFormListener() {
    const submitBtn = document.getElementById("submit-testim");
    if (submitBtn) {
      submitBtn.addEventListener("click", function () {
        // Përmbledh të dhënat nga forma
        const form = document.getElementById("quiz-form");
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // Shto emailin e mësueses
        data.teacher_email = "ibierjol19@gmail.com";

        // Auto-vlerësimi për pjesën me alternativa (Pjesa 3)
        let score = 0;
        let total = 10; // 10 pyetje me alternativa
        const correctAnswers = {
          "q3a": "1", // ADN
          "q3b": "1", // Gregor Mendel
          "q3c": "1", // Ruajtja e informacionit gjenetik
          "q3d": "3", // 25% homozigotë dominues, 50% heterozigotë, 25% recesiv
          "q3e": "0", // Ruajtja e informacionit gjenetik
          "q3f": "1", // Përcaktimi i gjinisë së individit
          "q3g": "1", // "A; U; C; A"
          "q3h": "0", // 88
          "q3j": "1", // 27
          "q3m": "0"  // 3
        };

        for (const key in correctAnswers) {
          const radios = document.getElementsByName(key);
          Array.from(radios).forEach(radio => {
            if (radio.checked && radio.value === correctAnswers[key]) {
              score++;
            }
          });
        }

        // Përgjigjet e çelësave sipas dokumentit të përditësuar
        const keySection1 = `
          <h4>Çelësi për Pjesën 1:</h4>
          <ul>
            <li>a) Kromozom – struktura fijezore e ADN që mbart material gjenetik në formën e gjeneve</li>
            <li>b) Gjen – segmente të ADN-së që kodojnë një proteinë dhe janë përgjegjëse për një tipar të caktuar</li>
            <li>c) Kromozome homologe – kromozome me gjene të njëjta por jo domosdoshmërisht alele të njëjta</li>
            <li>d) Fenotip – shprehja fizike e tipareve të përcaktuara nga gjenotipi</li>
            <li>e) Kodominanca – dukuria e bashkzorimit të dy aleleve ku të dyja dominojnë dhe shprehen fenotipikisht</li>
            <li>f) Cikel qelizor – radha e proceseve që shoqërojnë qelizën nga formimi saj deri në ndarjen përfundimtare</li>
            <li>g) Interfaza – faza para ndarjes qelizore</li>
            <li>h) Hemofili – mungesa e faktorit koagulues në gjak</li>
            <li>i) ARN – Acidi ribonukleik</li>
          </ul>
          <p><strong>Plotëso (Çelësi):</strong> Interfaza ; Ndarja qelizore ; Cikli qelizor ; G1 ; S ; G2 ; Profazen ; kondensohen ; Shperbehet ; zhduket ; boshti mitoik ; metafaze ; boshtin ekuatorial ; Anafaze ; kromozomeve ; kromatid ; poleve ; qelizes ; telafaze ; kariokineza ; boshti mitoik ; citokineza</p>
          <p><em>Shënim: Për përgjigjet e hapura, të dhënat do të dërgohen në emailin e mësueses për verifikim.</em></p>
        `;
        const keySection2 = `
          <h4>Çelësi për Pjesën 2:</h4>
          <p>Ligji i zberthimit të tipareve (Nga kryqëzimi i individeve heterozigotë në F1 fitohen klasa fenotipike në raportin 3:1).</p>
          <p>a) Pjesa e figurës: kromozomi X dhe kromozomi Y</p>
          <p>b) Pjesa tjetër: Kariotip femeror</p>
          <p><em>Shënim: Për përgjigjet e hapura, do të dërgohen në email për verifikim.</em></p>
        `;
        const keySection3 = `
          <h4>Çelësi për Pjesën 3 (Multiple Choice & Plotëso):</h4>
          <ul>
            <li>a) ADN</li>
            <li>b) Gregor Mendel</li>
            <li>c) Ruajtja e informacionit gjenetik</li>
            <li>d) 25% homozigotë dominues, 50% heterozigotë, dhe 25% homozigotë recesiv</li>
            <li>e) Ruajtja e informacionit gjenetik</li>
            <li>f) Përcaktimi i gjinisë së individit</li>
            <li>g) A; U; C; A</li>
            <li>h) 88</li>
            <li>j) 27</li>
            <li>m) 3</li>
          </ul>
          <p><strong>Rezultati për pyetjet me alternativa:</strong> ${score} nga 10</p>
          <p><strong>Plotëso:</strong></p>
          <p>a) ARN-Polimeraza</p>
          <p>b) ADN-Helikaza dhe ADN-polimeraza</p>
        `;
        const keySection4 = `
          <h4>Çelësi për Pjesën 4 (Pyetje të hapura):</h4>
          <p>Për pyetjet kryesore (translatimi, replikimi, sëmundjet recesive, krahasimi ADN/ARN, mejoza 2) përgjigjet nuk janë auto‑vlerësuar – do të dërgohen për verifikim nga mësuesja.</p>
          <p>Për ushtrimet shtesë:</p>
          <ul>
            <li>a) 1800</li>
            <li>b) 1400 LH</li>
            <li>c) 0% vajze daltonike dhe gjyshi nga babai</li>
            <li>d) 3000</li>
          </ul>
        `;

        // Bër disa një përmbledhje të çelësave të përgjigjeve
        const resultHTML = `
          ${keySection1}
          ${keySection2}
          ${keySection3}
          ${keySection4}
        `;
        document.getElementById("result").innerHTML = resultHTML;

        // Dërgo të dhënat via EmailJS!
        emailjs
          .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data)
          .then(
            function (response) {
              alert("Përgjigjet u dërguan me sukses në emailin e mësueses.");
            },
            function (error) {
              alert("Gabim gjatë dërgimit të përgjigjeve.", error);
            }
          );
      });
    }
  }
});
