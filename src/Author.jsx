import { Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function Author() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <div className="w-64 h-64 mb-8">
          <img
            src="https://d39qdlcrvnra4b.cloudfront.net/avatars/3246055/original/1516801233652.jpeg?1730991987"
            alt="Muthukumaran Navaneethakrishnan"
            className="rounded-full w-full h-full object-cover shadow-lg"
          />
        </div>

        <h2 className="text-3xl font-bold mb-6">
          Muthukumaran Navaneethakrishnan
        </h2>

        <div className="flex gap-6 mb-8">
          <a
            href="https://github.com/muthuishere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/muthuishere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com/muthuishere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://facebook.com/muthuishere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/muthuishere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <Instagram size={24} />
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Muthukumaran Navaneethakrishnan is a programmer who loves coding in
            Clojure. He also codes in Java, JavaScript, and Golang—because they
            pay the bills. Not that he minds Golang, with its impressive
            compilation speed, compact image size, and stellar performance. He
            has contributed to various open-source projects, big and small, and
            has built libraries, Chrome extensions, and automated apps for fun.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Author;
