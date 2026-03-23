import { Button } from './styles/ButtonStyle'

export default function App() {
   return (
      <div className="flex flex-col h-screen items-center justify-center bg-blue-600 text-white text-3xl font-bold gap-6">
         <p className="m-0">Tailwind 4 + React ✅</p>
         <Button>Click Me</Button>
      </div>
   );
}
