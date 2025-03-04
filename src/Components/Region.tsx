import KanicaImage from "../assets/kanica.jpg";
import RogoznicaImage from "../assets/Rogoznica.jpg";
import TrogirImage from "../assets/trogir.jpg";
import SplitImage from "../assets/split.jpg";
import { useInView } from "react-intersection-observer";

function Region() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [ref7, inView7] = useInView();
  const [ref8, inView8] = useInView();

  return (
    <div className="pt-24 bg-blue-50 mt-2 mb-3 mx-2 rounded-[40px]">
        <div className="flex md:px-48 pb-2 gap-14 pt-8">
            <div className="w-1/2">
              <h1 className="text-3xl text-blue-500 font-bold">Discover Split: The Heart of the Dalmatian Coast</h1>
              <p className="pt-1 text-gray-600">Nestled on Croatia’s stunning Dalmatian coast, Split is a city where ancient history meets modern Mediterranean life. As the country’s second-largest city, it boasts a perfect blend of culture, history, and vibrant seaside charm. With its UNESCO-listed Old Town, crystal-clear Adriatic waters, and lively atmosphere, Split is a must-visit destination.</p>
              <h2 className="pt-2 text-2xl text-blue-600 font-bold">Top Attractions in Split</h2>
              <p className="text-lg font-semibold text-blue-500 pt-1">Diocletian’s Palace 🏛️</p>
              <p className="text-gray-600">The centerpiece of Split, Diocletian’s Palace, was built in the 4th century by the Roman Emperor Diocletian. Today, this massive ancient structure forms the heart of the Old Town, with narrow alleys, charming cafés, and historic landmarks hidden within its walls. </p>
              <p className="text-lg font-semibold text-blue-500 pt-1">Riva Promenade 🌊</p>
              <p className="text-gray-600">The centerpiece of Split, Diocletian’s Palace, was built in the 4th century by the Roman Emperor Diocletian. Today, this massive ancient structure forms the heart of the Old Town, with narrow alleys, charming cafés, and historic landmarks hidden within its walls. </p>
              <p className="text-lg font-semibold text-blue-500 pt-1">Marjan Hill 🌿</p>
              <p className="text-gray-600">The centerpiece of Split, Diocletian’s Palace, was built in the 4th century by the Roman Emperor Diocletian. Today, this massive ancient structure forms the heart of the Old Town, with narrow alleys, charming cafés, and historic landmarks hidden within its walls. </p>
              <p className="text-lg font-semibold text-blue-500 pt-1">Bacvice Beach 🏖️</p>
              <p className="text-gray-600">The centerpiece of Split, Diocletian’s Palace, was built in the 4th century by the Roman Emperor Diocletian. Today, this massive ancient structure forms the heart of the Old Town, with narrow alleys, charming cafés, and historic landmarks hidden within its walls. </p>
              <p className="text-lg font-semibold text-blue-500 pt-1">Mestrovic Gallery 🎨</p>
              <p className="text-gray-600">The centerpiece of Split, Diocletian’s Palace, was built in the 4th century by the Roman Emperor Diocletian. Today, this massive ancient structure forms the heart of the Old Town, with narrow alleys, charming cafés, and historic landmarks hidden within its walls. </p>
            </div>
            <div className="flex flex-col justify-center w-1/2">
              <img className="rounded-[40px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Split_080620-133710-IMG_0968x.jpg/1920px-Split_080620-133710-IMG_0968x.jpg" />
            </div>
        </div>
        <div className="flex md:px-48 pb-8 gap-14 pt-8">
            <div className="flex flex-col justify-center w-1/2">
              <img className="rounded-[40px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Split_080620-133710-IMG_0968x.jpg/1920px-Split_080620-133710-IMG_0968x.jpg" />
            </div>
            <div className="w-1/2">
              <h1 className="text-3xl text-blue-500 font-bold">Rogoznica: A Hidden Gem on the Dalmatian Coast</h1>
              <p className="pt-1 text-gray-600">Located between Split and Šibenik, Rogoznica is a charming seaside town known for its pristine beaches, crystal-clear waters, and a laid-back Mediterranean vibe. Unlike larger tourist hotspots, Rogoznica offers a peaceful retreat with stunning natural beauty, traditional Dalmatian charm, and plenty of activities for visitors.</p>
              <h2 className="pt-2 text-2xl text-blue-600 font-bold">Top Attractions in Rogoznica</h2>
              <p className="text-lg font-semibold text-blue-500 pt-1">Marina Frapa ⛵</p>
              <p className="text-gray-600">One of the most beautiful marinas in the Adriatic, Marina Frapa is the heart of Rogoznica’s social and nightlife scene. It’s a top destination for yachters and visitors looking to enjoy waterfront restaurants, bars, and luxury amenities.</p>
              <p className="text-lg font-semibold text-blue-500 pt-1">Dragon’s Eye Lake (Zmajevo Oko) 🌊</p>
              <p className="text-gray-600">This natural saltwater lake is surrounded by cliffs and filled with legends. Locals say the lake has mysterious properties, and its waters change color due to unique biological activity. It’s a great spot for swimming and cliff diving.</p>
              <p className="text-lg font-semibold text-blue-500 pt-1">Rogoznica Old Town 🏡</p>
              <p className="text-gray-600">Strolling through Rogoznica’s old stone streets, you’ll find charming houses, cozy cafés, and a traditional Dalmatian atmosphere. The town retains its fishing village feel, offering a glimpse into authentic Croatian coastal life.</p>
              <p className="text-lg font-semibold text-blue-500 pt-1">Promenade & Beaches 🏖️</p>
              <p className="text-gray-600">The town boasts a beautiful seaside promenade, perfect for sunset walks, lined with bars and restaurants. Nearby, you'll find stunning pebble and rocky beaches like Šepurina Beach and Miline Beach, known for their crystal-clear waters and family-friendly environment.</p>
              <p className="text-lg font-semibold text-blue-500 pt-1">Cape Planka 🌅</p>
              <p className="text-gray-600">The southernmost point of Rogoznica, Cape Planka, is where winds and sea currents collide, creating dramatic waves and stunning views. It’s a historical place, mentioned in ancient maritime records.</p>
            </div>
        </div>

    </div>
  );
}

export default Region;
