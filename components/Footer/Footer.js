// components/Footer/Footer.js

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-6 fl">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-4">Built by </p>
        <ul className="space-y-2">
          <li>
            <span className="font-bold">Abdulaziz Alhashdi</span> -{" "}
            <a
              href="https://github.com/Hash-ezz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition"
            >
              GitHub
            </a>{" "}
            |{" "}
          </li>
        </ul>
        <p className="mt-4 text-gray-400 text-sm">
          © {new Date().getFullYear()} MovieApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
