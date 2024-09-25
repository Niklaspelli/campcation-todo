import Header from "./components/Header";
import Image from "./components/Image";
import NavBar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <main>
        <h1>Det här är din TodoApp!</h1>
        <Image />
      </main>
    </>
  );
}

/* Detta kodprov är tänkt att max ta 1-2h. Tanken är att man ska få visa hur man föredrar att strukturera kod samt påvisa förståelse 
både för dokumentation men också grundläggande koncept primärt inom React.

Uppgiften är att sätta upp ett Typescript-projekt i NextJS innehållande en välkomstsida samt en simpel TODO-lista.
Skapa en landningssida, design är upp till dig.
Den bör innehålla minst en bild
Det ska finnas en lista av routing länkar visade, dessa länkar bör vara lätta att addera och ta bort ifrån i componenten
Den enda länken som måste finnas är TODO listan, kommer du på fler saker så kör på! :)
TODO listan skall stödja:
Man ska kunna lägga till
Ta bort
Den ska visa varje entitet med nyast överst
När detta byggs, kom ihåg:
Att separera ut CSS ifrån react templaten (dvs ingen inline-css, om du inte använder tailwind)
Typa alla funktioner, states, context osv. Inga ‘any’ alltså
Hellre många små komponenter än få stora
Använd Github */
