export default function handler(req, res) {
  res.status(200).json([
    { element: "fire", color: "bg-red-600" },
    { element: "grass", color: "bg-green-600" },
    { element: "poison", color: "bg-purple-800" },
    { element: "electric", color: "bg-yellow-600" },
    { element: "fairy", color: "bg-pink-700" },
    { element: "water", color: "bg-blue-700" },
    { element: "ice", color: "bg-sky-500" },
    { element: "fighting", color: "bg-orange-700" },
    { element: "flying", color: "bg-gray-500" },
    { element: "bug", color: "bg-green-800" },
    { element: "dark", color: "bg-slate-800" },
    { element: "normal", color: "bg-purple-500" },
    { element: "ghost", color: "bg-blue-700" },
    { element: "ground", color: "bg-orange-700" },
    { element: "rock", color: "bg-orange-900" },
    { element: "steel", color: "bg-lime-700" },
  ]);
}
