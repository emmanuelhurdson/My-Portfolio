import { Github, Linkedin, MessageCircle, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="mb-2 text-2xl font-black">Emmanuel Opiyo</h3>
            <p className="text-gray-400 font-bold">
              Frontend Developer & Designer
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com/emmanuelhurdson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-opiyo-7552152a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://wa.link/hd19n9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center font-bold">
            Made with <Heart className="h-4 w-4 mx-2 text-red-500" /> by
            Emmanuel Opiyo © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
