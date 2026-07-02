import Image from "next/image";

export default function TestPage() {
  const images = [
    "Jet set go.png",
    "bg1.png",
    "escarpment.png",
    "image.png",
    "location.png",
    "map.png",
    "opera.png",
    "rock.png",
    "sedney.png",
    "travel.png",
    "zoo.png"
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen text-black">
      <h1 className="text-3xl font-bold mb-8">Asset Inspector</h1>
      <div className="grid grid-cols-2 gap-8">
        {images.map((img) => (
          <div key={img} className="border p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{img}</h2>
            <div className="relative w-full h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
              <img src={`/${img}`} alt={img} className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
