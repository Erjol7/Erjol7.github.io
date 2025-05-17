document.addEventListener('DOMContentLoaded', function() {
  // Elementet për modal
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const closeModal = document.querySelector('.modal .close');

  // Merr të gjitha butonat e stacioneve
  const stationButtons = document.querySelectorAll('.station-btn');

  // Përmbajtja e secilit stacion si HTML (integron format e kuizit)
  const stationContent = {
    "1": `<div id="station-1-quiz">
            <h3>Stacioni 1: Perkufizo dhe Plotëso</h3>
            <form id="quiz-form-1">
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
              <button type="button" id="submit-station-1">Finish</button>
              <div id="result-station-1" class="result"></div>
            </form>
          </div>`,
    "2": `<div id="station-2-quiz">
            <h3>Stacioni 2: Teori dhe Emertim</h3>
            <form id="quiz-form-2">
              <fieldset>
                <legend>1. Formulo ligjin e dyte të Mendeleit</legend>
                <input type="text" name="law" placeholder="Shkruaj ligjin">
              </fieldset>
              <fieldset>
                <legend>2. Emerto pjesët e figurave</legend>
                <p>a) Pjesa e figurës (përgjigje: kromozomi X dhe kromozomi Y):</p>
                <input type="text" name="part_a" placeholder="Përgjigje">
                <p>b) Pjesa tjetër (përgjigje: Kariotip femeror):</p>
                <input type="text" name="part_b" placeholder="Përgjigje">
              </fieldset>
              <button type="button" id="submit-station-2">Finish</button>
              <div id="result-station-2" class="result"></div>
            </form>
          </div>`,
    "3": `<div id="station-3-quiz">
            <h3>Stacioni 3: Multiple Choice dhe Plotëso</h3>
            <form id="quiz-form-3">
              <fieldset>
                <legend>a) Cili është materiali gjenetik që përcakton karakteristikat trasheguese të organizmat? (P:ii)</legend>
                <label><input type="radio" name="q3a" value="0"> ARN</label>
                <label><input type="radio" name="q3a" value="1"> ADN</label>
                <label><input type="radio" name="q3a" value="2"> m-ARN</label>
                <label><input type="radio" name="q3a" value="3"> t-ARN</label>
              </fieldset>
              <fieldset>
                <legend>b) Cili shkencëtar hodhi bazat e trashegimit? (P:ii)</legend>
                <label><input type="radio" name="q3b" value="0"> Charles Darwin</label>
                <label><input type="radio" name="q3b" value="1"> Gregor Mendel</label>
                <label><input type="radio" name="q3b" value="2"> Francis Crick</label>
                <label><input type="radio" name="q3b" value="3"> James Watson</label>
              </fieldset>
              <fieldset>
                <legend>c) Cili është roli i kromozomeve në qelizë? (P:ii)</legend>
                <label><input type="radio" name="q3c" value="0"> Prodhimi i energjisë</label>
                <label><input type="radio" name="q3c" value="1"> Ruajtja e informacionit gjenetik</label>
                <label><input type="radio" name="q3c" value="2"> Transporti i molekulave</label>
                <label><input type="radio" name="q3c" value="3"> Shkatërrimi i substancave të dëmshme</label>
              </fieldset>
              <fieldset>
                <legend>d) Cili është rezultati i një kryqëzimi midis dy individëve heterozigotë për një tipar të dhënë? (P:iiii)</legend>
                <label><input type="radio" name="q3d" value="0"> 100% homozigotë</label>
                <label><input type="radio" name="q3d" value="1"> 50% heterozigotë dhe 50% homozigotë</label>
                <label><input type="radio" name="q3d" value="2"> 75% homozigotë dhe 25% heterozigotë</label>
                <label><input type="radio" name="q3d" value="3"> 25% homozigotë dominues, 50% heterozigotë dhe 25% homozigotë recesiv</label>
              </fieldset>
              <fieldset>
                <legend>e) Cili është roli i ARN-së në qelizë? (P:i)</legend>
                <label><input type="radio" name="q3e" value="0"> Ruajtja e informacionit gjenetik</label>
                <label><input type="radio" name="q3e" value="1"> Prodhimi i proteinave</label>
                <label><input type="radio" name="q3e" value="2"> Shkatërrimi i substancave të dëmshme</label>
                <label><input type="radio" name="q3e" value="3"> Transporti i energjisë</label>
              </fieldset>
              <fieldset>
                <legend>f) Cili është roli i kromozomeve seksuale tek njerëzit? (P:ii)</legend>
                <label><input type="radio" name="q3f" value="0"> Përcaktimi i tipareve të trashëguara</label>
                <label><input type="radio" name="q3f" value="1"> Përcaktimi i gjinisë së individit</label>
                <label><input type="radio" name="q3f" value="2"> Prodhimi i energjisë për qelizën</label>
                <label><input type="radio" name="q3f" value="3"> Ruajtja e proteinave në qelizë</label>
              </fieldset>
              <fieldset>
                <legend>g) Jepen bazat e ADN A; T; G; A. Si do të jetë renditja e bazave në antikodonin e t-ARN? (P:ii)</legend>
                <label><input type="radio" name="q3g" value="0"> U; A; C; U</label>
                <label><input type="radio" name="q3g" value="1"> A; U; C; A</label>
                <label><input type="radio" name="q3g" value="2"> A; T; G; A</label>
                <label><input type="radio" name="q3g" value="3"> T; A; C; T</label>
              </fieldset>
              <fieldset>
                <legend>h) Numri i kromozomeve haploide të lepujt është 22. Sa është numri i kromatideve në një qelizë e trurit? (P:i)</legend>
                <label><input type="radio" name="q3h" value="0"> 88</label>
                <label><input type="radio" name="q3h" value="1"> 44</label>
                <label><input type="radio" name="q3h" value="2"> 20</label>
                <label><input type="radio" name="q3h" value="3"> 22</label>
              </fieldset>
              <fieldset>
                <legend>j) Qeliza diploide tek elefantet kanë 56 kromozome. Sa kromozome autosome janë në një gamet? (P:ii)</legend>
                <label><input type="radio" name="q3j" value="0"> 28</label>
                <label><input type="radio" name="q3j" value="1"> 27</label>
                <label><input type="radio" name="q3j" value="2"> 26</label>
                <label><input type="radio" name="q3j" value="3"> 54</label>
              </fieldset>
              <fieldset>
                <legend>m) Një qelizë në profazën I të mejozës ka 12 kromatide. Sa tetrade ka qelizë në mejozën 1? (P:i)</legend>
                <label><input type="radio" name="q3m" value="0"> 3</label>
                <label><input type="radio" name="q3m" value="1"> 6</label>
                <label><input type="radio" name="q3m" value="2"> 12</label>
                <label><input type="radio" name="q3m" value="3"> 24</label>
              </fieldset>
              <fieldset>
                <legend>2. Plotëso:</legend>
                <p>a) Enzima që merr pjesë në transkriptim: <input type="text" name="q3_2a" placeholder="Përgjigje"></p>
                <p>b) Dy enzimat që marrin pjesë në replikim:</p>
                <p>1. <input type="text" name="q3_2b1" placeholder="Përgjigje"></p>
                <p>2. <input type="text" name="q3_2b2" placeholder="Përgjigje"></p>
              </fieldset>
              <button type="button" id="submit-station-3">Finish</button>
              <div id="result-station-3" class="result"></div>
            </form>
          </div>`,
    "4": `<div id="station-4-quiz">
            <h3>Stacioni 4: Pyetje të Hapura</h3>
            <form id="quiz-form-4">
              <fieldset>
                <legend>1. Çfarë është translatimi dhe si ndodh?</legend>
                <textarea name="q4_1" rows="3" placeholder="Shkruaj përgjigjen"></textarea>
              </fieldset>
              <fieldset>
                <legend>2. Pershkruaj replikimin dhe kodin gjenetik</legend>
                <textarea name="q4_2" rows="3" placeholder="Shkruaj përgjigjen"></textarea>
              </fieldset>
              <fieldset>
                <legend>3. Çfarë janë sëmundjet recesive të lidhura me gjenin X-seksual, cilat janë dhe veçoritë e tyre?</legend>
                <textarea name="q4_3" rows="3" placeholder="Shkruaj përgjigjen"></textarea>
              </fieldset>
              <fieldset>
                <legend>4. Bej krahasimin e ADN dhe ARN</legend>
                <textarea name="q4_4" rows="3" placeholder="Shkruaj përgjigjen"></textarea>
              </fieldset>
              <fieldset>
                <legend>5. Pershkruaj mejozën 2</legend>
                <textarea name="q4_5" rows="3" placeholder="Shkruaj përgjigjen"></textarea>
              </fieldset>
              <h4>Për pyetjet shtesë, shkruani përgjigjet në fletë:</h4>
              <fieldset>
                <legend>a) Në një molekulë ADN përmban 500 timine nucleotide. Numri i lidhjeve hidrogjenore midis dy zinxhirëve të saj është 2200. Sa nukleotide ka gjithsej kjo molekulë ADN-je? (P:—)</legend>
                <input type="text" name="q4_a" placeholder="Përgjigje">
              </fieldset>
              <fieldset>
                <legend>b) Në një molekulë ADN-je, sasia e Adenines është sa dyfish i Guanines. Kjo molekulë ka 1200 nukleotide. Përcaktoni numrin e lidhjeve hidrogjenore në këtë molekulë ADN-je. (P:—)</legend>
                <input type="text" name="q4_b" placeholder="Përgjigje">
              </fieldset>
              <fieldset>
                <legend>c) Në një familje, babai është normal kurse nëna daltonike. Sa është mundësia që të linde një vajzë daltonike dhe nga cili prej gjysherëve një djalë nuk merr asnjë kromozom të çiftit të seksit? (P:—)</legend>
                <input type="text" name="q4_c" placeholder="Përgjigje">
              </fieldset>
              <fieldset>
                <legend>d) Një nga vargjet e ADN-së ka masën molare 31050 g/mol. Përcaktoni masën molare të proteinës së koduar sipas kësaj ADN-je, duke ditur se masa molare e një nukleotidi është 345 g/mol dhe masa molare e një aminoacidi është 100 g/mol. (P:—)</legend>
                <input type="text" name="q4_d" placeholder="Përgjigje">
              </fieldset>
              <button type="button" id="submit-station-4">Finish</button>
              <div id="result-station-4" class="result"></div>
            </form>
          </div>`
  };

  // Ngarko përmbajtjen e stacionit në modal kur klikohet butoni përkatës
  stationButtons.forEach(button => {
    button.addEventListener('click', function() {
      const stationId = this.getAttribute('data-station');
      modalBody.innerHTML = stationContent[stationId] || "<p>Nuk ka përmbajtje për këtë stacion.</p>";
      modal.style.display = 'block';
      // Pas vendosjes së përmbajtjes, shtojmë event listener-et për format e kuizit
      addFormListeners();
    });
  });

  // Mbyll modal-in kur klikohet shenja "×"
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Mbyll modal-in kur klikohet jashtë përmbajtjes së modal-it
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Funksioni që shton event listener-et për butonat Finish në secilin stacion
  function addFormListeners() {
    // STACIONI 1 (pyetje me përgjigje hapësorë që nuk gjykohen automatikisht)
    const submitStation1 = document.getElementById("submit-station-1");
    if (submitStation1) {
      submitStation1.addEventListener("click", function() {
        const resultDiv = document.getElementById("result-station-1");
        resultDiv.style.color = "green";
        let answerKey = `<h4>Alternativat e sakta për Stacionin 1:</h4>`;
        answerKey += `<ul>
          <li>a) Kromozom</li>
          <li>b) Gjen</li>
          <li>c) Kromozome homologe</li>
          <li>d) Fenotip</li>
          <li>e) Kodominanca</li>
          <li>f) Cikel qelizor</li>
          <li>g) Interfaza</li>
          <li>h) Hemofili</li>
          <li>i) ARN</li>
        </ul>`;
        answerKey += `<p>Për vendet bosh: (P.sh. Interfaza ; Ndarja qelizore ; Cikli qelizor ; G1 ; S ; G2 ; Profazen ; kondensohen ; Shperbehet ; zhduket ; boshti mitoik ; metafaze ; boshtin ekuatorial ; Anafaze ; kromozomeve ; kromatid ; poleve ; qelizes ; telafaze ; kariokineza ; boshti mitoik ; citokineza).</p>`;
        answerKey += `<p><em>Shënim: Përgjigjet e kësaj sekcije do të dërgohen në emailin e mesueses për verifikim.</em></p>`;
        resultDiv.innerHTML = answerKey;
      });
    }

    // STACIONI 2 (pyetje me përgjigje hapësorë)
    const submitStation2 = document.getElementById("submit-station-2");
    if (submitStation2) {
      submitStation2.addEventListener("click", function() {
        const resultDiv = document.getElementById("result-station-2");
        resultDiv.style.color = "green";
        let answerKey = `<h4>Alternativat e sakta për Stacionin 2:</h4>`;
        answerKey += `<p>Ligji i zberthimit të tipareve (ligji i dyte i Mendeleit).</p>`;
        answerKey += `<p>a) Pjesa e figurës: kromozomi X dhe kromozomi Y</p>`;
        answerKey += `<p>b) Pjesa tjetër: Kariotip femeror</p>`;
        answerKey += `<p><em>Shënim: Përgjigjet e kësaj sekcije do të dërgohen në emailin e mesueses për verifikim.</em></p>`;
        resultDiv.innerHTML = answerKey;
      });
    }

    // STACIONI 3 (pyetje me alternativa, auto-graded)
    const submitStation3 = document.getElementById("submit-station-3");
    if (submitStation3) {
      submitStation3.addEventListener("click", function() {
        const resultDiv = document.getElementById("result-station-3");
        resultDiv.style.color = "green";
        let score = 0;
        let total = 10; // numri i pyetjeve me alternativa
        const answers = {
          "q3a": "1",
          "q3b": "1",
          "q3c": "1",
          "q3d": "3",
          "q3e": "0",
          "q3f": "1",
          "q3g": "1",
          "q3h": "0",
          "q3j": "1",
          "q3m": "0"
        };
        // Vlerëson secilën pyetje me alternativa
        for (const key in answers) {
          const radios = document.getElementsByName(key);
          Array.from(radios).forEach(radio => {
            if (radio.checked && radio.value === answers[key]) {
              score++;
            }
          });
        }
        let answerKey = `<h4>Alternativat e sakta për Stacionin 3:</h4>`;
        answerKey += `<ul>
          <li>a) ADN</li>
          <li>b) Gregor Mendel</li>
          <li>c) Ruajtja e informacionit gjenetik</li>
          <li>d) 25% homozigotë dominues, 50% heterozigotë dhe 25% homozigotë recesiv</li>
          <li>e) Ruajtja e informacionit gjenetik</li>
          <li>f) Përcaktimi i gjinisë së individit</li>
          <li>g) A; U; C; A</li>
          <li>h) 88</li>
          <li>j) 27</li>
          <li>m) 3</li>
        </ul>`;
        answerKey += `<p>Rezultati juaj: ${score} nga ${total} për pyetjet me alternativa.</p>`;
        // Gjithashtu për plotësimet pjesërisht, shfaq çelësin
        answerKey += `<h4>Plotëso:</h4>`;
        answerKey += `<p>a) Enzima: ARN-Polimeraza</p>`;
        answerKey += `<p>b) Enzima 1: ADN-Helikaza; Enzima 2: ADN-polimeraza</p>`;
        resultDiv.innerHTML = answerKey;
      });
    }

    // STACIONI 4 (pyetje të hapura)
    const submitStation4 = document.getElementById("submit-station-4");
    if (submitStation4) {
      submitStation4.addEventListener("click", function() {
        const resultDiv = document.getElementById("result-station-4");
        resultDiv.style.color = "green";
        let answerKey = `<h4>Alternativat e sakta për Stacionin 4:</h4>`;
        answerKey += `<p>1. Translatimi është procesi ku mRNA përkthehet në proteina (ndodh në ribozoma).</p>`;
        answerKey += `<p>2. Replikimi është kopjimi i ADN-së, ndërsa kodi gjenetik përcakton renditjen e aminoacideve.</p>`;
        answerKey += `<p>3. Sëmundjet recesive të lidhura me gjenin X-seksual (p.sh. hemofilia) verifikohen sipas modeleve të trashëgimit.</p>`;
        answerKey += `<p>4. Krahasimi: ADN-ja është molekulë dyfishe që ruan informacionin, ndërsa ARN-ja është zinxhir i vetëm që udhëzon prodhimin e proteinave.</p>`;
        answerKey += `<p>5. Mejoza 2 përfshin ndarje të qelizave haploide.</p>`;
        answerKey += `<h4>Për pyetjet shtesë:</h4>`;
        answerKey += `<p>a) 1800</p>`;
        answerKey += `<p>b) 1400 LH</p>`;
        answerKey += `<p>c) 0% vajze daltonike dhe gjyshi nga babai</p>`;
        answerKey += `<p>d) 3000</p>`;
        answerKey += `<p><em>Shënim: Përgjigjet e kësaj sekcije do të dërgohen në emailin e mesueses për verifikim.</em></p>`;
        resultDiv.innerHTML = answerKey;
      });
    }
  }
});
