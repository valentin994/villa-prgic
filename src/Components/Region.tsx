import KanicaImage from "../assets/kanica.jpg";
import RogoznicaImage from "../assets/Rogoznica.jpg";
import TrogirImage from "../assets/trogir.jpg";
import SplitImage from "../assets/split.jpg";
function Region() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="container">
        <p className="text-secondary text-3xl text-center p-4">Region</p>
        <div className="grid grid-cols-3 border border-gray-50 rounded shadow my-8">
          <div className="col-span-2">
            <p className="text-primary text-2xl p-4">Kanica</p>
            <p className="text-primary p-4">
              Kanica je turističko naselje smješteno u istoimenoj uvali udaljeno
              od Rogoznice 4,2 km. Mjesto je idealno za miran, tih i ugodan
              odmor ali i za sve one koji žele osjetiti toplu atmosferu
              privatnog smještaja. Kanica za goste željne nešto aktivnijeg
              odmora nudi ronjenje, surfanje ,ribolov , skijanje na vodi ,
              ujedno je pogodna za pješačenje i vožnju biciklom. Blizina mora i
              puno skrivenih uvala i plaža su joj dodatni atributi. Plaže su
              pješčane,všljunčane i stjenovite s betoniranim kupalištem pred
              kućama. Želite li savršeno mjesto za odmor sa vašom obitelji i
              prijateljima i kućnim ljubimcima, sve pogodnosti ćete pronaći u
              Kanici čiji mještani nude smještaj u apartmanima i sobama s
              gostoprimstvom koji će učiniti Vaš odmor još ugodnijim. Dobrodošli
              Kanica. Smještaj u Kanici.
            </p>
          </div>
          <img
            src={KanicaImage}
            alt="Kanica"
            className="object-cover max-w-full h-auto"
          />
        </div>
        <div className="grid grid-cols-3 border-1 border-gray shadow my-16">
          <img
            src={RogoznicaImage}
            alt="Rogoznica"
            className="object-cover max-w-full h-auto"
          />
          <div className="col-span-2">
            <p className="text-primary text-2xl p-4 text-piction-blue">
              Rogoznica
            </p>
            <p className="text-primary p-4 text-secondary">
              Najjužnije turističko središte- Rogoznica, sa susjednim mjestom
              Ražanj, te s 54 km prekrasne razvedene obale, posebno je poznato
              po nautičkom, obalnom i pomorskom turizmu. Malo, mirno i relativno
              mlado naselje okruženo prekrasnim morskim krajolikom i otvorenim
              morem koje oduzima dah, izgrađeno je na ruševinama živopisnih
              antičkih i srednjovjekovnih naselja. O Rogoznici postoji i
              nekoliko mističnih i fascinantnih legendi koje istraživača željnog
              putovanja povezuju s primamljivim zovom čarobnih i dalekih mjesta.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 border-1 border-gray shadow my-16">
          <div className="col-span-2">
            <p className="text-primary text-2xl p-4 text-piction-blue">
              Trogir
            </p>
            <p className="text-primary p-4 text-secondary">
              Zahvaljujući svojem geografskom položaju Trogir je od pamtivijeka
              bio idealno mjesto za život. S prirodno zaštićenom lukom, brojnim
              izvorima pitke vode, plodnim tlom u zaleđu grada te s kamenom iz
              lokalnih kamenoloma Trogir je neprekinuto nastanjen već više od
              3600 godina. Ovaj nadahnjujući mediteranski grad još je od vremena
              starih Grka privlačio brojne majstore koji su ovdje živjeli i
              stvarali. Razni umjetnici ovdje su pronašli inspiraciju i ostavili
              brojne tragove svojeg djelovanja. Trogir je grad majstora, grad
              koji nas polako, ali uvjerljivo, uvlači u začarani labirint
              ljepote, u uske kamene uličice sazdane od žutoga glatkog kamena,
              toplih boja poslijepodnevnog sunca. Ovaj je grad majstora svoju
              priču započeo portalom Majstora Radovana, Muscardellom, Alešijem,
              Firentincem, Duknovićem i Blažom Jurjevom Trogiraninom. Ti
              majstori označili su prekretnicu u povijesti Trogira, smjestivši
              ga u sam svjetski umjetnički vrh.
            </p>
          </div>
          <img
            src={TrogirImage}
            alt="Trogir"
            className="object-cover max-w-full h-auto"
          />
        </div>
        <div className="grid grid-cols-3 border-1 border-gray shadow my-16">
          <img
              src={SplitImage}
              alt="Split"
              className="object-cover max-w-full h-auto"
          />
          <div className="col-span-2">
            <p className="text-primary text-2xl p-4 text-piction-blue">Split</p>
            <p className="text-primary p-4 text-secondary">
              Punih 17 stoljeća traje priča o Splitu, još otkako je rimski car
              Dioklecijan odlučio baš na tom poluotoku blizu velikog rimskog grada
              Salone izgraditi palaču u kojoj bi u miru proveo posljednje godine
              svoga života. U tih 1700 godina Palača je polako postajala i postala
              grad, koji danas mami bogatom tradicijom, veličanstvenom poviješću,
              ljepotom prirodne i kulturne baštine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Region;
