import { Globe, Monitor, Code, Users, Cloud } from 'lucide-react';

export const metadata = {
  title: 'History of the Web'
};

export default function Page() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-8">History of the Web</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center">
          <Globe className="w-6 h-6 text-white mr-4" />
          <span className="text-lg">1989 - Invented by Tim Berners-Lee</span>
        </div>
        <div className="flex items-center">
          <Monitor className="w-6 h-6 text-white mr-4" />
          <span className="text-lg">1993 - Mosaic browser popularized the Web</span>
        </div>
        <div className="flex items-center">
          <Code className="w-6 h-6 text-white mr-4" />
          <span className="text-lg">1995 - JavaScript was introduced</span>
        </div>
        <div className="flex items-center">
          <Users className="w-6 h-6 text-white mr-4" />
          <span className="text-lg">2004 - Rise of Web 2.0 and social media</span>
        </div>
        <div className="flex items-center">
          <Cloud className="w-6 h-6 text-white mr-4" />
          <span className="text-lg">2020s - Cloud-native and modern frameworks dominate</span>
        </div>
      </div>
    </>
  );
}